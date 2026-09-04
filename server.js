// 로컬 전용 서버 — 정적 파일을 서빙하고, Gemini API 키를 서버 쪽에만 보관한 채
// /api/chat 요청을 프록시한다. 브라우저에는 키가 절대 노출되지 않는다.
// 외부 npm 패키지 없이 Node 내장 모듈(http/fs/path)과 전역 fetch(Node 18+)만 사용한다.
//
// 실행: node server.js   (사전에 .env.example을 .env로 복사하고 GEMINI_API_KEY를 채워둘 것)

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
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml'
};

function serveStatic(req, res, urlPath) {
    let rel = urlPath === '/' ? '/index.html' : urlPath;
    rel = decodeURIComponent(rel.split('?')[0]);
    const filePath = path.normalize(path.join(__dirname, rel));
    // 프로젝트 폴더 바깥 경로 접근 차단
    if (!filePath.startsWith(__dirname)) { res.writeHead(403); res.end('Forbidden'); return; }
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        const ext = path.extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
    });
}

async function handleChat(req, res) {
    if (!GEMINI_API_KEY) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'GEMINI_API_KEY가 설정되지 않았습니다. .env.example을 .env로 복사하고 키를 채워주세요.' }));
        return;
    }
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
        try {
            const reqBody = JSON.parse(body || '{}');
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
            const geminiRes = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_API_KEY },
                body: JSON.stringify(reqBody)
            });
            const data = await geminiRes.json();
            res.writeHead(geminiRes.status, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (e) {
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Gemini API 호출 실패: ' + e.message }));
        }
    });
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/chat') {
        handleChat(req, res);
        return;
    }
    if (req.method === 'GET') {
        serveStatic(req, res, req.url);
        return;
    }
    res.writeHead(405); res.end('Method not allowed');
});

server.listen(PORT, () => {
    console.log(`Datahall 검토 프로그램 서버 실행 중: http://localhost:${PORT}`);
    if (!GEMINI_API_KEY) {
        console.warn('⚠ GEMINI_API_KEY가 설정되지 않았습니다 — AI 어시스턴트는 동작하지 않습니다. .env.example을 참고해 .env를 만들어주세요.');
    }
});
