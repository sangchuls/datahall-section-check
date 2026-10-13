// 로컬 전용 서버 — 정적 파일을 서빙하고, LLM API 키를 서버 쪽에만 보관한 채
// /api/chat 요청을 공급자별(Gemini/Claude/OpenAI/회사 전용)로 프록시한다. 브라우저에는 키가 절대 노출되지 않는다.
// 외부 npm 패키지 없이 Node 내장 모듈(http/fs/path)과 전역 fetch(Node 18+)만 사용한다.
//
// 실행: node server.js   (사전에 .env.example을 .env로 복사하고 쓸 공급자의 키를 채워둘 것 — 전부 채울 필요는 없다)

const http = require('http');
const fs = require('fs');
const path = require('path');

function loadEnvFile() {
    const envPath = path.join(__dirname, '.env');
    if (!fs.existsSync(envPath)) return;
    fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const eq = trimmed.indexOf('=');
        if (eq === -1) return;
        const key = trimmed.slice(0, eq).trim();
        const val = trimmed.slice(eq + 1).trim();
        if (!(key in process.env)) process.env[key] = val;
    });
}
loadEnvFile();

const PORT = process.env.PORT || 8899;

// 공급자별 라우팅 — 클라이언트는 {provider, payload}만 보내고, 서버가 각자의 URL/인증 헤더/env 키를 채운다.
// custom(회사 전용)은 OpenAI 호환(/chat/completions) 형식을 전제로 base URL을 CUSTOM_LLM_BASE_URL에서 읽는다.
const PROVIDERS = {
    gemini: {
        envKey: 'GEMINI_API_KEY',
        url: () => `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-3.6-flash'}:generateContent`,
        headers: key => ({ 'x-goog-api-key': key })
    },
    claude: {
        envKey: 'ANTHROPIC_API_KEY',
        url: () => 'https://api.anthropic.com/v1/messages',
        headers: key => ({ 'x-api-key': key, 'anthropic-version': '2023-06-01' })
    },
    openai: {
        envKey: 'OPENAI_API_KEY',
        url: () => 'https://api.openai.com/v1/chat/completions',
        headers: key => ({ 'Authorization': 'Bearer ' + key })
    },
    custom: {
        envKey: 'CUSTOM_LLM_API_KEY',
        url: () => (process.env.CUSTOM_LLM_BASE_URL || '').replace(/\/$/, '') + '/chat/completions',
        headers: key => ({ 'Authorization': 'Bearer ' + key }),
        extraEnvCheck: () => process.env.CUSTOM_LLM_BASE_URL ? null : 'CUSTOM_LLM_BASE_URL이 설정되지 않았습니다.'
    }
};

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml'
};

// 앱 구동에 필요한 정적 파일만 내려준다 — .env·feedback.json·server.js 등 점(.)으로 시작하거나
// 허용 확장자가 아닌 파일은 404 처리해 API 키·피드백 데이터가 URL로 새지 않게 한다.
const STATIC_ALLOWED = new Set(['.html', '.js', '.css', '.png', '.jpg', '.svg', '.ico']);
function serveStatic(req, res, urlPath) {
    let rel = urlPath === '/' ? '/index.html' : urlPath;
    try { rel = decodeURIComponent(rel.split('?')[0]); } catch (e) { res.writeHead(400); res.end('Bad request'); return; }
    const filePath = path.normalize(path.join(__dirname, rel));
    const ext = path.extname(filePath).toLowerCase();
    const hidden = rel.split(/[\/]/).some(seg => seg.startsWith('.')) || path.basename(filePath) === 'server.js';
    if (!filePath.startsWith(__dirname + path.sep) || hidden || !STATIC_ALLOWED.has(ext)) { res.writeHead(404); res.end('Not found'); return; }
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
    });
}

function sendJSON(res, status, obj) {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(obj));
}

async function handleChat(req, res) {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
        let provider, payload;
        try {
            ({ provider, payload } = JSON.parse(body || '{}'));
        } catch (e) {
            sendJSON(res, 400, { error: '잘못된 요청 본문입니다.' });
            return;
        }
        const cfg = PROVIDERS[provider];
        if (!cfg) { sendJSON(res, 400, { error: '알 수 없는 provider: ' + provider }); return; }

        const extraErr = cfg.extraEnvCheck && cfg.extraEnvCheck();
        if (extraErr) { sendJSON(res, 500, { error: '서버에 ' + extraErr }); return; }

        const key = process.env[cfg.envKey] || '';
        if (!key) {
            sendJSON(res, 500, { error: `서버에 ${cfg.envKey}가 설정되지 않았습니다. .env.example을 참고해 .env에 채워주세요.` });
            return;
        }
        try {
            const upstream = await fetch(cfg.url(), {
                method: 'POST',
                headers: Object.assign({ 'Content-Type': 'application/json' }, cfg.headers(key)),
                body: JSON.stringify(payload)
            });
            const data = await upstream.json();
            sendJSON(res, upstream.status, data);
        } catch (e) {
            sendJSON(res, 502, { error: 'API 호출 실패: ' + e.message });
        }
    });
}

// ── 사용자 피드백 메모 ──
// 누구나 제출(POST /api/feedback)할 수 있고, 목록 조회·상태 변경·삭제는 FEEDBACK_ADMIN_KEY가 설정돼 있으면
// 그 키(x-admin-key 헤더)를 가진 관리자만 가능하다. 데이터는 feedback.json(gitignore)에 저장된다.
const FEEDBACK_FILE = path.join(__dirname, 'feedback.json');
const FB_CATEGORIES = ['bug', 'feature', 'improve', 'etc'];
const FB_STATUSES = ['new', 'accepted', 'hold', 'rejected'];
function fbRead() { try { return JSON.parse(fs.readFileSync(FEEDBACK_FILE, 'utf8')); } catch (e) { return []; } }
function fbWrite(list) { fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(list, null, 2)); }
function fbIsAdmin(req) { const k = process.env.FEEDBACK_ADMIN_KEY; return !k || req.headers['x-admin-key'] === k; }

function readJsonBody(req, res, cb) {
    let body = '', tooBig = false;
    req.on('data', c => { body += c; if (body.length > 1e6) { tooBig = true; sendJSON(res, 413, { error: '요청이 너무 큽니다.' }); req.destroy(); } });
    req.on('end', () => {
        if (tooBig) return;
        try { cb(JSON.parse(body || '{}')); } catch (e) { sendJSON(res, 400, { error: '잘못된 요청 본문입니다.' }); }
    });
}

function handleFeedback(req, res, route) {
    if (route === 'list') {
        if (!fbIsAdmin(req)) { sendJSON(res, 401, { error: '관리자 키가 필요합니다.' }); return; }
        sendJSON(res, 200, fbRead());
        return;
    }
    readJsonBody(req, res, body => {
        if (route === 'add') {
            const text = String(body.text || '').trim().slice(0, 5000);
            if (!text) { sendJSON(res, 400, { error: '내용이 비어 있습니다.' }); return; }
            const ctx = body.context && JSON.stringify(body.context).length < 100000 ? body.context : null;
            const item = {
                id: 'fb_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
                createdAt: new Date().toISOString(),
                category: FB_CATEGORIES.includes(body.category) ? body.category : 'etc',
                text, status: 'new', context: ctx
            };
            const list = fbRead(); list.push(item); fbWrite(list);
            sendJSON(res, 200, { ok: true, id: item.id });
            return;
        }
        if (!fbIsAdmin(req)) { sendJSON(res, 401, { error: '관리자 키가 필요합니다.' }); return; }
        const list = fbRead();
        const idx = list.findIndex(x => x.id === body.id);
        if (idx === -1) { sendJSON(res, 404, { error: '항목을 찾을 수 없습니다.' }); return; }
        if (route === 'update') {
            if (!FB_STATUSES.includes(body.status)) { sendJSON(res, 400, { error: '잘못된 상태값입니다.' }); return; }
            list[idx].status = body.status;
        } else if (route === 'delete') {
            list.splice(idx, 1);
        }
        fbWrite(list);
        sendJSON(res, 200, { ok: true });
    });
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/chat') {
        handleChat(req, res);
        return;
    }
    if (req.url === '/api/feedback' && req.method === 'GET') { handleFeedback(req, res, 'list'); return; }
    if (req.method === 'POST' && req.url === '/api/feedback') { handleFeedback(req, res, 'add'); return; }
    if (req.method === 'POST' && req.url === '/api/feedback/update') { handleFeedback(req, res, 'update'); return; }
    if (req.method === 'POST' && req.url === '/api/feedback/delete') { handleFeedback(req, res, 'delete'); return; }
    if (req.method === 'GET') {
        serveStatic(req, res, req.url);
        return;
    }
    res.writeHead(405); res.end('Method not allowed');
});

server.listen(PORT, () => {
    console.log(`Datahall 검토 프로그램 서버 실행 중: http://localhost:${PORT}`);
    const configured = Object.entries(PROVIDERS).filter(([, cfg]) => process.env[cfg.envKey]).map(([name]) => name);
    if (configured.length) {
        console.log(`✅ 설정된 AI 공급자: ${configured.join(', ')}`);
    } else {
        console.warn('⚠ 설정된 AI 공급자 키가 없습니다 — 방문자가 개인 키를 입력하기 전까지 AI 어시스턴트는 동작하지 않습니다. .env.example을 참고해 .env를 만들어주세요.');
    }
});
