const translations = {
    ko: {
        title: "Datahall 검토 프로그램",
        credits: "Developer: Lim Sang Chul | Technical Support: Lee Kyung-ha",
        btnAnimPause: "⏸ 애니메이션 정지", btnAnimPlay: "▶ 애니메이션 재생",
        btnSave: "💾 브라우저 임시저장", btnLoad: "📂 파일 불러오기(.json)", btnExport: "⬇️ 파일 내보내기(.json)",
        sec1: "[종합] 데이터홀 & 설비 배치", lblFwuType: "FWU 갤러리 배치 타입",
        valA: "A (상단)", valB: "B (하단)", valC: "C (상/하 양측)",
        secGrid: "[건축] 기둥 열(Grid) 관리", btnAddUp: "➕ 위로 열 추가", btnAddDown: "➕ 아래로 열 추가", btnDelGrid: "➖ 최근 열 삭제",
        sec2: "[데이터홀] IT 랙 제원",
        lblRW: "랙 폭 (W, m)", lblRD: "랙 깊이 (D, m)", lblRH: "랙 높이 (H, m)",
        lblRHA: "Hot Aisle (m)", lblRCA: "Cold Aisle (m)", lblRCorridor: "복도 이격 거리 (m)", lblRCnt: "열당 랙 개수 (EA)", lblRRows: "배치 열 수 (EA)",
        lblRackType: "랙 타입", valRackGeneral: "일반랙", lblRackKw: "랙당 부하 (kW)", formRackType: "타입",
        sec3: "[설비] 부하 및 FWU 제원",
        lblNKw: "IT Load (kW)", lblNCfm: "CFM/kW", lblNMargin: "여유율 (×1.X)",
        lblNUnits: "AC 유효 대수 (N)", lblNPlanUnits: "AC 총 댓수 (열)", lblNCatcher: "AC 캐쳐(예비) (열)",
        lblNW: "AC 개구부 폭 (m)", lblNRatio: "AC 유효 개구율", lblNVel: "AC SA 풍속(m/s)", lblNTiers: "적층 (Tiers)",
        lblAcRatio: "AC 담당 비율 (%)", lblLcRatio: "LC 담당 비율 (%)", lblCduCap: "CDU 용량 (kW)", lblCduW: "CDU 폭 (m)", lblCduCatcher: "CDU 예비 대수 (EA)",
        lblCduLoc: "CDU 배치 위치", valCduGallery: "갤러리(항온항습실)", valCduHall: "데이터홀 랙열 끝단",
        lblAcHMode: "AC 높이 산출 방식", valHAuto: "자동 (풍속 기준)", valHManual: "수동 (높이 지정)", valHCount: "대수 산출 (H·V 고정)", lblNUnitH: "AC 1대 높이 (m)",
        valT1: "1단", valT2: "2단", valT3: "3단",
        sec4: "[건축] 기둥 및 층고 제원",
        lblNCH: "건축 층고 (CH, m)", lblNSlab: "슬라브 두께 (m)", lblNBD: "상부 보 깊이 (m)", lblNSpan: "기둥 간격 (m)",
        lblNColW: "기둥 너비 (m)", lblNColCnt: "기둥 총 갯수 (EA)", lblNGap: "기기 간 이격 (m)", lblNColGap: "기둥 이격 (m)",
        card1: "총 랙 수량 & 밀도", card2: "갤러리 배치 적합성", card3: "FWU 1대 H", card4: "FWU 총 H", card5: "RA 공간", card6: "RA 풍속",
        resPlanFitOk: "기둥 사이 배치 가능 (OK)", resPlanFitErr: "공간 부족 (간섭 발생)",
        tabElev: "ELEVATION VIEW (입면)", tabSect: "SECTION VIEW (단면)", tab3D: "3D VIEW", tabPlan: "PLAN VIEW (데이터홀 & FWU 코디네이션)",
        msg3DFail: "3D 라이브러리를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.", msg3DEmpty: "먼저 도면이 생성되어야 합니다.",
        btnAI: "🤖 AI 어시스턴트", aiTitle: "🤖 AI 어시스턴트", aiSubtitle: "현재 설계값을 바탕으로 질문하거나 값 변경을 요청하세요. (Gemini)",
        aiSend: "전송", aiPlaceholder: "예: IT Load를 6000kW로 바꾸고 CDU 필요 대수 알려줘",
        aiErrNoKey: "서버에 GEMINI_API_KEY가 설정되지 않았습니다.", aiErrGeneric: "오류: ",
        form1Title: "1. IT부하 및 랙 밀도", form1Racks: "총 랙", form1Dens: "밀도", form2Title: "2. 데이터홀 Containment Pitch",
        form3Title: "3. 필요 총 풍량 (AC)", form3LcTitle: "4. 필요 CDU 대수 (LC)", form4Title: "5. FWU 요구 높이 (H)", form4Type: "타입", form4Units: "총 유효대수", form4Air: "1대당 풍량", form4Req: "요구H",
        form5Title: "6. 보 밑 RA공간", form5Clear: "순층고", form5Equip: "장비총고",
        form4Mode: "산출", form4ModeAuto: "자동(풍속 고정)", form4ModeManual: "수동(높이 고정)", form4ModeCount: "대수 산출(H·V 고정)", form4Vel: "환산 SA 풍속",
        form4Solved: "산출 대수", form4Cap: "갤러리 수용", form4Over: "열 초과", form4Hint: "적층 단수↑ 또는 1대 높이↓ 필요", form4Row: "열",
        formLcLoc: "배치", formLcAddLen: "홀 길이 증가", formLcPerRow: "열당 최대", formLcRows: "적용 열 수",
        msgSave: "설정값이 브라우저 임시저장소에 저장되었습니다.", msgLoadOk: "파일을 성공적으로 불러왔습니다.", msgLoadErr: "파일을 읽는 중 오류가 발생했습니다.",
        lblStandby: "Standby", lblCatcher: "Catcher", lblRacks: "IT Racks", lblBeam: "Beam", lblFloorSlab: "FLOOR SLAB", lblCeilSlab: "CEILING SLAB", clash: "간섭",
        btnBlockEditor: "🧩 랙 블록 편집기", beTitle: "🧩 랙 블록 편집기", beSubtitle: "GPU 서버 · 일반 서버 · CDU를 배치해 재사용 가능한 랙 블록을 설계합니다.",
        beAddGpu: "GPU 서버", beAddGeneral: "일반 서버", beAddCdu: "CDU", beClearBtn: "전체 지우기", beSaveAsBtn: "다른 이름으로 저장", beClose: "닫기",
        beProps: "선택한 유닛 속성", beNoSelect: "캔버스에서 유닛을 클릭해 선택하세요.", beSaved: "저장된 블록", beNoSaved: "저장된 블록이 없습니다.",
        bePropType: "유닛 타입", bePropW: "폭 (m)", bePropD: "깊이 (m)", bePropH: "높이 (m)", bePropKw: "용량 (kW)",
        bePropAttach: "배치 방식", beAttach: "붙이기 (이격 없음)", beGapMode: "이격", beGapDist: "이격 거리 (m)", beDelete: "삭제", bePlaceBtn: "배치", beRenameBtn: "이름변경", bePromptRename: "새 블록 이름을 입력하세요",
        bePromptName: "블록 이름을 입력하세요", beEmptyAlert: "유닛을 먼저 추가하세요.", beClearConfirm: "캔버스의 모든 유닛을 지울까요?",
        beTotalLen: "총 길이", beTotalCount: "총 유닛", beTotalKw: "총 용량", beUnitsSuffix: "개",
        beAddRowBtn: "열 추가", beRemoveRowBtn: "열 삭제", beRowLabel: "행", beRowActive: "편집중",
        beTotalRows: "총 행", beRowsSuffix: "행", beRemoveRowConfirm: "마지막 행의 유닛을 모두 지우고 행을 삭제할까요?",
        formBlockRows: "배치 열수", formBlockCycle: "행 템플릿 순환"
    },
    en: {
        title: "Datahall Review Program",
        credits: "Developer: Lim Sang Chul | Technical Support: Lee Kyung-ha",
        btnAnimPause: "⏸ Pause Anim", btnAnimPlay: "▶ Play Anim",
        btnSave: "💾 Save (Browser)", btnLoad: "📂 Load File (.json)", btnExport: "⬇️ Export File (.json)",
        sec1: "[General] Data Hall & MEP Layout", lblFwuType: "FWU Gallery Layout Type",
        valA: "A (Top)", valB: "B (Bottom)", valC: "C (Top/Bottom)",
        secGrid: "[Arch] Grid Row Management", btnAddUp: "➕ Add Row (Up)", btnAddDown: "➕ Add Row (Down)", btnDelGrid: "➖ Delete Last Row",
        sec2: "[Data Hall] IT Rack Specs",
        lblRW: "Rack Width (W, m)", lblRD: "Rack Depth (D, m)", lblRH: "Rack Height (H, m)",
        lblRHA: "Hot Aisle (m)", lblRCA: "Cold Aisle (m)", lblRCorridor: "Corridor Gap (m)", lblRCnt: "Racks per Row (EA)", lblRRows: "Number of Rows (EA)",
        lblRackType: "Rack Type", valRackGeneral: "Standard Rack", lblRackKw: "Load per Rack (kW)", formRackType: "Type",
        sec3: "[MEP] Load & FWU Specs",
        lblNKw: "IT Load (kW)", lblNCfm: "CFM/kW", lblNMargin: "Safety Margin (×1.X)",
        lblNUnits: "AC Active Units (N)", lblNPlanUnits: "AC Total Units (Rows)", lblNCatcher: "AC Catcher (Rows)",
        lblNW: "AC Opening W(m)", lblNRatio: "Effective Ratio", lblNVel: "SA Velocity (m/s)", lblNTiers: "Tiers",
        lblAcRatio: "AC Load Ratio (%)", lblLcRatio: "LC Load Ratio (%)", lblCduCap: "CDU Capacity (kW)", lblCduW: "CDU Width (m)", lblCduCatcher: "CDU Standby (EA)",
        lblCduLoc: "CDU Location", valCduGallery: "Gallery (CRAH Room)", valCduHall: "Data Hall (Row End)",
        lblAcHMode: "AC Height Mode", valHAuto: "Auto (by Velocity)", valHManual: "Manual (Fixed H)", valHCount: "Solve Count (fixed H·V)", lblNUnitH: "AC Unit Height (m)",
        valT1: "1 Tier", valT2: "2 Tiers", valT3: "3 Tiers",
        sec4: "[Arch] Column & Ceiling Specs",
        lblNCH: "Ceiling Height (CH, m)", lblNSlab: "Slab Thickness (m)", lblNBD: "Beam Depth (m)", lblNSpan: "Column Span (m)",
        lblNColW: "Column Width (m)", lblNColCnt: "Total Columns (EA)", lblNGap: "Gap btw Units (m)", lblNColGap: "Gap btw Col (m)",
        card1: "Total Racks & Density", card2: "Gallery Layout Fit", card3: "FWU Unit Height", card4: "Total FWU Height", card5: "RA Space", card6: "RA Velocity",
        resPlanFitOk: "Fits between columns (OK)", resPlanFitErr: "Not enough space (Clash)",
        tabElev: "ELEVATION VIEW", tabSect: "SECTION VIEW", tab3D: "3D VIEW", tabPlan: "PLAN VIEW (Data Hall & FWU)",
        msg3DFail: "Failed to load the 3D library. Please check your internet connection.", msg3DEmpty: "Generate a drawing first.",
        btnAI: "🤖 AI Assistant", aiTitle: "🤖 AI Assistant", aiSubtitle: "Ask about the current design or request value changes. (Gemini)",
        aiSend: "Send", aiPlaceholder: "e.g. Set IT Load to 6000kW and tell me the required CDU count",
        aiErrNoKey: "GEMINI_API_KEY is not set on the server.", aiErrGeneric: "Error: ",
        form1Title: "1. IT Load & Rack Density", form1Racks: "Total Racks", form1Dens: "Density", form2Title: "2. Data Hall Containment Pitch",
        form3Title: "3. Required Airflow (AC)", form3LcTitle: "4. Required CDU (LC)", form4Title: "5. Required FWU Height (H)", form4Type: "Type", form4Units: "Total Active Units", form4Air: "Airflow/unit", form4Req: "Req. H",
        form5Title: "6. RA Space under Beam", form5Clear: "Clear Height", form5Equip: "Total Equip H",
        form4Mode: "Mode", form4ModeAuto: "Auto (fixed velocity)", form4ModeManual: "Manual (fixed height)", form4ModeCount: "Solve Count (fixed H·V)", form4Vel: "Resulting SA Velocity",
        form4Solved: "Solved Units", form4Cap: "Gallery Capacity", form4Over: "rows over", form4Hint: "increase tiers or reduce unit height", form4Row: "rows",
        formLcLoc: "Location", formLcAddLen: "Added Hall Length", formLcPerRow: "Max per Row", formLcRows: "Rows Used",
        msgSave: "Settings saved to browser local storage.", msgLoadOk: "File loaded successfully.", msgLoadErr: "Error reading file.",
        lblStandby: "Standby", lblCatcher: "Catcher", lblRacks: "IT Racks", lblBeam: "Beam", lblFloorSlab: "FLOOR SLAB", lblCeilSlab: "CEILING SLAB", clash: "Clash",
        btnBlockEditor: "🧩 Rack Block Editor", beTitle: "🧩 Rack Block Editor", beSubtitle: "Compose reusable rack blocks from GPU Server, General Server, and CDU units.",
        beAddGpu: "GPU Server", beAddGeneral: "General Server", beAddCdu: "CDU", beClearBtn: "Clear All", beSaveAsBtn: "Save As", beClose: "Close",
        beProps: "Selected Unit", beNoSelect: "Click a unit on the canvas to select it.", beSaved: "Saved Blocks", beNoSaved: "No saved blocks yet.",
        bePropType: "Unit Type", bePropW: "Width (m)", bePropD: "Depth (m)", bePropH: "Height (m)", bePropKw: "Capacity (kW)",
        bePropAttach: "Placement", beAttach: "Attached (no gap)", beGapMode: "Spaced", beGapDist: "Gap Distance (m)", beDelete: "Delete", bePlaceBtn: "Place", beRenameBtn: "Rename", bePromptRename: "Enter a new block name",
        bePromptName: "Enter a block name", beEmptyAlert: "Add a unit first.", beClearConfirm: "Clear all units from the canvas?",
        beTotalLen: "Total Length", beTotalCount: "Total Units", beTotalKw: "Total Capacity", beUnitsSuffix: " units",
        beAddRowBtn: "Add Row", beRemoveRowBtn: "Remove Row", beRowLabel: "Row", beRowActive: "editing",
        beTotalRows: "Total Rows", beRowsSuffix: " rows", beRemoveRowConfirm: "Clear the last row's units and remove it?",
        formBlockRows: "Rows Placed", formBlockCycle: "row templates, cycled"
    }
};

let currentLang = 'ko';

function changeLang() {
    currentLang = document.getElementById('langSelect').value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
    });
    const btnAnim = document.getElementById('btnAnimToggle');
    btnAnim.innerText = isAnimRunning ? translations[currentLang].btnAnimPause : translations[currentLang].btnAnimPlay;
    renderYGridUI();
    calc(); 
    if (typeof beRender === 'function') { beRender(); beRenderSavedList(); }
}

let nextGridId = 1;
let yGrids = [{ id: 'grid_0', label: '기준 열(Base)', val: 0, show: true }];

function renderYGridUI() {
    const container = document.getElementById('yGridContainer');
    container.innerHTML = '';
    yGrids.forEach((g, idx) => {
        const t = translations[currentLang];
        let labelName = idx === 0 ? (currentLang === 'ko' ? '기준 열(Base)' : 'Base Grid') : 
                        (g.val > 0 ? (currentLang === 'ko' ? `추가 열(상)` : `Add Row(Up)`) : (currentLang === 'ko' ? `추가 열(하)` : `Add Row(Down)`));
        // 💡 [UPDATE] 라벨을 이동(m)로 변경하고 step을 0.5로 설정
        container.innerHTML += `
            <div class="input-group">
                <label>${labelName} 이동(m)</label>
                <div style="display:flex; align-items:center; gap:5px;">
                    <input type="number" id="${g.id}" value="${g.val}" step="0.5" onchange="updateYGrid()" style="width:60px;">
                    <input type="checkbox" id="chk_${g.id}" ${g.show ? 'checked' : ''} onchange="updateYGrid()" title="표시/숨김" style="width:16px; height:16px; margin:0; cursor:pointer;">
                </div>
            </div>
        `;
    });
}

function updateYGrid() {
    yGrids.forEach(g => {
        const el = document.getElementById(g.id);
        const chk = document.getElementById('chk_' + g.id);
        if(el) g.val = parseFloat(el.value) || 0;
        if(chk) g.show = chk.checked; 
    });
    calc();
}

function addYGrid(dir) {
    // 💡 [UPDATE] 미터 단위로 10m씩 추가되도록 변경
    const offset = dir > 0 ? 10.0 : -10.0;
    yGrids.push({ id: 'grid_' + nextGridId++, label: '', val: offset, show: true });
    renderYGridUI();
    calc();
}

function removeYGrid() {
    if(yGrids.length > 1) {
        yGrids.pop();
        renderYGridUI();
        calc();
    }
}

renderYGridUI();

const elUnits = document.getElementById('nUnits');
const elPlanUnits = document.getElementById('nPlanUnits');
const elCatcher = document.getElementById('nCatcher');
const elTiers = document.getElementById('nTiers');

elUnits.addEventListener('input', function() {
    const t = parseInt(elTiers.value) || 1;
    const c = parseInt(elCatcher.value) || 0;
    elPlanUnits.value = Math.ceil(this.value / t) + c;
    calc();
});

elPlanUnits.addEventListener('input', function() {
    const t = parseInt(elTiers.value) || 1;
    const c = parseInt(elCatcher.value) || 0;
    elUnits.value = Math.max(0, this.value - c) * t;
    calc();
});

elCatcher.addEventListener('input', function() {
    const t = parseInt(elTiers.value) || 1;
    const activeUnits = parseInt(elUnits.value) || 0;
    elPlanUnits.value = Math.ceil(activeUnits / t) + parseInt(this.value || 0);
    calc();
});

elTiers.addEventListener('change', function() {
    const activeUnits = parseInt(elUnits.value) || 0;
    const c = parseInt(elCatcher.value) || 0;
    elPlanUnits.value = Math.ceil(activeUnits / this.value) + c;
    calc();
});

document.querySelectorAll('input[name="fwuType"]').forEach(radio => {
    radio.addEventListener('change', calc);
});

const inputsList = ['rackKw', 'rW', 'rD', 'rH', 'rHA', 'rCA', 'rCorridor', 'rCnt', 'rRows', 'nKw', 'acRatio', 'lcRatio', 'cduCap', 'cduCatcher', 'cduW', 'nCfm','nMargin','nW','nRatio','nVel','nUnitH','nCH','nSlab','nBD','nSpan','nColW','nColCnt','nGap', 'nColGap'];
const allInputs = [...inputsList, 'nUnits', 'nPlanUnits', 'nCatcher', 'nTiers'];
// 문자열 값을 갖는 select들 (parseFloat 대상에서 제외)
const selectInputs = ['acHMode', 'cduLoc', 'rackType'];

inputsList.forEach(id => {
    document.getElementById(id).addEventListener('input', calc);
    document.getElementById(id).addEventListener('change', calc);
});

const elAcHMode = document.getElementById('acHMode');
const elUnitHManual = document.getElementById('nUnitH');
const elVel = document.getElementById('nVel');

// AC 산출 방식에 따라 어느 필드가 입력값이고 어느 필드가 산출값인지 전환
//   auto   : 풍속 입력  → 1대 높이 산출
//   manual : 높이 입력  → 환산 풍속 산출
//   count  : 높이·풍속 입력 → 대수(N, 열) 산출
function applyAcHeightMode() {
    const mode = elAcHMode.value;
    const manual = (mode === 'manual');
    const count  = (mode === 'count');
    const hIsInput = manual || count;

    elVel.disabled = manual;
    elVel.classList.toggle('derived-input', manual);

    elUnitHManual.disabled = !hIsInput;
    elUnitHManual.classList.toggle('highlight-input', hIsInput);
    elUnitHManual.classList.toggle('derived-input', !hIsInput);

    elUnits.disabled = count;
    elPlanUnits.disabled = count;
    elUnits.classList.toggle('derived-input', count);
    elPlanUnits.classList.toggle('derived-input', count);
    if (!count) {
        elUnits.classList.remove('over-capacity');
        elPlanUnits.classList.remove('over-capacity');
    }
}

elAcHMode.addEventListener('change', () => { applyAcHeightMode(); calc(); });
document.getElementById('cduLoc').addEventListener('change', calc);
applyAcHeightMode();

// ── 랙 타입 ──────────────────────────────────────────────
// 일반랙 : 랙 수량(열당 랙개수 × 배치 열 수) 입력 → 랙당 부하 산출
// 블록형 : 랙 블록 편집기에서 만든 행 템플릿(들)을 사용 — 열당 랙개수는 블록이 고정하고,
//          배치 열 수만 조정하면 그 수만큼 블록의 행 템플릿을 순서대로 순환 배치한다.
// 제원은 편집 가능한 기본값이며, 타입을 오갈 때 각 타입에서 마지막으로 쓴 값이 보존된다.
const RACK_PRESETS = {
    general: { rW: '0.6', rD: '1.2', rH: '2.3', rackKw: '14' }
};
const RACK_SPEC_IDS = ['rW', 'rD', 'rH', 'rackKw'];

const elRackType = document.getElementById('rackType');
const elRackKw = document.getElementById('rackKw');
const elRCnt = document.getElementById('rCnt');
const elRRows = document.getElementById('rRows');
const elRW = document.getElementById('rW');
const elRD = document.getElementById('rD');
const elRH = document.getElementById('rH');
const elNKw = document.getElementById('nKw');

let rackTypeStash = {};
let currentRackType = elRackType.value;

function isBlockRackType(val) { return typeof val === 'string' && val.indexOf('block:') === 0; }

// 저장된 랙 블록을 [데이터홀] 랙 타입 선택지에 동적으로 추가한다 (일반랙과 나란히)
function refreshRackTypeOptions() {
    const sel = elRackType;
    if (!sel) return;
    const prevValue = sel.value;
    sel.querySelectorAll('option[data-custom-block]').forEach(o => o.remove());
    beLoadBlocks().forEach(b => {
        const opt = document.createElement('option');
        opt.value = 'block:' + b.id;
        opt.dataset.customBlock = '1';
        opt.innerText = '🧩 ' + b.name;
        sel.appendChild(opt);
    });
    if ([...sel.options].some(o => o.value === prevValue)) sel.value = prevValue;
}

// 블록형 랙: 유닛 구성 자체가 크기·용량·열당 랙개수를 정하므로 랙당 제원(폭/깊이/높이/부하)과
// 열당 랙개수(rCnt)는 산출값으로 비활성화한다. 배치 열 수(rRows)와 Hot/Cold Aisle은 계속 조정 가능
// — 배치 열 수만큼 블록의 행 템플릿이 순환 반복된다.
function applyRackTypeFields() {
    const isBlock = isBlockRackType(elRackType.value);

    elRackKw.disabled = true; // 일반랙: nKw/총랙수로 산출, 블록: 유닛 구성으로 산출 — 항상 출력 전용
    elRackKw.classList.remove('highlight-input');
    elRackKw.classList.add('derived-input');

    elRCnt.disabled = isBlock;
    elRCnt.classList.toggle('derived-input', isBlock);

    elRRows.disabled = false; // 일반랙·블록형 모두 배치 열 수는 사용자가 조정

    [elRW, elRD, elRH].forEach(el => {
        el.disabled = isBlock;
        el.classList.toggle('derived-input', isBlock);
    });

    elNKw.disabled = isBlock;
    elNKw.classList.toggle('derived-input', isBlock);

    const hallOpt = document.querySelector('#cduLoc option[value="hall"]');
    if (hallOpt) hallOpt.disabled = isBlock;
}

elRackType.addEventListener('change', function() {
    const isBlock = isBlockRackType(this.value);
    // 떠나는 타입의 제원을 보관하고, 들어가는 타입의 값(없으면 프리셋)을 적용
    // 블록형은 자체 제원을 갖지 않으므로 프리셋 교체를 건너뛴다
    rackTypeStash[currentRackType] = {};
    RACK_SPEC_IDS.forEach(id => { rackTypeStash[currentRackType][id] = document.getElementById(id).value; });
    currentRackType = this.value;
    if (!isBlock) {
        const next = rackTypeStash[currentRackType] || RACK_PRESETS[currentRackType];
        RACK_SPEC_IDS.forEach(id => { document.getElementById(id).value = next[id]; });
    } else {
        document.getElementById('cduLoc').value = 'gallery'; // 블록 내장 CDU와 중복 배치되지 않도록
        // 블록의 행 템플릿 수를 배치 열 수의 초기값으로 제안 (이후 자유롭게 조정 가능)
        const bd = beLoadBlocks().find(b => 'block:' + b.id === this.value);
        if (bd) elRRows.value = bd.rowCount || (bd.rows && bd.rows.length) || 1;
    }
    applyRackTypeFields();
    calc();
});
applyRackTypeFields();

window.addEventListener('resize', autoScaleDrawing);

let isAnimRunning = true;
function toggleAnimation() {
    isAnimRunning = !isAnimRunning;
    const btn = document.getElementById('btnAnimToggle');
    if (isAnimRunning) {
        document.body.classList.remove('pause-animations');
        btn.innerText = translations[currentLang].btnAnimPause;
    } else {
        document.body.classList.add('pause-animations');
        btn.innerText = translations[currentLang].btnAnimPlay;
    }
}

const svgFan = `<svg viewBox="0 0 100 100" class="fan-svg">
    <g fill="currentColor">
        <path d="M46.5,46.5 C20,20 15,5 35,5 C60,5 65,25 53.5,46.5 Z" />
        <path d="M46.5,46.5 C20,20 15,5 35,5 C60,5 65,25 53.5,46.5 Z" transform="rotate(90 50 50)" />
        <path d="M46.5,46.5 C20,20 15,5 35,5 C60,5 65,25 53.5,46.5 Z" transform="rotate(180 50 50)" />
        <path d="M46.5,46.5 C20,20 15,5 35,5 C60,5 65,25 53.5,46.5 Z" transform="rotate(270 50 50)" />
    </g>
    <circle cx="50" cy="50" r="11" fill="white" stroke="currentColor" stroke-width="3"/>
    <path d="M50,43 L52,47 L56,47 L53,50 L54,54 L50,52 L46,54 L47,50 L44,47 L48,47 Z" fill="currentColor"/>
</svg>`;

function getFormData() {
    const data = {};
    allInputs.forEach(id => {
        if(document.getElementById(id)) data[id] = document.getElementById(id).value;
    });
    selectInputs.forEach(id => {
        if(document.getElementById(id)) data[id] = document.getElementById(id).value;
    });
    data.fwuType = document.querySelector('input[name="fwuType"]:checked').value;
    data.yGrids = yGrids;
    return data;
}

function setFormData(data) {
    for (let key in data) {
        if(document.getElementById(key) && key !== 'yGrids') document.getElementById(key).value = data[key];
    }
    if(data.fwuType) document.querySelector(`input[name="fwuType"][value="${data.fwuType}"]`).checked = true;
    if(data.yGrids && Array.isArray(data.yGrids)) {
        yGrids = data.yGrids;
        nextGridId = yGrids.length;
        renderYGridUI();
    }
    applyAcHeightMode();
    currentRackType = elRackType.value;
    rackTypeStash = {};
    applyRackTypeFields();
    calc();
}

function saveData() {
    localStorage.setItem('fwuDesignData', JSON.stringify(getFormData()));
    alert(translations[currentLang].msgSave);
}

function loadData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = event => {
            try {
                const data = JSON.parse(event.target.result);
                setFormData(data);
                alert(translations[currentLang].msgLoadOk);
            } catch (err) {
                alert(translations[currentLang].msgLoadErr);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function exportData() {
    const data = getFormData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `DataCenter_Coordination_${new Date().getTime()}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

const vResizer = document.getElementById('vResizer');
const topViewPanel = document.getElementById('topViewPanel');
const bottomViewPanel = document.getElementById('bottomViewPanel');
let isResizingPanel = false;

vResizer.addEventListener('mousedown', (e) => {
    isResizingPanel = true;
    document.body.style.cursor = 'row-resize';
});
document.addEventListener('mousemove', (e) => {
    if (!isResizingPanel) return;
    const container = document.getElementById('viewerArea');
    const containerRect = container.getBoundingClientRect();
    let newFlex = (e.clientY - containerRect.top - 5) / containerRect.height;
    if (newFlex < 0.2) newFlex = 0.2;
    if (newFlex > 0.8) newFlex = 0.8;
    topViewPanel.style.flex = newFlex;
    bottomViewPanel.style.flex = 1 - newFlex;
});
document.addEventListener('mouseup', () => {
    if (isResizingPanel) {
        isResizingPanel = false;
        document.body.style.cursor = 'default';
        autoScaleDrawing();
    }
});

let currentTopView = 'elev';
function switchTopView(viewName) {
    currentTopView = viewName;
    const btns = document.querySelectorAll('.tab-btn');
    btns[0].classList.toggle('active', viewName === 'elev');
    btns[1].classList.toggle('active', viewName === 'sect');
    btns[2].classList.toggle('active', viewName === '3d');

    document.getElementById('elevContainer').style.display = (viewName === 'elev') ? 'block' : 'none';
    document.getElementById('sectContainer').style.display = (viewName === 'sect') ? 'block' : 'none';
    document.getElementById('draw3dContainer').style.display = (viewName === '3d') ? 'block' : 'none';
    document.getElementById('zoomControls2D').style.display = (viewName === '3d') ? 'none' : 'flex';
    document.getElementById('controls3D').style.display = (viewName === '3d') ? 'flex' : 'none';

    if (viewName === '3d') {
        ensure3DInit();
        render3D();
    } else {
        autoScaleDrawing();
    }
}

let measureMode = { top: false, plan: false };
let currentMeasureLine = null;
let measureStartX = 0, measureStartY = 0;
let snapIndicator = null;
let measurePhase = 0; 
let hoveredPanel = 'plan'; 

document.getElementById('topViewPanel').addEventListener('mouseenter', () => hoveredPanel = 'top');
document.getElementById('bottomViewPanel').addEventListener('mouseenter', () => hoveredPanel = 'plan');

function getSnappedCoords(e, wrapper, scale) {
    const rect = wrapper.getBoundingClientRect();
    let rawX = (e.clientX - rect.left) / scale;
    let rawY = (e.clientY - rect.top) / scale;
    
    let lockX = false, lockY = false;
    
    if (measurePhase === 1) {
        const dx = rawX - measureStartX;
        const dy = rawY - measureStartY;
        const angle = Math.abs(Math.atan2(dy, dx) * 180 / Math.PI);
        
        if (e.shiftKey) {
            if (Math.abs(dx) > Math.abs(dy)) { lockY = true; rawY = measureStartY; }
            else { lockX = true; rawX = measureStartX; }
        } else {
            const snapThreshold = 4;
            if (angle < snapThreshold || Math.abs(angle - 180) < snapThreshold || Math.abs(angle - 360) < snapThreshold) {
                lockY = true; rawY = measureStartY;
            } else if (Math.abs(angle - 90) < snapThreshold || Math.abs(angle - 270) < snapThreshold) {
                lockX = true; rawX = measureStartX;
            }
        }
    }

    let bestX = rawX, bestY = rawY;
    let bestDist = 20 / scale; 

    const elements = wrapper.querySelectorAll('.col-block, .fwu-block, .cdu-block, .rack-block, .sect-slab, .sect-beam, .sect-fwu, .sect-rack, .beam-block, .aisle-ca, .aisle-ha');
    
    elements.forEach(el => {
        const elRect = el.getBoundingClientRect();
        const x1 = (elRect.left - rect.left) / scale;
        const y1 = (elRect.top - rect.top) / scale;
        const x2 = (elRect.right - rect.left) / scale;
        const y2 = (elRect.bottom - rect.top) / scale;
        const xc = (x1 + x2) / 2;
        const yc = (y1 + y2) / 2;

        const points = [
            {x: x1, y: y1}, {x: x2, y: y1}, {x: x1, y: y2}, {x: x2, y: y2}, 
            {x: xc, y: y1}, {x: xc, y: y2}, {x: x1, y: yc}, {x: x2, y: yc}
        ];

        points.forEach(p => {
            if (lockX && Math.abs(p.x - rawX) > 2/scale) return;
            if (lockY && Math.abs(p.y - rawY) > 2/scale) return;

            const dist = Math.hypot(p.x - rawX, p.y - rawY);
            if (dist < bestDist) {
                bestDist = dist; bestX = p.x; bestY = p.y;
            }
        });
        
        if (measurePhase === 1) {
            if (!lockY && rawX >= x1 && rawX <= x2) {
                if (Math.abs(rawY - y1) < bestDist) { bestDist = Math.abs(rawY - y1); bestX = rawX; bestY = y1; }
                if (Math.abs(rawY - y2) < bestDist) { bestDist = Math.abs(rawY - y2); bestX = rawX; bestY = y2; }
            }
            if (!lockX && rawY >= y1 && rawY <= y2) {
                if (Math.abs(rawX - x1) < bestDist) { bestDist = Math.abs(rawX - x1); bestX = x1; bestY = rawY; }
                if (Math.abs(rawX - x2) < bestDist) { bestDist = Math.abs(rawX - x2); bestX = x2; bestY = rawY; }
            }
        }
    });

    if (!snapIndicator) {
        snapIndicator = document.createElement('div');
        snapIndicator.className = 'snap-indicator';
    }
    if (snapIndicator.parentElement !== wrapper) wrapper.appendChild(snapIndicator);
    
    if (bestX !== rawX || bestY !== rawY) {
        snapIndicator.style.display = 'block';
        snapIndicator.style.left = bestX + 'px';
        snapIndicator.style.top = bestY + 'px';
    } else {
        snapIndicator.style.display = 'none';
    }

    return { x: bestX, y: bestY };
}

function hideSnapIndicator() {
    if (snapIndicator) snapIndicator.style.display = 'none';
}

function toggleMeasure(panel) {
    measureMode[panel] = !measureMode[panel];
    const btn = document.getElementById(panel === 'top' ? 'btnMeasureTop' : 'btnMeasurePlan');
    btn.classList.toggle('active', measureMode[panel]);
    
    measurePhase = 0; 
    currentMeasureLine = null;

    if(!measureMode[panel]) {
        const wrapper = document.getElementById(panel === 'top' ? (currentTopView === 'elev' ? 'drawElev' : 'drawSect') : 'drawPlan');
        const oldLine = wrapper.querySelector('.measure-line');
        if(oldLine) wrapper.removeChild(oldLine);
        hideSnapIndicator();
    }
}

function handleMeasureClick(e, type, wrapper) {
    if(!measureMode[type === 'plan' ? 'plan' : 'top']) return false;
    const scale = viewState[type].scale;
    const { x, y } = getSnappedCoords(e, wrapper, scale);

    if (measurePhase === 0) {
        measureStartX = x; measureStartY = y;
        
        const oldLine = wrapper.querySelector('.measure-line');
        if(oldLine) wrapper.removeChild(oldLine);

        currentMeasureLine = document.createElement('div');
        currentMeasureLine.className = 'measure-line';
        currentMeasureLine.style.left = measureStartX + 'px';
        currentMeasureLine.style.top = measureStartY + 'px';
        currentMeasureLine.style.width = '0px'; 
        currentMeasureLine.innerHTML = `<div class="measure-label">0.00m</div>`;
        wrapper.appendChild(currentMeasureLine);
        
        measurePhase = 1; 
    } else if (measurePhase === 1) {
        measurePhase = 0;
        currentMeasureLine = null;
    }
    return true; 
}

function handleMeasureMove(e, type, wrapper) {
    const scale = viewState[type].scale;
    let { x: currentX, y: currentY } = getSnappedCoords(e, wrapper, scale);

    if(measurePhase !== 1 || !currentMeasureLine) return; 
    
    if (e.shiftKey) {
        if (Math.abs(currentX - measureStartX) > Math.abs(currentY - measureStartY)) {
            currentY = measureStartY; 
        } else {
            currentX = measureStartX; 
        }
    }

    let dx = currentX - measureStartX;
    let dy = currentY - measureStartY;
    
    const distancePx = Math.sqrt(dx*dx + dy*dy);
    const finalAngle = Math.atan2(dy, dx);
    const distanceM = distancePx / BASE_SCALE;

    currentMeasureLine.style.width = distancePx + 'px';
    currentMeasureLine.style.transform = `rotate(${finalAngle}rad)`;
    
    const label = currentMeasureLine.querySelector('.measure-label');
    label.innerText = distanceM.toFixed(2) + 'm';
    label.style.transform = `rotate(${-finalAngle}rad) translateY(-15px)`; 
}

function calc() {
    const v = {};
    allInputs.forEach(id => v[id] = parseFloat(document.getElementById(id).value) || 0);
    v.fwuType = document.querySelector('input[name="fwuType"]:checked').value; 
    v.acHMode = document.getElementById('acHMode').value;
    v.cduLoc = document.getElementById('cduLoc').value;
    v.rackType = document.getElementById('rackType').value;
    
    // 일반랙 : 랙 수량(열당 랙개수 × 배치 열 수) 입력 → 랙당 부하(밀도) 산출
    // 랙 블록 : 열당 랙개수는 블록이 고정 — 배치 열 수(rRows, 사용자 입력)만큼 블록의 행 템플릿을
    //           순서대로 순환 배치한다 (행 템플릿보다 배치 열 수가 많으면 처음부터 다시 순환)
    const isBlock = isBlockRackType(v.rackType);
    const blockDef = isBlock ? beLoadBlocks().find(b => 'block:' + b.id === v.rackType) : null;
    let reqRacks, rackDensity, blockStats = null;

    if (isBlock && blockDef) {
        const rows = blockDef.rows && blockDef.rows.length ? blockDef.rows : [[]];
        let maxRowW = 0, maxUnitD = 1.2, maxUnitH = 2.3, totalKwAll = 0;
        const counts = { gpu: 0, general: 0, cdu: 0 };
        rows.forEach(rowUnits => {
            const laid = computeRowLayout(rowUnits);
            maxRowW = Math.max(maxRowW, laid.length ? laid[laid.length - 1].right : 0);
            rowUnits.forEach(u => { maxUnitD = Math.max(maxUnitD, u.d); maxUnitH = Math.max(maxUnitH, u.h); });
        });
        for (let i = 0; i < v.rRows; i++) {
            rows[i % rows.length].forEach(u => {
                totalKwAll += u.kw;
                counts[u.type] = (counts[u.type] || 0) + 1;
            });
        }
        v.rD = maxRowW > 0 ? maxUnitD : 1.2;
        v.rH = maxUnitH;
        v.nKw = totalKwAll;
        v.rCnt = rows[0].length; // 열당 랙개수는 블록의 행 템플릿이 고정 (참고 표시용)
        elRD.value = v.rD.toFixed(2);
        elRH.value = v.rH.toFixed(2);
        elNKw.value = Math.round(v.nKw);
        elRCnt.value = v.rCnt;
        blockStats = { rowWidthM: maxRowW, counts, totalKw: totalKwAll, templateRows: rows.length };
        reqRacks = counts.gpu + counts.general + counts.cdu;
        rackDensity = reqRacks > 0 ? (v.nKw / reqRacks) : 0;
    } else {
        reqRacks = v.rCnt * v.rRows;
        rackDensity = reqRacks > 0 ? (v.nKw / reqRacks) : 0;
        elRackKw.value = rackDensity.toFixed(1);
    }
    const totalRacks = isBlock ? reqRacks : v.rCnt * v.rRows;   // 도면에 실제로 배치되는 수량
    const pitch = v.rHA + (v.rD * 2) + v.rCA;

    const acLoad = v.nKw * (v.acRatio / 100);
    const lcLoad = v.nKw * (v.lcRatio / 100);

    const gallerySideMultiplier = (v.fwuType === 'C') ? 2 : 1;
    const totalCmh = acLoad * v.nCfm * 1.699 * v.nMargin;
    const openingArea = v.nW * v.nRatio * 3600; // 개구면적(m2) × s/h

    const isManualH   = (v.acHMode === 'manual');
    const isCountMode = (v.acHMode === 'count');

    // [대수 산출] 높이·풍속을 고정하고 필요 대수를 역산 (LC의 CDU 대수 산출과 같은 방향)
    if (isCountMode) {
        const perUnitCmh = openingArea * v.nVel * v.nUnitH;
        v.nUnits = perUnitCmh > 0 ? Math.ceil(totalCmh / perUnitCmh / gallerySideMultiplier) : 0;
        v.nPlanUnits = Math.ceil(v.nUnits / (v.nTiers > 0 ? v.nTiers : 1)) + v.nCatcher;
        elUnits.value = v.nUnits;
        elPlanUnits.value = v.nPlanUnits;
    }

    const totalActiveUnits = (v.nUnits > 0 ? v.nUnits : 1) * gallerySideMultiplier;
    const unitCmh = totalCmh / totalActiveUnits;

    // AC 1대 높이: 자동(풍속 고정 → 높이 산출) / 수동·대수산출(높이 고정 → 풍속 역산)
    const autoUnitH = (openingArea > 0 && v.nVel > 0) ? unitCmh / (openingArea * v.nVel) : 0;
    const hIsInput = isManualH || isCountMode;
    const unitH = hIsInput ? (v.nUnitH > 0 ? v.nUnitH : autoUnitH) : autoUnitH;
    const saVel = hIsInput
        ? ((openingArea > 0 && unitH > 0) ? unitCmh / (openingArea * unitH) : 0)
        : v.nVel;

    // 입력이 아닌 쪽(비활성 필드)에 산출값을 되돌려 표시
    if (isManualH) elVel.value = saVel.toFixed(2);
    if (!hIsInput) elUnitHManual.value = unitH.toFixed(2);

    const totalFwuH = unitH * v.nTiers;

    const cduReqKw = lcLoad * v.nMargin;
    const cduActive = v.cduCap > 0 ? Math.ceil(cduReqKw / v.cduCap) : 0;
    const cduTotal = cduActive + v.cduCatcher;
    const cduInGallery = (v.cduLoc === 'gallery');
    const cduPerSide = cduInGallery ? Math.ceil(cduTotal / gallerySideMultiplier) : 0;

    // 데이터홀 랙열 끝단 배치 시: 도면에 그려지는 랙 열 수에 균등 분배
    // 블록형 랙은 CDU를 유닛으로 내장할 수 있으므로 별도의 열 끝단 배치는 사용하지 않는다
    const hallRowCount = Math.max(1, v.rRows);
    const hallCduTotal = (cduInGallery || isBlock) ? 0 : cduTotal;
    const hallPerRowMax = hallCduTotal > 0 ? Math.ceil(hallCduTotal / hallRowCount) : 0;
    const hallRowsUsed = Math.min(hallRowCount, hallCduTotal);
    const hallCduLen = hallPerRowMax > 0 ? (hallPerRowMax * v.cduW + (hallPerRowMax - 1) * v.nGap) : 0;
    const hallCdu = { total: hallCduTotal, perRowMax: hallPerRowMax, rowsUsed: hallRowsUsed, len: hallCduLen, rowCount: hallRowCount, catcher: cduInGallery ? 0 : v.cduCatcher };

    const totalRows = v.nPlanUnits; 
    const bays = v.nColCnt - 1; 
    if(bays <= 0) return;
    
    const fwuRowsRender = totalRows; 
    
    let fwuCountT = fwuRowsRender;
    let cduCountT = cduPerSide;
    let maxEqBayW = 0;

    for(let b=0; b<bays; b++) {
        let bayF = Math.ceil(fwuCountT / (bays - b));
        let bayC = Math.ceil(cduCountT / (bays - b));
        let bayW = (bayF * v.nW) + (bayC * v.cduW) + (Math.max(0, bayF + bayC - 1) * v.nGap);
        maxEqBayW = Math.max(maxEqBayW, bayW);
        fwuCountT -= bayF; cduCountT -= bayC;
    }
    
    const clearSpan = v.nSpan - v.nColW; 
    const requiredClearW = maxEqBayW + (v.nColGap * 2); 
    const isPlanFit = requiredClearW <= clearSpan;

    // 갤러리가 수용 가능한 AC 열 수 (대수 산출 모드의 초과 경고용)
    const cduPerBay = bays > 0 ? Math.ceil(cduPerSide / bays) : 0;
    const bayFreeW = clearSpan - (v.nColGap * 2) - (cduPerBay * (v.cduW + v.nGap));
    const rowPitch = v.nW + v.nGap;
    const rowsPerBay = rowPitch > 0 ? Math.max(0, Math.floor((bayFreeW + v.nGap) / rowPitch)) : 0;
    const galleryRowCapacity = rowsPerBay * bays;
    const rowOverflow = Math.max(0, v.nPlanUnits - galleryRowCapacity);

    elUnits.classList.toggle('over-capacity', isCountMode && rowOverflow > 0);
    elPlanUnits.classList.toggle('over-capacity', isCountMode && rowOverflow > 0);

    const clearHeight = v.nCH - v.nSlab - v.nBD; 
    const raSpace = clearHeight - totalFwuH; 
    const isHeightFit = raSpace >= 0;

    let raArea = clearSpan * raSpace * bays * gallerySideMultiplier;
    let raVelocity = (raSpace > 0 && raArea > 0) ? (totalCmh / 3600) / raArea : 0;

    const t = translations[currentLang];

    if (isBlock && blockStats) {
        const c = blockStats.counts;
        document.getElementById('resRackDensity').innerText = `GPU ${c.gpu} · ${t.beAddGeneral} ${c.general} · CDU ${c.cdu} (${totalRacks}${t.beUnitsSuffix})`;
    } else {
        document.getElementById('resRackDensity').innerText = `${totalRacks} EA (${rackDensity.toFixed(1)} kW/Rack)`;
    }
    document.getElementById('resUnitH').innerText = unitH.toFixed(2) + ' m';
    document.getElementById('resTotalFwuH').innerText = totalFwuH.toFixed(2) + ' m';
    
    const cardPlan = document.getElementById('cardPlan');
    cardPlan.className = isPlanFit ? 'card full good' : 'card full alert';
    cardPlan.querySelector('strong').innerText = isPlanFit ? t.resPlanFitOk : t.resPlanFitErr;
    
    const cardRA = document.getElementById('cardRA');
    cardRA.className = isHeightFit ? 'card good' : 'card alert';
    cardRA.querySelector('strong').innerText = raSpace.toFixed(2) + ' m';

    const cardRaVel = document.getElementById('cardRaVel');
    if(raSpace <= 0) {
        cardRaVel.className = 'card alert';
        cardRaVel.querySelector('strong').innerText = 'N/A';
    } else {
        cardRaVel.className = raVelocity > 5.0 ? 'card alert' : 'card info';
        cardRaVel.querySelector('strong').innerText = raVelocity.toFixed(2) + ' m/s';
    }

    document.getElementById('formulaBox').innerHTML = `
        <div class="f-item"><b>${t.form1Title}:</b><br>${isBlock && blockStats ? `${t.formRackType}: <b style="color:#8e44ad;">🧩 ${blockDef.name}</b> (${blockStats.templateRows} ${t.formBlockCycle})<br>${t.formBlockRows}: <code style="color:#c0392b;">${v.rRows}${t.beRowsSuffix}</code> × ${t.lblRCnt}: ${v.rCnt} ➔ GPU ${blockStats.counts.gpu} · ${t.beAddGeneral} ${blockStats.counts.general} · CDU ${blockStats.counts.cdu}<br>${t.form1Dens}: <code style="color:#c0392b;">${totalRacks}${t.beUnitsSuffix} / ${Math.round(v.nKw).toLocaleString()} kW</code>` : `${t.form1Racks}: ${totalRacks} EA ➔ ${t.form1Dens}: <b>${rackDensity.toFixed(2)} kW/Rack</b>`}</div>
        <div class="f-item"><b>${t.form2Title}:</b><br>HA(${v.rHA}) + Rack(${v.rD}×2) + CA(${v.rCA}) = <code style="color:#27ae60;">${pitch.toFixed(2)} m</code></div>
        <div class="f-item"><b>${t.form3Title}:</b><br>${v.nKw}kW × ${v.acRatio}% = ${acLoad.toFixed(1)}kW<br>${acLoad.toFixed(1)}kW × ${v.nCfm}CFM/kW × 1.699 × ${v.nMargin} = <b>${Math.round(totalCmh).toLocaleString()} CMH</b></div>
        <div class="f-item"><b>${t.form3LcTitle}:</b><br>${v.nKw}kW × ${v.lcRatio}% × ${v.nMargin} = ${cduReqKw.toFixed(1)}kW<br>${cduReqKw.toFixed(1)}kW / ${v.cduCap}kW = <b>${cduActive} + ${v.cduCatcher}대(예비) = ${cduTotal}대</b><br>${t.formLcLoc}: <b style="color:#27ae60;">${cduInGallery ? t.valCduGallery : t.valCduHall}</b>${cduInGallery ? '' : `<br>${t.formLcRows}: ${hallCdu.rowsUsed} / ${hallCdu.rowCount} (${t.formLcPerRow} ${hallCdu.perRowMax}EA) → ${t.formLcAddLen}: <code style="color:#c0392b;">${hallCdu.len.toFixed(2)} m</code>`}</div>
        <div class="f-item"><b>${t.form4Title}:</b><br>${t.form4Type} <b>Type ${v.fwuType}</b> ➔ ${t.form4Units}: ${v.nUnits}×${gallerySideMultiplier} = <b>${totalActiveUnits} EA</b><br>${t.form4Air}: ${Math.round(unitCmh).toLocaleString()} CMH ➔ ${t.form4Req}: <code style="color:#c0392b;">${unitH.toFixed(2)} m</code><br>${t.form4Mode}: <b>${isCountMode ? t.form4ModeCount : (isManualH ? t.form4ModeManual : t.form4ModeAuto)}</b> → ${t.form4Vel}: <code style="color:${saVel > 4 ? '#c0392b' : '#2980b9'};">${saVel.toFixed(2)} m/s</code>${isCountMode ? `<br>${t.form4Solved}: <b>${v.nUnits}×${gallerySideMultiplier} EA</b> (${v.nPlanUnits}${t.form4Row}) / ${t.form4Cap}: ${galleryRowCapacity}${t.form4Row} ${rowOverflow > 0 ? `<b style="color:#c0392b;">▲ ${rowOverflow}${t.form4Over} — ${t.form4Hint}</b>` : '<b style="color:#27ae60;">OK</b>'}` : ''}</div>
        <div class="f-item"><b>${t.form5Title}:</b><br>${t.form5Clear}(${v.nCH}-${v.nSlab}-${v.nBD}m) - ${t.form5Equip}(${totalFwuH.toFixed(2)}m) = <b>${raSpace.toFixed(2)} m</b></div>
    `;

    renderCAD(v, clearSpan, fwuRowsRender, cduPerSide, isPlanFit, unitH, totalFwuH, raSpace, saVel, raVelocity, hallCdu, isBlock ? { def: blockDef, stats: blockStats } : null);
}

const BASE_SCALE = 40;

function renderCAD(v, clearSpan, fwuRowsRender, cduPerSide, isPlanFit, unitH, totalFwuH, raSpace, saVel, raVelocity, hallCdu, blockInfo) {
    const totalDrawingWidth = ((v.nColCnt - 1) * v.nSpan) + v.nColW;
    const t = translations[currentLang];
    const bays = v.nColCnt - 1;
    
    const anyGridShown = yGrids.some(g => g.show);
    
    const drawElev = document.getElementById('drawElev');
    const drawPlan = document.getElementById('drawPlan');
    const drawSect = document.getElementById('drawSect');
    drawElev.innerHTML = ''; drawPlan.innerHTML = ''; drawSect.innerHTML = '';

    // 3D 뷰/내보내기(OBJ·DXF)용 지오메트리 — 평면도가 이미 계산한 X/Z 위치(px)를 그대로 미터로 환산해 기록한다.
    // yBase/hM(둘 다 미터)만 요소별로 따로 지정해 수직 배치를 결정한다.
    const geo3D = [];
    const push3D = (type, leftPx, topPx, wPx, dPx, yBaseM, hM, color) => {
        geo3D.push({ type, x: leftPx / BASE_SCALE, z: topPx / BASE_SCALE, w: wPx / BASE_SCALE, d: dPx / BASE_SCALE, y: yBaseM, h: hM, color });
    };
    
    const totalCH = v.nCH + v.nSlab;
    drawElev.style.width = (totalDrawingWidth * BASE_SCALE) + 'px';
    drawElev.style.height = (totalCH * BASE_SCALE) + 'px';

    const planDepth = 2.0 * BASE_SCALE; 
    const cduDepth = 1.2 * BASE_SCALE; 
    const airFlowDepth = 1.5 * BASE_SCALE; 
    
    const galleryPhysicalDepth = (v.nColW * BASE_SCALE); 
    const corridorGap = v.rCorridor * BASE_SCALE; 
    const isBlockRack = isBlockRackType(v.rackType) && blockInfo && blockInfo.def;
    // 랙 영역 + (데이터홀 배치 시) 랙열 끝단 CDU 영역
    // 블록형은 행마다 유닛 구성이 다를 수 있어, 모든 행에 공통으로 쓸 폭은 가장 넓은 행 기준으로 잡는다
    const rackAreaLen = isBlockRack
        ? (blockInfo.stats.rowWidthM * BASE_SCALE)
        : (v.rCnt * v.rW * BASE_SCALE);
    const hallCduPx = (hallCdu ? hallCdu.len : 0) * BASE_SCALE;
    const hallCduDepth = 1.2 * BASE_SCALE;
    const dhLength = rackAreaLen + hallCduPx; 
    
    let topGalleryY = -1;
    let dataHallY = 0;
    let bottomGalleryY = -1;
    let baseCanvasTotalHeight = 0;

    if (v.fwuType === 'A') {
        topGalleryY = 0;
        dataHallY = topGalleryY + galleryPhysicalDepth + corridorGap;
        baseCanvasTotalHeight = dataHallY + dhLength + corridorGap;
    } else if (v.fwuType === 'B') {
        dataHallY = corridorGap;
        bottomGalleryY = dataHallY + dhLength + corridorGap;
        baseCanvasTotalHeight = bottomGalleryY + galleryPhysicalDepth;
    } else if (v.fwuType === 'C') {
        topGalleryY = 0;
        dataHallY = topGalleryY + galleryPhysicalDepth + corridorGap;
        bottomGalleryY = dataHallY + dhLength + corridorGap;
        baseCanvasTotalHeight = bottomGalleryY + galleryPhysicalDepth;
    }

    let maxYGridUpOffset = 0; 
    let minYGridDownOffset = 0;
    yGrids.forEach(g => {
        // 💡 [UPDATE] 미터 단위로 계산 (/ 1000 제거)
        const offsetPx = g.val * BASE_SCALE;
        if(offsetPx > maxYGridUpOffset) maxYGridUpOffset = offsetPx; 
        if(offsetPx < minYGridDownOffset) minYGridDownOffset = offsetPx; 
    });
    
    const globalYOffset = maxYGridUpOffset + (1.0 * BASE_SCALE); 
    const canvasTotalHeight = baseCanvasTotalHeight + maxYGridUpOffset + Math.abs(minYGridDownOffset) + (2.0 * BASE_SCALE);
    
    topGalleryY = topGalleryY >= 0 ? topGalleryY + globalYOffset : -1;
    dataHallY += globalYOffset;
    bottomGalleryY = bottomGalleryY >= 0 ? bottomGalleryY + globalYOffset : -1;
    
    const baseColLineY = (v.fwuType === 'A' || v.fwuType === 'C') ? topGalleryY : bottomGalleryY;

    drawPlan.style.width = (totalDrawingWidth * BASE_SCALE) + 'px';
    drawPlan.style.height = canvasTotalHeight + 'px'; 
    let animDuration = 2.6 / (saVel > 0.1 ? saVel : 0.1);

    yGrids.forEach(grid => {
        if (grid.show) {
            // 💡 [UPDATE] 미터 단위로 계산
            const offsetPx = grid.val * BASE_SCALE;
            const colY = baseColLineY - offsetPx;
            
            const hCenterLine = document.createElement('div');
            hCenterLine.className = 'center-line-h';
            hCenterLine.style.top = (colY + (v.nColW * BASE_SCALE)/2) + 'px';
            drawPlan.appendChild(hCenterLine);

            for(let i = 0; i < v.nColCnt; i++) {
                const colX = i * v.nSpan * BASE_SCALE; 
                
                const planCol = document.createElement('div');
                planCol.className = 'col-block';
                planCol.style.left = colX + 'px';
                planCol.style.top = colY + 'px';
                planCol.style.width = (v.nColW * BASE_SCALE) + 'px';
                planCol.style.height = (v.nColW * BASE_SCALE) + 'px';
                drawPlan.appendChild(planCol);

                push3D('column', colX, colY, v.nColW * BASE_SCALE, v.nColW * BASE_SCALE, v.nSlab, v.nCH, '#7f8c8d');
                if (i < v.nColCnt - 1) {
                    push3D('beam', colX, colY, v.nSpan * BASE_SCALE, v.nColW * BASE_SCALE, v.nSlab + v.nCH, v.nBD, '#636e72');
                }
            }
        }
    });

    if (anyGridShown) {
        for(let i = 0; i < v.nColCnt; i++) {
            const colX = i * v.nSpan * BASE_SCALE; 
            const vCenterLine = document.createElement('div');
            vCenterLine.className = 'center-line-v';
            vCenterLine.style.left = (colX + (v.nColW * BASE_SCALE)/2) + 'px';
            drawPlan.appendChild(vCenterLine);
        }
    }

    const pairs = Math.ceil(v.rRows / 2);
    const dataHallTotalW = (pairs * (v.rD * 2 + v.rHA) + (pairs * v.rCA)) * BASE_SCALE;
    const dhStartX = (totalDrawingWidth * BASE_SCALE - dataHallTotalW) / 2;

    const rackStartY = dataHallY + hallCduPx;

    // 물리 행 하나를 그린다 — 블록형은 저장된 행 템플릿을 순서대로 하나씩 소비하며(다 쓰면 처음부터
    // 다시 순환) 유닛별로 그리고, 그 외에는 기존처럼 rCnt개의 동일 규격 랙을 그린다.
    // X축(currentX, 행 깊이)은 두 방식 모두 공유.
    let blockRowCursor = 0;
    const drawPhysicalRow = (rowX) => {
        if (isBlockRack) {
            const rows = blockInfo.def.rows;
            const rowUnits = rows[blockRowCursor % rows.length] || [];
            blockRowCursor++;
            const laid = computeRowLayout(rowUnits);
            laid.forEach(u => {
                const el = document.createElement('div');
                el.className = 'rack-block blk-' + u.type;
                el.style.left = rowX + 'px';
                el.style.top = (rackStartY + u.left * BASE_SCALE) + 'px';
                el.style.width = (u.d * BASE_SCALE) + 'px';
                el.style.height = (u.w * BASE_SCALE) + 'px';
                el.innerHTML = `<span class="rack-kw">${u.kw > 0 ? u.kw + 'kW' : ''}</span>`;
                drawPlan.appendChild(el);

                push3D('rack', rowX, rackStartY + u.left * BASE_SCALE, u.d * BASE_SCALE, u.w * BASE_SCALE, v.nSlab, u.h, BE_TYPE_DEFAULTS[u.type].color);
            });
        } else {
            for (let k = 0; k < v.rCnt; k++) {
                let rack = document.createElement('div');
                rack.className = 'rack-block';
                rack.style.left = rowX + 'px';
                rack.style.top = (rackStartY + k * v.rW * BASE_SCALE) + 'px';
                rack.style.width = (v.rD * BASE_SCALE) + 'px';
                rack.style.height = (v.rW * BASE_SCALE) + 'px';
                drawPlan.appendChild(rack);

                push3D('rack', rowX, rackStartY + k * v.rW * BASE_SCALE, v.rD * BASE_SCALE, v.rW * BASE_SCALE, v.nSlab, v.rH, '#ffffff');
            }
        }
    };

    // 랙열 끝단 CDU: 그려지는 랙 열에 균등 분배 (앞쪽 열부터 1대씩 더), 랙에 붙여 정렬
    let hallCduQueue = [];
    if (hallCdu && hallCdu.total > 0) {
        for (let i = 0; i < hallCdu.total; i++) hallCduQueue.push({ isCatcher: i >= (hallCdu.total - hallCdu.catcher) });
    }
    let hallRowsLeft = hallCdu ? hallCdu.rowCount : 0;

    const drawRowEndCdu = (rowX) => {
        if (hallRowsLeft <= 0) return;
        const n = hallCduQueue.length > 0 ? Math.ceil(hallCduQueue.length / hallRowsLeft) : 0;
        hallRowsLeft--;
        if (n <= 0) return;
        const blockLen = (n * v.cduW + Math.max(0, n - 1) * v.nGap) * BASE_SCALE;
        const cduX = rowX + (v.rD * BASE_SCALE - hallCduDepth) / 2;
        let y = rackStartY - blockLen;
        for (let c = 0; c < n; c++) {
            const unit = hallCduQueue.shift();
            const el = document.createElement('div');
            el.className = 'cdu-block inhall' + (unit.isCatcher ? ' catcher' : '');
            el.style.left = cduX + 'px';
            el.style.top = y + 'px';
            el.style.width = hallCduDepth + 'px';
            el.style.height = (v.cduW * BASE_SCALE) + 'px';
            el.innerHTML = `<span class="fwu-label">${unit.isCatcher ? t.lblCatcher : 'CDU'}</span>`;
            drawPlan.appendChild(el);

            push3D('cdu', cduX, y, hallCduDepth, v.cduW * BASE_SCALE, v.nSlab, 2.3, unit.isCatcher ? '#f39c12' : '#27ae60');

            y += (v.cduW + v.nGap) * BASE_SCALE;
        }
    };

    let currentX = dhStartX;
    for (let s = 0; s < pairs; s++) {
        if (s === 0) {
            let caHalf = document.createElement('div');
            caHalf.className = 'aisle-ca';
            caHalf.style.left = currentX + 'px'; caHalf.style.top = dataHallY + 'px';
            caHalf.style.width = (v.rCA / 2 * BASE_SCALE) + 'px'; caHalf.style.height = dhLength + 'px';
            caHalf.innerHTML = `<span>CA</span>`;
            drawPlan.appendChild(caHalf);
            currentX += (v.rCA / 2 * BASE_SCALE);
        }

        drawPhysicalRow(currentX);
        drawRowEndCdu(currentX);

        currentX += (v.rD * BASE_SCALE);

        let ha = document.createElement('div');
        ha.className = 'aisle-ha';
        ha.style.left = currentX + 'px'; ha.style.top = dataHallY + 'px';
        ha.style.width = (v.rHA * BASE_SCALE) + 'px'; ha.style.height = dhLength + 'px';
        ha.innerHTML = `<span>Hot Aisle (${v.rHA}m)</span>`;
        drawPlan.appendChild(ha);
        currentX += (v.rHA * BASE_SCALE);

        // 배치 열 수가 홀수면 마지막 쌍의 두 번째 열은 비운다 (컨테인먼트 공간은 유지)
        const drawSecondCol = !(s === pairs - 1 && (v.rRows % 2) === 1);
        if (drawSecondCol) {
            drawPhysicalRow(currentX);
            drawRowEndCdu(currentX);
        }
        currentX += (v.rD * BASE_SCALE); 

        if (s < pairs - 1) {
            let ca = document.createElement('div');
            ca.className = 'aisle-ca';
            ca.style.left = currentX + 'px'; ca.style.top = dataHallY + 'px';
            ca.style.width = (v.rCA * BASE_SCALE) + 'px'; ca.style.height = dhLength + 'px';
            ca.innerHTML = `<span>Cold Aisle (${v.rCA}m)</span>`;
            drawPlan.appendChild(ca);
            currentX += (v.rCA * BASE_SCALE);
        } else {
            let caHalf = document.createElement('div');
            caHalf.className = 'aisle-ca';
            caHalf.style.left = currentX + 'px'; caHalf.style.top = dataHallY + 'px';
            caHalf.style.width = (v.rCA / 2 * BASE_SCALE) + 'px'; caHalf.style.height = dhLength + 'px';
            caHalf.innerHTML = `<span>CA</span>`;
            drawPlan.appendChild(caHalf);
            currentX += (v.rCA / 2 * BASE_SCALE);
        }
    }

    const renderGallery = (offsetY, isTop) => {
        let fwuArray = [];
        for(let i=0; i<fwuRowsRender; i++) fwuArray.push({ type: 'FWU', isCatcher: i >= (fwuRowsRender - v.nCatcher) });
        let cduArray = [];
        const gallerySideMultiplier = (v.fwuType === 'C') ? 2 : 1;
        const cduCatcherPerSide = Math.ceil(v.cduCatcher / gallerySideMultiplier);
        for(let i=0; i<cduPerSide; i++) cduArray.push({ type: 'CDU', isCatcher: i >= (cduPerSide - cduCatcherPerSide) });
        
        let bayDistributions = [];
        let fCountT = fwuRowsRender, cCountT = cduPerSide;
        
        for(let b=0; b<bays; b++) {
            let bF = Math.ceil(fCountT / (bays - b));
            let bC = Math.ceil(cCountT / (bays - b));
            
            let bEquips = [];
            let mid = Math.floor(bF / 2);
            for(let i=0; i<bF; i++) {
                if(i === mid && bC > 0) {
                    while(bC > 0) { bEquips.push(cduArray.shift()); bC--; }
                }
                bEquips.push(fwuArray.shift());
            }
            while(bC > 0) { bEquips.push(cduArray.shift()); bC--; }
            
            bayDistributions.push(bEquips);
            fCountT -= bEquips.filter(e => e.type === 'FWU').length;
            cCountT -= bEquips.filter(e => e.type === 'CDU').length;
        }

        const sectFwuY = isTop ? (offsetY + (v.nColW*BASE_SCALE) - planDepth) : offsetY;
        const sectColY = offsetY;

        let sectFwu = document.createElement('div');
        sectFwu.className = 'sect-fwu';
        sectFwu.style.left = sectFwuY + 'px'; 
        sectFwu.style.bottom = (v.nSlab * BASE_SCALE) + 'px'; 
        sectFwu.style.width = planDepth + 'px';
        sectFwu.style.height = (totalFwuH * BASE_SCALE) + 'px';
        sectFwu.innerText = 'FWU';
        drawSect.appendChild(sectFwu);

        if (anyGridShown) {
            let sectBeam = document.createElement('div');
            sectBeam.className = 'sect-beam';
            sectBeam.style.left = sectColY + 'px';
            sectBeam.style.top = (v.nSlab * BASE_SCALE) + 'px'; 
            sectBeam.style.width = (v.nColW * BASE_SCALE) + 'px';
            sectBeam.style.height = (v.nBD * BASE_SCALE) + 'px';
            sectBeam.innerText = t.lblBeam;
            drawSect.appendChild(sectBeam);
        }

        if (raSpace > 0) {
            const raArrow = document.createElement('div');
            raArrow.className = isTop ? 'flow-arrow ra move-left' : 'flow-arrow ra move-right';
            raArrow.innerHTML = isTop ? `← RA ${raVelocity.toFixed(1)}m/s` : `RA ${raVelocity.toFixed(1)}m/s →`;
            
            const arrowX = isTop ? (sectColY + v.nColW*BASE_SCALE + 20) : (sectColY - 140);
            raArrow.style.left = arrowX + 'px';
            raArrow.style.bottom = ((v.nSlab * BASE_SCALE) + (totalFwuH + raSpace/2)*BASE_SCALE - 8) + 'px';
            drawSect.appendChild(raArrow);
        }

        const saArrow = document.createElement('div');
        saArrow.className = isTop ? 'flow-arrow sa move-right' : 'flow-arrow sa move-left';
        saArrow.innerHTML = isTop ? `SA ${saVel.toFixed(1)}m/s (22°C) →` : `← SA ${saVel.toFixed(1)}m/s (22°C)`;
        
        const saArrowX = isTop ? (sectColY + v.nColW*BASE_SCALE + 20) : (sectColY - 140);
        saArrow.style.left = saArrowX + 'px';
        saArrow.style.bottom = ((v.nSlab * BASE_SCALE) + (unitH / 2)*BASE_SCALE - 8) + 'px';
        drawSect.appendChild(saArrow);

        for(let i = 0; i < v.nColCnt; i++) {
            const colX = i * v.nSpan * BASE_SCALE; 
            
            if (anyGridShown) {
                if(isTop || (!isTop && v.fwuType === 'B')) {
                    const elevCol = document.createElement('div');
                    elevCol.className = 'col-block';
                    elevCol.style.left = colX + 'px';
                    elevCol.style.bottom = (v.nSlab * BASE_SCALE) + 'px';
                    elevCol.style.width = (v.nColW * BASE_SCALE) + 'px';
                    elevCol.style.height = (v.nCH * BASE_SCALE) + 'px';
                    drawElev.appendChild(elevCol);
                }
            }

            if(i < v.nColCnt - 1) {
                if (anyGridShown) {
                    if(isTop || (!isTop && v.fwuType === 'B')) {
                        const beam = document.createElement('div');
                        beam.className = 'beam-block';
                        beam.style.left = colX + 'px';
                        beam.style.top = (v.nSlab * BASE_SCALE) + 'px'; 
                        beam.style.width = (v.nSpan * BASE_SCALE) + 'px'; 
                        beam.style.height = (v.nBD * BASE_SCALE) + 'px';
                        beam.innerText = t.lblBeam;
                        drawElev.appendChild(beam);
                    }
                }

                let bayEquips = bayDistributions[i] || [];
                let bayTotalW = 0;
                bayEquips.forEach(eq => { bayTotalW += (eq.type === 'FWU' ? v.nW : v.cduW); });
                bayTotalW += Math.max(0, bayEquips.length - 1) * v.nGap;

                let startX;
                if (isPlanFit) {
                    const centerOffsetX = (clearSpan - bayTotalW) / 2;
                    startX = colX + (v.nColW * BASE_SCALE) + (centerOffsetX * BASE_SCALE);
                } else {
                    startX = colX + (v.nColW * BASE_SCALE) + (v.nColGap * BASE_SCALE);
                }
                
                let currentEqX = startX;
                
                for(let f = 0; f < bayEquips.length; f++) {
                    const eq = bayEquips[f];
                    const eqW = eq.type === 'FWU' ? v.nW : v.cduW;
                    const eqD = eq.type === 'FWU' ? planDepth : cduDepth;
                    
                    let eqClass = eq.type === 'FWU' ? 'fwu-block' : 'cdu-block';
                    if (eq.isCatcher) eqClass += ' catcher';
                    if (!isPlanFit) eqClass += ' error'; 
                    
                    const labelText = eq.isCatcher ? (eq.type === 'FWU' ? t.lblStandby : 'Catcher') : eq.type;

                    const fwuTopY = isTop ? (offsetY + (v.nColW*BASE_SCALE) - planDepth) : offsetY;
                    
                    const eqPlan = document.createElement('div');
                    eqPlan.className = eqClass;
                    eqPlan.style.left = currentEqX + 'px';
                    eqPlan.style.top = isTop ? (fwuTopY + (planDepth - eqD)) + 'px' : fwuTopY + 'px'; 
                    eqPlan.style.width = (eqW * BASE_SCALE) + 'px';
                    eqPlan.style.height = eqD + 'px';
                    eqPlan.innerHTML = `<span class="fwu-label" style="transform: rotate(90deg);">${labelText}</span>`;
                    drawPlan.appendChild(eqPlan);

                    {
                        const eqTopPx = isTop ? (fwuTopY + (planDepth - eqD)) : fwuTopY;
                        const eqHeightM = eq.type === 'FWU' ? totalFwuH : 2.3;
                        let eqColor = eq.type === 'FWU' ? '#2980b9' : '#27ae60';
                        if (eq.isCatcher) eqColor = '#f39c12';
                        if (!isPlanFit) eqColor = '#e74c3c';
                        push3D(eq.type.toLowerCase(), currentEqX, eqTopPx, eqW * BASE_SCALE, eqD, v.nSlab, eqHeightM, eqColor);
                    }

                    if (eq.type === 'FWU') {
                        const airClass = eq.isCatcher ? 'sa-air catcher' : 'sa-air';
                        const air = document.createElement('div');
                        air.className = airClass + (isTop ? ' down' : ' up');
                        air.style.left = currentEqX + 'px';
                        air.style.top = isTop ? (fwuTopY + planDepth) + 'px' : (fwuTopY - airFlowDepth) + 'px';
                        air.style.width = (eqW * BASE_SCALE) + 'px';
                        air.style.height = airFlowDepth + 'px';
                        air.style.animationDuration = eq.isCatcher ? (animDuration * 4) + 's' : animDuration + 's'; 
                        
                        air.innerHTML = `<span style="display:block; text-align:center; padding-top:4px;">SA ${saVel.toFixed(1)}m/s (22°C)</span>`;
                        drawPlan.appendChild(air);
                        
                        if(isTop || (!isTop && v.fwuType === 'B')) {
                            const fanAnim = eq.isCatcher ? `spin ${animDuration * 4}s linear infinite` : `spin ${animDuration}s linear infinite`;
                            for(let tNum = 0; tNum < v.nTiers; tNum++) {
                                const fwuElev = document.createElement('div');
                                fwuElev.className = eqClass;
                                fwuElev.style.left = currentEqX + 'px';
                                fwuElev.style.bottom = ((v.nSlab * BASE_SCALE) + (tNum * unitH * BASE_SCALE)) + 'px';
                                fwuElev.style.width = (eqW * BASE_SCALE) + 'px';
                                fwuElev.style.height = (unitH * BASE_SCALE) + 'px';
                                
                                fwuElev.innerHTML = svgFan + `<span class="fwu-label">${labelText}<br><span style="color:#3498db; font-size:7px;">SA ${saVel.toFixed(1)}m/s</span></span>`;
                                fwuElev.querySelector('.fan-svg').style.animation = fanAnim;
                                drawElev.appendChild(fwuElev);
                            }
                        }
                    } else {
                        if(isTop || (!isTop && v.fwuType === 'B')) {
                            const cduElevH = 2.3;
                            const cduElev = document.createElement('div');
                            cduElev.className = eqClass;
                            cduElev.style.left = currentEqX + 'px';
                            cduElev.style.bottom = (v.nSlab * BASE_SCALE) + 'px';
                            cduElev.style.width = (eqW * BASE_SCALE) + 'px';
                            cduElev.style.height = (cduElevH * BASE_SCALE) + 'px';
                            cduElev.innerHTML = `<span class="fwu-label">${labelText}</span>`;
                            drawElev.appendChild(cduElev);
                        }
                    }
                    
                    currentEqX += (eqW + v.nGap) * BASE_SCALE;
                }

                if(isTop || (!isTop && v.fwuType === 'B')) {
                    const raElev = document.createElement('div');
                    raElev.className = raSpace < 0 ? 'ra-space error' : 'ra-space';
                    raElev.style.left = (colX + v.nColW * BASE_SCALE) + 'px';
                    raElev.style.bottom = ((v.nSlab * BASE_SCALE) + (totalFwuH * BASE_SCALE)) + 'px';
                    raElev.style.width = (clearSpan * BASE_SCALE) + 'px';
                    
                    if(raSpace >= 0) { 
                        raElev.style.height = (raSpace * BASE_SCALE) + 'px'; 
                        raElev.innerHTML = `RA ${raVelocity.toFixed(1)}m/s`; 
                    } 
                    else { 
                        raElev.style.height = (Math.abs(raSpace) * BASE_SCALE) + 'px'; 
                        raElev.style.bottom = ((v.nSlab * BASE_SCALE) + (totalFwuH + raSpace) * BASE_SCALE) + 'px'; 
                        raElev.innerText = t.clash; 
                    }
                    drawElev.appendChild(raElev);
                }
            }
        }
    };

    // SECTION: 데이터홀 랙 + (해당 시) 랙열 끝단 CDU
    const sectRacks = document.createElement('div');
    sectRacks.className = isBlockRack ? 'sect-rack blk' : 'sect-rack';
    sectRacks.style.left = rackStartY + 'px';
    sectRacks.style.bottom = (v.nSlab * BASE_SCALE) + 'px';
    sectRacks.style.width = rackAreaLen + 'px';
    sectRacks.style.height = (v.rH * BASE_SCALE) + 'px';
    sectRacks.innerText = t.lblRacks;
    drawSect.appendChild(sectRacks);

    if (hallCduPx > 0) {
        const sectCdu = document.createElement('div');
        sectCdu.className = 'sect-cdu';
        sectCdu.style.left = dataHallY + 'px';
        sectCdu.style.bottom = (v.nSlab * BASE_SCALE) + 'px';
        sectCdu.style.width = hallCduPx + 'px';
        sectCdu.style.height = (2.3 * BASE_SCALE) + 'px';
        sectCdu.innerText = 'CDU';
        drawSect.appendChild(sectCdu);
    }

    if (topGalleryY >= 0) renderGallery(topGalleryY, true);
    if (bottomGalleryY >= 0) renderGallery(bottomGalleryY, false);
    
    drawSect.style.width = canvasTotalHeight + 'px';
    drawSect.style.height = (totalCH * BASE_SCALE) + 'px';
    
    let floorSlab = document.createElement('div');
    floorSlab.className = 'sect-slab';
    floorSlab.style.bottom = '0px'; 
    floorSlab.style.height = (v.nSlab * BASE_SCALE) + 'px'; 
    floorSlab.innerText = t.lblFloorSlab;
    drawSect.appendChild(floorSlab);
    
    let topSlab = document.createElement('div');
    topSlab.className = 'sect-slab';
    topSlab.style.top = '0px'; 
    topSlab.style.height = (v.nSlab * BASE_SCALE) + 'px'; 
    topSlab.innerText = t.lblCeilSlab;
    drawSect.appendChild(topSlab);

    let elevFloorSlab = document.createElement('div');
    elevFloorSlab.className = 'sect-slab';
    elevFloorSlab.style.bottom = '0px'; 
    elevFloorSlab.style.height = (v.nSlab * BASE_SCALE) + 'px'; 
    drawElev.appendChild(elevFloorSlab);
    
    let elevTopSlab = document.createElement('div');
    elevTopSlab.className = 'sect-slab';
    elevTopSlab.style.top = '0px'; 
    elevTopSlab.style.height = (v.nSlab * BASE_SCALE) + 'px'; 
    drawElev.appendChild(elevTopSlab);

    // 바닥/천장 슬라브 — 평면 도면 전체 폭·깊이에 걸치는 판으로 3D 지오메트리에 한 번만 추가
    const slabColor = '#95a5a6';
    push3D('slab', 0, 0, totalDrawingWidth * BASE_SCALE, canvasTotalHeight, 0, v.nSlab, slabColor);
    push3D('slab', 0, 0, totalDrawingWidth * BASE_SCALE, canvasTotalHeight, v.nSlab + v.nCH, v.nSlab, slabColor);
    currentGeometry3D = geo3D;

    autoScaleDrawing();
    render3D();
}

// ══════════════════════════════════════════════════════════════
// 3D VIEW — Three.js로 평면도가 계산한 지오메트리(currentGeometry3D, 단위: m)를 그대로 시각화한다.
// 좌표계는 평면도 그대로 사용: x=건물 스팬 방향, z=데이터홀 길이/깊이 방향, y=높이(바닥=0).
// 라이브러리는 CDN에서 불러오며(offline 시 안내 문구로 대체), OBJ/DXF 내보내기도 이 배열 하나로 처리한다.
// ══════════════════════════════════════════════════════════════
let currentGeometry3D = [];
const three3D = { scene: null, camera: null, renderer: null, controls: null, group: null, ro: null, initialized: false, framedOnce: false };

function ensure3DInit() {
    if (three3D.initialized) return;
    const container = document.getElementById('draw3d');
    const fallback = document.getElementById('draw3dFallback');
    if (typeof THREE === 'undefined' || typeof THREE.OrbitControls === 'undefined') {
        fallback.style.display = 'block';
        fallback.innerText = translations[currentLang].msg3DFail;
        return;
    }
    fallback.style.display = 'none';

    three3D.scene = new THREE.Scene();
    three3D.scene.background = new THREE.Color(0xeef1f4);

    three3D.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 3000);

    three3D.renderer = new THREE.WebGLRenderer({ antialias: true });
    three3D.renderer.shadowMap.enabled = true;
    container.appendChild(three3D.renderer.domElement);

    three3D.controls = new THREE.OrbitControls(three3D.camera, three3D.renderer.domElement);
    three3D.controls.enableDamping = true;
    three3D.controls.dampingFactor = 0.08;
    three3D.controls.addEventListener('change', () => three3D.renderer.render(three3D.scene, three3D.camera));

    three3D.scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight.position.set(40, 60, 30);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    dirLight.shadow.camera.left = -100; dirLight.shadow.camera.right = 100;
    dirLight.shadow.camera.top = 100; dirLight.shadow.camera.bottom = -100;
    three3D.scene.add(dirLight);
    three3D.scene.add(new THREE.HemisphereLight(0xffffff, 0x445566, 0.35));

    three3D.group = new THREE.Group();
    three3D.scene.add(three3D.group);
    three3D.scene.add(new THREE.GridHelper(300, 150, 0xbbbbbb, 0xe0e0e0));

    three3D.ro = new ResizeObserver(() => resize3D());
    three3D.ro.observe(container);

    three3D.initialized = true;
    resize3D();
}

function resize3D() {
    if (!three3D.initialized) return;
    const container = document.getElementById('draw3d');
    const w = container.clientWidth || 1, h = container.clientHeight || 1;
    three3D.camera.aspect = w / h;
    three3D.camera.updateProjectionMatrix();
    three3D.renderer.setSize(w, h);
    three3D.renderer.render(three3D.scene, three3D.camera);
}

// 지오메트리 전체를 감싸는 시점으로 카메라를 되돌린다 (첫 진입 시 자동 1회 + 버튼으로 언제든)
function reset3DCamera() {
    if (!three3D.initialized || !currentGeometry3D.length) return;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity, maxY = 0;
    currentGeometry3D.forEach(b => {
        minX = Math.min(minX, b.x); maxX = Math.max(maxX, b.x + b.w);
        minZ = Math.min(minZ, b.z); maxZ = Math.max(maxZ, b.z + b.d);
        maxY = Math.max(maxY, b.y + b.h);
    });
    const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
    const dist = Math.max(maxX - minX, maxZ - minZ, maxY, 10) * 1.15;
    three3D.camera.position.set(cx - dist * 0.55, dist * 0.6, cz + dist * 0.85);
    three3D.controls.target.set(cx, maxY * 0.3, cz);
    three3D.controls.update();
    resize3D();
}

function render3D() {
    if (typeof THREE === 'undefined') return;
    ensure3DInit();
    if (!three3D.initialized) return;

    while (three3D.group.children.length) {
        const mesh = three3D.group.children.pop();
        mesh.geometry.dispose();
        mesh.material.dispose();
    }

    currentGeometry3D.forEach(b => {
        const geo = new THREE.BoxGeometry(Math.max(b.w, 0.01), Math.max(b.h, 0.01), Math.max(b.d, 0.01));
        const mat = new THREE.MeshStandardMaterial({ color: b.color, roughness: 0.7, metalness: 0.05 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(b.x + b.w / 2, b.y + b.h / 2, b.z + b.d / 2);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        three3D.group.add(mesh);
    });

    if (!three3D.framedOnce && currentGeometry3D.length) {
        reset3DCamera();
        three3D.framedOnce = true;
    }
    resize3D();
}

// ── OBJ(+MTL) / DXF 내보내기 — currentGeometry3D 하나를 두 포맷으로 직렬화 ──
// OBJ: 라이노(네이티브 지원)·스케치업(가져오기)에 열 수 있다. 색상은 동반 .mtl 파일에 담긴다.
// DXF: AutoCAD 등 일반 CAD용. 좌표계를 Z-업(건축 관례)으로 바꿔 내보내고, 색상은 요소 종류별 근사값이다.
function hex3DToRgb01(hex) {
    hex = String(hex).replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return { r: ((num >> 16) & 255) / 255, g: ((num >> 8) & 255) / 255, b: (num & 255) / 255 };
}

function generateOBJ(mtlFilename) {
    const objLines = ['# Datahall 3D export', 'mtllib ' + mtlFilename, ''];
    const mtlLines = [];
    const colorToMat = {};
    let matCount = 0;
    let vIdx = 1;

    // 바깥에서 본 CCW가 되도록 고정한 박스 8정점·6면 인덱스
    const FACES = [[4, 5, 6, 7], [0, 3, 2, 1], [1, 5, 6, 2], [0, 4, 7, 3], [3, 7, 6, 2], [0, 1, 5, 4]];

    currentGeometry3D.forEach((b, bi) => {
        if (!colorToMat[b.color]) {
            matCount++;
            const name = 'mat' + matCount;
            colorToMat[b.color] = name;
            const rgb = hex3DToRgb01(b.color);
            mtlLines.push(`newmtl ${name}`, `Kd ${rgb.r.toFixed(3)} ${rgb.g.toFixed(3)} ${rgb.b.toFixed(3)}`, 'd 1.0', '');
        }
        const x0 = b.x, x1 = b.x + b.w, y0 = b.y, y1 = b.y + b.h, z0 = b.z, z1 = b.z + b.d;
        const verts = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];

        objLines.push(`o ${b.type}_${bi}`, `usemtl ${colorToMat[b.color]}`);
        verts.forEach(p => objLines.push(`v ${p[0].toFixed(3)} ${p[1].toFixed(3)} ${p[2].toFixed(3)}`));
        FACES.forEach(f => objLines.push('f ' + f.map(n => vIdx + n).join(' ')));
        vIdx += 8;
        objLines.push('');
    });

    return { obj: objLines.join('\n'), mtl: mtlLines.join('\n') };
}

function generateDXF() {
    const LAYER_COLOR = { column: 8, beam: 8, slab: 9, rack: 7, fwu: 5, cdu: 3 };
    const lines = ['0', 'SECTION', '2', 'ENTITIES'];
    // DXF(건축 CAD 관례)는 Z-업이므로 3D뷰의 y(높이) ↔ z를 바꿔서 내보낸다
    currentGeometry3D.forEach(b => {
        const layer = (b.type || 'rack').toUpperCase();
        const color = LAYER_COLOR[b.type] || 7;
        const x0 = b.x, x1 = b.x + b.w, y0 = b.z, y1 = b.z + b.d, z0 = b.y, z1 = b.y + b.h;
        const c = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
        const pushFace = (i0, i1, i2, i3) => {
            const p0 = c[i0], p1 = c[i1], p2 = c[i2], p3 = c[i3];
            lines.push('0', '3DFACE', '8', layer, '62', String(color));
            [p0, p1, p2, p3].forEach((p, i) => {
                const codes = [10, 20, 30, 11, 21, 31, 12, 22, 32, 13, 23, 33];
                lines.push(String(codes[i * 3]), p[0].toFixed(3), String(codes[i * 3 + 1]), p[1].toFixed(3), String(codes[i * 3 + 2]), p[2].toFixed(3));
            });
        };
        pushFace(0, 1, 2, 3); pushFace(4, 7, 6, 5); pushFace(0, 4, 5, 1);
        pushFace(2, 6, 7, 3); pushFace(1, 5, 6, 2); pushFace(0, 3, 7, 4);
    });
    lines.push('0', 'ENDSEC', '0', 'EOF');
    return lines.join('\n');
}

function downloadText(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function export3D(format) {
    if (!currentGeometry3D.length) { alert(translations[currentLang].msg3DEmpty); return; }
    const base = 'DataHall_3D_' + Date.now();
    if (format === 'obj') {
        const { obj, mtl } = generateOBJ(base + '.mtl');
        downloadText(obj, base + '.obj', 'text/plain');
        downloadText(mtl, base + '.mtl', 'text/plain');
    } else if (format === 'dxf') {
        downloadText(generateDXF(), base + '.dxf', 'application/dxf');
    }
}

let viewState = {
    elev: { scale: 1, baseScale: 1, panX: 0, panY: 0 },
    sect: { scale: 1, baseScale: 1, panX: 0, panY: 0 },
    plan: { scale: 1, baseScale: 1, panX: 0, panY: 0 }
};

function autoScaleDrawing() {
    ['elev', 'sect', 'plan'].forEach(type => {
        const container = document.getElementById(type + 'Container');
        if(container.style.display === 'none') return;
        const draw = document.getElementById('draw' + type.charAt(0).toUpperCase() + type.slice(1));
        if(!draw.style.width) return;
        
        const availableW = container.clientWidth - 40; 
        const availableH = container.clientHeight - 70; 
        const originalW = parseFloat(draw.style.width);
        const originalH = parseFloat(draw.style.height);

        const scaleW = availableW / originalW;
        const scaleH = availableH / originalH;
        const scale = Math.min(scaleW, scaleH, 1.0); 
        
        viewState[type].baseScale = scale;
        viewState[type].scale = scale;
        viewState[type].panX = 0;
        viewState[type].panY = 15;
        applyTransform(type);
    });
}

function handleZoom(type, factor) {
    viewState[type].scale *= factor;
    if(viewState[type].scale > 5.0) viewState[type].scale = 5.0;
    if(viewState[type].scale < 0.1) viewState[type].scale = 0.1;
    applyTransform(type);
}

function handleFit(type) {
    viewState[type].scale = viewState[type].baseScale;
    viewState[type].panX = 0;
    viewState[type].panY = 15;
    applyTransform(type);
}

function applyTransform(type) {
    const draw = document.getElementById('draw' + type.charAt(0).toUpperCase() + type.slice(1));
    const state = viewState[type];
    draw.style.transform = `translate(calc(-50% + ${state.panX}px), calc(-50% + ${state.panY}px)) scale(${state.scale})`;
}

window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.code === 'Space') {
        e.preventDefault(); 
        toggleMeasure(hoveredPanel);
    }

    if (e.key === 'Escape') {
        if (measurePhase === 1) {
            measurePhase = 0;
            if (currentMeasureLine && currentMeasureLine.parentNode) {
                currentMeasureLine.parentNode.removeChild(currentMeasureLine);
            }
            currentMeasureLine = null;
            hideSnapIndicator();
        } else {
            if (measureMode.top) toggleMeasure('top');
            if (measureMode.plan) toggleMeasure('plan');
        }
    }
});

['elev', 'sect', 'plan'].forEach(type => {
    const container = document.getElementById(type + 'Container');
    const drawWrapper = document.getElementById('draw' + type.charAt(0).toUpperCase() + type.slice(1));
    let isDragging = false;
    let startMouseX, startMouseY, startPanX, startPanY;

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        handleZoom(type, e.deltaY < 0 ? 1.1 : 0.9);
    }, { passive: false });

    container.addEventListener('mousedown', (e) => {
        const pType = type === 'sect' ? 'top' : (type === 'elev' ? 'top' : 'plan');
        if (measureMode[pType]) {
            handleMeasureClick(e, type, drawWrapper);
            return;
        }
        
        isDragging = true;
        startMouseX = e.pageX; startMouseY = e.pageY;
        startPanX = viewState[type].panX; startPanY = viewState[type].panY;
    });

    container.addEventListener('mouseleave', () => { 
        isDragging = false; 
        hideSnapIndicator(); 
    });
    
    container.addEventListener('mouseup', () => { 
        isDragging = false; 
    });

    container.addEventListener('mousemove', (e) => {
        const pType = type === 'sect' ? 'top' : (type === 'elev' ? 'top' : 'plan');
        if (measureMode[pType]) {
            handleMeasureMove(e, type, drawWrapper);
            return;
        }
        if (!isDragging) return;
        e.preventDefault();
        viewState[type].panX = startPanX + (e.pageX - startMouseX);
        viewState[type].panY = startPanY + (e.pageY - startMouseY);
        applyTransform(type);
    });
});

// ══════════════════════════════════════════════════════════════
// 랙 블록 편집기 (Rack Block Editor)
//   GPU 서버 / 일반 서버 / CDU 유닛을 여러 행(row)에 배치 — 붙이거나(gap=0) 이격(gap>0)하고,
//   드래그로 재배열하며 근접 시 자동으로 붙음(snap-attach), 격자(0.05m) 단위 스냅.
//   행은 + 열 추가로 늘릴 수 있다(각 행은 독립적으로 편집, 드래그는 같은 행 안에서만 재배열).
//   완성한 조합은 이름을 붙여 브라우저에 저장하고, [데이터홀] 랙 타입에 자동으로 추가되어
//   일반랙/베라루빈처럼 선택할 수 있다 — 이 경우 랙당 제원은 블록이 정하므로 비활성화된다.
// ══════════════════════════════════════════════════════════════
const BE_TYPE_DEFAULTS = {
    gpu:     { label: 'GPU 서버', labelEn: 'GPU Server', w: 0.6, d: 1.2, h: 2.2, kw: 225.8, color: '#8e44ad' },
    general: { label: '일반 서버', labelEn: 'General Server', w: 0.6, d: 1.2, h: 2.0, kw: 14, color: '#34495e' },
    cdu:     { label: 'CDU', labelEn: 'CDU', w: 1.0, d: 1.2, h: 2.3, kw: 850, color: '#27ae60' }
};
const BE_SCALE = 80;      // px / m
const BE_SNAP = 0.05;     // 격자 스냅 단위 (m)
const BE_ATTACH_PX = 10;  // 이 픽셀 이내로 붙이면 이격 0으로 스냅(붙임)

// 순서대로 이격(gap)을 누적해 각 유닛의 좌/우 끝 좌표(m)를 계산 — 편집기·메인 도면(calc/renderCAD) 공용
function computeRowLayout(units) {
    let x = 0;
    return (units || []).map(u => {
        x += u.gap;
        const left = x;
        x += u.w;
        return Object.assign({}, u, { left, right: x });
    });
}

let beRows = [[]];      // 행의 배열. 각 행 = [{id, type, w, d, h, kw, gap}, ...]  gap = 이전 유닛과의 이격(0=붙임)
let beCurrentRowIdx = 0; // + 유닛 추가 버튼이 적용될 "현재 행"
let beNextId = 1;
let beSelectedId = null;
let beDrag = null;      // {id, rowIdx, startClientX, startLeft, moved, attached}

function openBlockEditor() {
    document.getElementById('blockEditorOverlay').style.display = 'flex';
    beRenderSavedList();
    beRender();
}
function closeBlockEditor() {
    document.getElementById('blockEditorOverlay').style.display = 'none';
}

function beFindUnit(id) {
    for (const row of beRows) { const u = row.find(x => x.id === id); if (u) return u; }
    return null;
}

function beAddUnit(type) {
    const def = BE_TYPE_DEFAULTS[type];
    const id = beNextId++;
    beRows[beCurrentRowIdx].push({ id, type, w: def.w, d: def.d, h: def.h, kw: def.kw, gap: 0 });
    beSelectedId = id;
    beRender();
}

function beAddRow() {
    beRows.push([]);
    beCurrentRowIdx = beRows.length - 1;
    beRender();
}

function beRemoveRow() {
    if (beRows.length <= 1) return;
    const last = beRows[beRows.length - 1];
    if (last.length && !confirm(translations[currentLang].beRemoveRowConfirm)) return;
    beRows.pop();
    if (beCurrentRowIdx >= beRows.length) beCurrentRowIdx = beRows.length - 1;
    if (beSelectedId !== null && !beFindUnit(beSelectedId)) beSelectedId = null;
    beRender();
}

function beSelectRow(idx) {
    beCurrentRowIdx = idx;
    beRender();
}

function beClearCanvas() {
    const hasContent = beRows.some(r => r.length);
    if (hasContent && !confirm(translations[currentLang].beClearConfirm)) return;
    beRows = [[]];
    beCurrentRowIdx = 0;
    beSelectedId = null;
    beRender();
}

function beRender() {
    const canvas = document.getElementById('beCanvas');
    if (!canvas) return;
    const t = translations[currentLang];
    canvas.innerHTML = '';

    let grandLen = 0, grandKw = 0, grandCount = 0;

    beRows.forEach((rowUnits, rowIdx) => {
        const laid = computeRowLayout(rowUnits);
        const rowLen = laid.length ? laid[laid.length - 1].right : 0;
        const rowKw = rowUnits.reduce((s, u) => s + u.kw, 0);
        const rowMaxD = rowUnits.length ? Math.max(...rowUnits.map(u => u.d)) : 1.2;
        grandLen = Math.max(grandLen, rowLen);
        grandKw += rowKw;
        grandCount += rowUnits.length;

        const rowEl = document.createElement('div');
        rowEl.className = 'be-row';
        rowEl.style.height = Math.max(90, rowMaxD * BE_SCALE + 30) + 'px';
        rowEl.style.width = Math.max(300, rowLen * BE_SCALE + 60) + 'px';

        const header = document.createElement('div');
        header.className = 'be-row-header' + (rowIdx === beCurrentRowIdx ? ' active' : '');
        header.innerText = t.beRowLabel + ' ' + (rowIdx + 1) + (rowIdx === beCurrentRowIdx ? ' · ' + t.beRowActive : '');
        header.addEventListener('click', () => beSelectRow(rowIdx));
        rowEl.appendChild(header);

        const baseline = document.createElement('div');
        baseline.className = 'be-row-baseline';
        rowEl.appendChild(baseline);

        laid.forEach(u => {
            const def = BE_TYPE_DEFAULTS[u.type];
            const el = document.createElement('div');
            let cls = 'be-unit';
            if (u.id === beSelectedId) cls += ' selected';
            if (beDrag && beDrag.id === u.id) cls += ' dragging' + (beDrag.attached ? ' snap-attach' : '');
            el.className = cls;
            el.dataset.id = u.id;
            el.style.left = (u.left * BE_SCALE) + 'px';
            el.style.width = (u.w * BE_SCALE) + 'px';
            el.style.height = (u.d * BE_SCALE) + 'px';
            el.style.background = def.color;
            el.style.borderColor = def.color;
            const label = currentLang === 'ko' ? def.label : def.labelEn;
            const kwText = u.kw > 0 ? (u.kw + 'kW') : '';
            const sizeText = u.w.toFixed(2) + '×' + u.d.toFixed(2) + 'm';
            el.innerHTML = '<span style="font-size:9px;font-weight:bold;">' + label + '</span><span style="font-size:9px;opacity:.9;">' + kwText + '</span><span style="font-size:8px;opacity:.75;">' + sizeText + '</span>';
            el.addEventListener('mousedown', e => beStartDrag(e, u.id, rowIdx));
            rowEl.appendChild(el);

            if (u.gap > 0.001) {
                const badge = document.createElement('div');
                badge.className = 'be-gap-badge';
                badge.style.left = ((u.left - u.gap / 2) * BE_SCALE) + 'px';
                badge.innerText = u.gap.toFixed(2) + 'm';
                rowEl.appendChild(badge);
            }
        });

        rowEl.addEventListener('mousedown', e => {
            if (e.target === rowEl || e.target === baseline) { beSelectedId = null; beCurrentRowIdx = rowIdx; beRender(); }
        });

        canvas.appendChild(rowEl);
    });

    const summary = document.getElementById('beSummary');
    if (summary) {
        summary.innerHTML = t.beTotalRows + ': <b>' + beRows.length + t.beRowsSuffix + '</b> &nbsp;·&nbsp; ' + t.beTotalLen + ': <b>' + grandLen.toFixed(2) + ' m</b> &nbsp;·&nbsp; ' + t.beTotalCount + ': <b>' + grandCount + t.beUnitsSuffix + '</b> &nbsp;·&nbsp; ' + t.beTotalKw + ': <b>' + grandKw.toFixed(1) + ' kW</b>';
    }

    beRenderProps();
}

function beRenderProps() {
    const box = document.getElementById('beUnitProps');
    if (!box) return;
    const t = translations[currentLang];
    const u = beFindUnit(beSelectedId);
    if (!u) {
        box.innerHTML = '<div style="font-size:11px;color:#95a5a6;">' + t.beNoSelect + '</div>';
        return;
    }
    const def = BE_TYPE_DEFAULTS[u.type];
    const label = currentLang === 'ko' ? def.label : def.labelEn;
    const attachSelected = u.gap === 0 ? 'selected' : '';
    const gapSelected = u.gap > 0 ? 'selected' : '';
    const gapRowStyle = u.gap > 0 ? '' : 'opacity:.4;';
    const gapDisabled = u.gap > 0 ? '' : 'disabled';
    box.innerHTML =
        '<div class="input-group"><label>' + t.bePropType + '</label><b style="color:' + def.color + ';">' + label + '</b></div>' +
        '<div class="input-group"><label>' + t.bePropW + '</label><input type="number" step="0.05" min="0.1" value="' + u.w + '" onchange="beUpdateUnit(' + u.id + ',\'w\',this.value)"></div>' +
        '<div class="input-group"><label>' + t.bePropD + '</label><input type="number" step="0.05" min="0.1" value="' + u.d + '" onchange="beUpdateUnit(' + u.id + ',\'d\',this.value)"></div>' +
        '<div class="input-group"><label>' + t.bePropH + '</label><input type="number" step="0.05" min="0.1" value="' + u.h + '" onchange="beUpdateUnit(' + u.id + ',\'h\',this.value)"></div>' +
        '<div class="input-group"><label>' + t.bePropKw + '</label><input type="number" step="0.1" min="0" value="' + u.kw + '" onchange="beUpdateUnit(' + u.id + ',\'kw\',this.value)"></div>' +
        '<div class="input-group"><label>' + t.bePropAttach + '</label>' +
            '<select class="sel-wide" onchange="beSetAttach(' + u.id + ', this.value)">' +
                '<option value="attach" ' + attachSelected + '>' + t.beAttach + '</option>' +
                '<option value="gap" ' + gapSelected + '>' + t.beGapMode + '</option>' +
            '</select>' +
        '</div>' +
        '<div class="input-group" style="' + gapRowStyle + '"><label>' + t.beGapDist + '</label><input type="number" step="0.05" min="0" value="' + u.gap + '" ' + gapDisabled + ' onchange="beUpdateUnit(' + u.id + ',\'gap\',this.value)"></div>' +
        '<button class="btn-small" style="width:100%;margin-top:6px;color:var(--accent);" onclick="beDeleteUnit(' + u.id + ')">🗑 ' + t.beDelete + '</button>';
}

function beUpdateUnit(id, key, val) {
    const u = beFindUnit(id);
    if (!u) return;
    u[key] = Math.max(0, parseFloat(val) || 0);
    beRender();
}

function beSetAttach(id, mode) {
    const u = beFindUnit(id);
    if (!u) return;
    if (mode === 'attach') u.gap = 0;
    else if (u.gap === 0) u.gap = 0.2;
    beRender();
}

function beDeleteUnit(id) {
    beRows = beRows.map(row => row.filter(u => u.id !== id));
    if (beSelectedId === id) beSelectedId = null;
    beRender();
}

// ── 드래그: 클릭=선택, 드래그=이동(격자 스냅 + 근접 시 자동 붙임 + 순서 재배열, 같은 행 안에서만) ──
function beStartDrag(e, id, rowIdx) {
    e.preventDefault();
    e.stopPropagation();
    beSelectedId = id;
    beCurrentRowIdx = rowIdx;
    const laid = computeRowLayout(beRows[rowIdx]);
    const u = laid.find(x => x.id === id);
    beDrag = { id, rowIdx, startClientX: e.clientX, startLeft: u.left, moved: false, attached: false };
    document.addEventListener('mousemove', beOnDrag);
    document.addEventListener('mouseup', beEndDrag);
    beRender();
}

function beOnDrag(e) {
    if (!beDrag) return;
    const dx = e.clientX - beDrag.startClientX;
    if (Math.abs(dx) > 3) beDrag.moved = true;
    if (!beDrag.moved) return;

    const dm = dx / BE_SCALE;
    let newLeft = Math.max(0, beDrag.startLeft + dm);
    newLeft = Math.round(newLeft / BE_SNAP) * BE_SNAP;

    const row = beRows[beDrag.rowIdx];
    const draggedUnit = row.find(u => u.id === beDrag.id);
    if (!draggedUnit) return;
    const others = row.filter(u => u.id !== beDrag.id);

    let x = 0;
    const othersLaid = others.map(u => { x += u.gap; const left = x; x += u.w; return Object.assign({}, u, { left, right: x }); });

    let insertIdx = othersLaid.length;
    for (let i = 0; i < othersLaid.length; i++) {
        const center = (othersLaid[i].left + othersLaid[i].right) / 2;
        if (newLeft < center) { insertIdx = i; break; }
    }

    const prevRight = insertIdx > 0 ? othersLaid[insertIdx - 1].right : 0;
    let gap = newLeft - prevRight;
    const attachThresholdM = BE_ATTACH_PX / BE_SCALE;
    let attached = false;
    if (Math.abs(gap) < attachThresholdM) { gap = 0; attached = true; }
    gap = Math.max(0, gap);

    draggedUnit.gap = gap;
    beDrag.attached = attached;
    beRows[beDrag.rowIdx] = others.slice(0, insertIdx).concat([draggedUnit]).concat(others.slice(insertIdx));
    beRender();
}

function beEndDrag() {
    document.removeEventListener('mousemove', beOnDrag);
    document.removeEventListener('mouseup', beEndDrag);
    beDrag = null;
    beRender();
}

// ── 저장 / 불러오기 (브라우저 로컬 저장소) ──
function beLoadBlocks() {
    try { return JSON.parse(localStorage.getItem('customRackBlocks') || '[]'); }
    catch (e) { return []; }
}

function beSaveAs() {
    const hasContent = beRows.some(r => r.length);
    if (!hasContent) { alert(translations[currentLang].beEmptyAlert); return; }
    const name = prompt(translations[currentLang].bePromptName);
    if (!name) return;
    let totalW = 0, totalKw = 0, totalCount = 0;
    const rows = beRows.map(rowUnits => {
        const laid = computeRowLayout(rowUnits);
        totalW = Math.max(totalW, laid.length ? laid[laid.length - 1].right : 0);
        totalKw += rowUnits.reduce((s, u) => s + u.kw, 0);
        totalCount += rowUnits.length;
        return rowUnits.map(u => ({ type: u.type, w: u.w, d: u.d, h: u.h, kw: u.kw, gap: u.gap }));
    });
    const blocks = beLoadBlocks();
    blocks.push({ id: 'blk_' + Date.now(), name, rows, totalW, totalKw, count: totalCount, rowCount: beRows.length });
    localStorage.setItem('customRackBlocks', JSON.stringify(blocks));
    beRenderSavedList();
    refreshRackTypeOptions();
}

function beRenderSavedList() {
    const list = document.getElementById('beSavedList');
    if (!list) return;
    const t = translations[currentLang];
    const blocks = beLoadBlocks();
    if (!blocks.length) { list.innerHTML = '<div style="font-size:11px;color:#95a5a6;">' + t.beNoSaved + '</div>'; return; }
    list.innerHTML = blocks.map(b => {
        const meta = b.rowCount + t.beRowsSuffix + ' · ' + b.count + t.beUnitsSuffix + ' · ' + b.totalW.toFixed(2) + 'm · ' + b.totalKw.toFixed(1) + 'kW';
        return '<div class="be-saved-item">' +
            '<span class="name">' + b.name + '</span>' +
            '<span class="meta">' + meta + '</span>' +
            '<div class="row">' +
                '<button class="btn-small" onclick="bePlaceBlock(\'' + b.id + '\')">' + t.bePlaceBtn + '</button>' +
                '<button class="btn-small" onclick="beRenameBlock(\'' + b.id + '\')">✏️ ' + t.beRenameBtn + '</button>' +
                '<button class="btn-small" style="color:var(--accent);" onclick="beDeleteBlock(\'' + b.id + '\')">' + t.beDelete + '</button>' +
            '</div>' +
        '</div>';
    }).join('');
}

// 저장된 블록의 이름을 바꾼다 — 메인 탭의 랙 타입 선택지 라벨(🧩 이름)도 함께 갱신
function beRenameBlock(id) {
    const blocks = beLoadBlocks();
    const b = blocks.find(x => x.id === id);
    if (!b) return;
    const name = prompt(translations[currentLang].bePromptRename, b.name);
    if (!name || name === b.name) return;
    b.name = name;
    localStorage.setItem('customRackBlocks', JSON.stringify(blocks));
    beRenderSavedList();
    refreshRackTypeOptions();
}

// 저장된 블록의 모든 행을 현재 캔버스 끝에 새 행으로 이어 붙인다 (블록을 조합해 더 큰 구성을 쌓는 용도)
function bePlaceBlock(id) {
    const b = beLoadBlocks().find(x => x.id === id);
    if (!b) return;
    if (beRows.length === 1 && beRows[0].length === 0) beRows = [];
    b.rows.forEach(rowUnits => {
        beRows.push(rowUnits.map(u => Object.assign({}, u, { id: beNextId++ })));
    });
    if (!beRows.length) beRows = [[]];
    beCurrentRowIdx = beRows.length - 1;
    beRender();
}

function beDeleteBlock(id) {
    // refreshRackTypeOptions()가 선택된 option을 지우면 브라우저가 select 값을 조용히 바꿔버리므로,
    // 옵션을 지우기 전에 "삭제되는 블록이 현재 선택돼 있었는지"를 먼저 기록해 둔다
    const wasSelected = elRackType && elRackType.value === 'block:' + id;
    const blocks = beLoadBlocks().filter(b => b.id !== id);
    localStorage.setItem('customRackBlocks', JSON.stringify(blocks));
    beRenderSavedList();
    refreshRackTypeOptions();
    // 메인 탭에서 방금 삭제된 블록이 선택되어 있었다면 일반랙으로 되돌린다
    if (wasSelected) {
        elRackType.value = 'general';
        elRackType.dispatchEvent(new Event('change'));
    }
}

// 빈 캔버스 영역 클릭 시 선택 해제
document.getElementById('beCanvas').addEventListener('mousedown', e => {
    if (e.target.id === 'beCanvas') { beSelectedId = null; beRender(); }
});

refreshRackTypeOptions();

// ══════════════════════════════════════════════════════════════
// AI 어시스턴트 — Gemini를 로컬 프록시(server.js, /api/chat)를 통해서만 호출한다.
// API 키는 서버의 .env에만 보관되고 브라우저에는 절대 전달되지 않는다.
// 모델은 set_value 함수 호출로 이 앱의 입력값을 직접 바꿀 수 있다(간단한 1턴 tool-use 루프).
// ══════════════════════════════════════════════════════════════
let aiHistory = [];
let aiBusy = false;

const AI_TOOL_DECLARATIONS = [{
    name: 'set_value',
    description: '데이터홀 검토 프로그램의 입력값 하나를 변경한다.',
    parameters: {
        type: 'OBJECT',
        properties: {
            field: { type: 'STRING', description: '변경할 필드 ID (아래 필드 목록 중 하나)' },
            value: { type: 'STRING', description: '설정할 값 — 숫자든 코드값이든 항상 문자열로 전달' }
        },
        required: ['field', 'value']
    }
}];

// allInputs(script.js 상단)의 각 id는 'lbl'+Id 규칙의 번역 키를 갖고 있으므로(예: rHA→lblRHA)
// 별도 표를 손으로 관리하지 않고 그대로 재사용해 필드 설명을 만든다.
function buildAIFieldMeta() {
    const t = translations.ko;
    const meta = {};
    allInputs.forEach(id => {
        const key = 'lbl' + id.charAt(0).toUpperCase() + id.slice(1);
        meta[id] = t[key] || id;
    });
    const blockList = beLoadBlocks().map(b => `block:${b.id}(${b.name})`).join(', ') || '없음';
    meta.rackType = `${t.lblRackType} — 'general' 또는 저장된 블록 중 하나: ${blockList}`;
    meta.cduLoc = `${t.lblCduLoc} — 'gallery' 또는 'hall'`;
    meta.acHMode = `${t.lblAcHMode} — 'auto', 'manual', 'count' 중 하나`;
    meta.fwuType = `${t.lblFwuType} — 'A', 'B', 'C' 중 하나`;
    return meta;
}

function buildAISystemInstruction() {
    const meta = buildAIFieldMeta();
    const fieldList = Object.entries(meta).map(([id, label]) => `- ${id}: ${label}`).join('\n');
    return `당신은 "Datahall 검토 프로그램"(데이터센터 IT랙·냉각·건축 간섭 검토 도구)에 내장된 AI 어시스턴트입니다.
질문에는 한국어로 간결히 답하세요. 사용자가 값 변경을 요청하면 set_value 함수를 호출해 직접 바꾸고, 무엇을 왜 바꿨는지 한두 문장으로 설명하세요.
근거 없는 추측으로 값을 바꾸지 말고, 필요한 정보가 부족하면 되물으세요. 각 사용자 메시지 앞에는 현재 설계 상태(JSON)가 자동으로 첨부됩니다.

변경 가능한 필드 목록:
${fieldList}`;
}

function buildAIContext() {
    return {
        currentValues: getFormData(),
        summary: document.getElementById('formulaBox').innerText,
        rackDensityCard: document.getElementById('resRackDensity').innerText,
        planFitCard: document.getElementById('resPlanFit').innerText
    };
}

function openAIAssistant() {
    document.getElementById('aiOverlay').style.display = 'flex';
    document.getElementById('aiInput').focus();
}
function closeAIAssistant() {
    document.getElementById('aiOverlay').style.display = 'none';
}

function aiAppendMsg(role, text) {
    const log = document.getElementById('aiLog');
    const div = document.createElement('div');
    div.className = 'ai-msg ' + role;
    div.innerText = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
    return div;
}

async function callGemini(contents) {
    const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents,
            systemInstruction: { parts: [{ text: buildAISystemInstruction() }] },
            tools: [{ functionDeclarations: AI_TOOL_DECLARATIONS }]
        })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || ('HTTP ' + res.status));
    if (data.error) throw new Error(typeof data.error === 'string' ? data.error : data.error.message || 'API error');
    return data;
}

// set_value 함수 호출을 실제 DOM에 반영 — fwuType은 라디오 그룹이라 별도 처리
function aiApplySetValue(field, value) {
    if (field === 'fwuType') {
        const radio = document.querySelector(`input[name="fwuType"][value="${value}"]`);
        if (!radio) return `${field}: 유효하지 않은 값 (${value})`;
        radio.checked = true;
        radio.dispatchEvent(new Event('change'));
        return `${field} → ${value}`;
    }
    const el = document.getElementById(field);
    if (!el) return `${field}: 알 수 없는 필드`;
    if (el.tagName === 'SELECT' && ![...el.options].some(o => o.value === value)) {
        return `${field}: 유효하지 않은 값 (${value})`;
    }
    el.value = value;
    el.dispatchEvent(new Event('input'));
    el.dispatchEvent(new Event('change'));
    return `${field} → ${value}`;
}

async function sendAIMessage() {
    if (aiBusy) return;
    const input = document.getElementById('aiInput');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    aiAppendMsg('user', text);

    const contextMsg = '[현재 설계 상태]\n' + JSON.stringify(buildAIContext());
    aiHistory.push({ role: 'user', parts: [{ text: contextMsg + '\n\n[사용자 메시지]\n' + text }] });

    aiBusy = true;
    const thinking = aiAppendMsg('model thinking', '...');
    try {
        let data = await callGemini(aiHistory);
        let candidate = data.candidates && data.candidates[0];
        if (!candidate) throw new Error('빈 응답 (candidates 없음)');

        let parts = candidate.content.parts || [];
        aiHistory.push({ role: 'model', parts });

        const functionCalls = parts.filter(p => p.functionCall).map(p => p.functionCall);
        const textParts = parts.filter(p => p.text).map(p => p.text).join('\n');

        if (functionCalls.length) {
            const results = functionCalls.map(fc => aiApplySetValue(fc.args.field, fc.args.value));
            thinking.remove();
            aiAppendMsg('applied', '✅ ' + results.join(', '));

            const funcResponseParts = functionCalls.map((fc, i) => ({
                functionResponse: { name: fc.name, response: { result: results[i] } }
            }));
            aiHistory.push({ role: 'user', parts: funcResponseParts });

            data = await callGemini(aiHistory);
            candidate = data.candidates && data.candidates[0];
            if (candidate) {
                aiHistory.push({ role: 'model', parts: candidate.content.parts });
                const finalText = candidate.content.parts.filter(p => p.text).map(p => p.text).join('\n');
                if (finalText) aiAppendMsg('model', finalText);
            }
        } else {
            thinking.remove();
            if (textParts) aiAppendMsg('model', textParts);
        }
    } catch (e) {
        thinking.remove();
        aiAppendMsg('error', translations[currentLang].aiErrGeneric + e.message);
    } finally {
        aiBusy = false;
    }
}

changeLang();