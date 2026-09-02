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
        tabElev: "ELEVATION VIEW (입면)", tabSect: "SECTION VIEW (단면)", tabPlan: "PLAN VIEW (데이터홀 & FWU 코디네이션)",
        form1Title: "1. IT부하 및 랙 밀도", form1Racks: "총 랙", form1Dens: "밀도", form2Title: "2. 데이터홀 Containment Pitch",
        form3Title: "3. 필요 총 풍량 (AC)", form3LcTitle: "4. 필요 CDU 대수 (LC)", form4Title: "5. FWU 요구 높이 (H)", form4Type: "타입", form4Units: "총 유효대수", form4Air: "1대당 풍량", form4Req: "요구H",
        form5Title: "6. 보 밑 RA공간", form5Clear: "순층고", form5Equip: "장비총고",
        form4Mode: "산출", form4ModeAuto: "자동(풍속 고정)", form4ModeManual: "수동(높이 고정)", form4ModeCount: "대수 산출(H·V 고정)", form4Vel: "환산 SA 풍속",
        form4Solved: "산출 대수", form4Cap: "갤러리 수용", form4Over: "열 초과", form4Hint: "적층 단수↑ 또는 1대 높이↓ 필요", form4Row: "열",
        formLcLoc: "배치", formLcAddLen: "홀 길이 증가", formLcPerRow: "열당 최대", formLcRows: "적용 열 수",
        msgSave: "설정값이 브라우저 임시저장소에 저장되었습니다.", msgLoadOk: "파일을 성공적으로 불러왔습니다.", msgLoadErr: "파일을 읽는 중 오류가 발생했습니다.",
        lblStandby: "Standby", lblCatcher: "Catcher", lblRacks: "IT Racks", lblBeam: "Beam", lblFloorSlab: "FLOOR SLAB", lblCeilSlab: "CEILING SLAB", clash: "간섭"
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
        tabElev: "ELEVATION VIEW", tabSect: "SECTION VIEW", tabPlan: "PLAN VIEW (Data Hall & FWU)",
        form1Title: "1. IT Load & Rack Density", form1Racks: "Total Racks", form1Dens: "Density", form2Title: "2. Data Hall Containment Pitch",
        form3Title: "3. Required Airflow (AC)", form3LcTitle: "4. Required CDU (LC)", form4Title: "5. Required FWU Height (H)", form4Type: "Type", form4Units: "Total Active Units", form4Air: "Airflow/unit", form4Req: "Req. H",
        form5Title: "6. RA Space under Beam", form5Clear: "Clear Height", form5Equip: "Total Equip H",
        form4Mode: "Mode", form4ModeAuto: "Auto (fixed velocity)", form4ModeManual: "Manual (fixed height)", form4ModeCount: "Solve Count (fixed H·V)", form4Vel: "Resulting SA Velocity",
        form4Solved: "Solved Units", form4Cap: "Gallery Capacity", form4Over: "rows over", form4Hint: "increase tiers or reduce unit height", form4Row: "rows",
        formLcLoc: "Location", formLcAddLen: "Added Hall Length", formLcPerRow: "Max per Row", formLcRows: "Rows Used",
        msgSave: "Settings saved to browser local storage.", msgLoadOk: "File loaded successfully.", msgLoadErr: "Error reading file.",
        lblStandby: "Standby", lblCatcher: "Catcher", lblRacks: "IT Racks", lblBeam: "Beam", lblFloorSlab: "FLOOR SLAB", lblCeilSlab: "CEILING SLAB", clash: "Clash"
    }
};

let currentLang = 'ko';

function changeLang() {
    currentLang = document.getElementById('langSelect').value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
    });
    const btnAnim = document.getElementById('btnAnimToggle');
    btnAnim.innerText = isAnimRunning ? translations[currentLang].btnAnimPause : translations[currentLang].btnAnimPlay;
    renderYGridUI();
    calc(); 
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

const inputsList = ['rW', 'rD', 'rH', 'rHA', 'rCA', 'rCorridor', 'rCnt', 'rRows', 'nKw', 'acRatio', 'lcRatio', 'cduCap', 'cduCatcher', 'cduW', 'nCfm','nMargin','nW','nRatio','nVel','nUnitH','nCH','nSlab','nBD','nSpan','nColW','nColCnt','nGap', 'nColGap'];
const allInputs = [...inputsList, 'nUnits', 'nPlanUnits', 'nCatcher', 'nTiers'];
// 문자열 값을 갖는 select들 (parseFloat 대상에서 제외)
const selectInputs = ['acHMode', 'cduLoc'];

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
    
    document.getElementById('elevContainer').style.display = (viewName === 'elev') ? 'block' : 'none';
    document.getElementById('sectContainer').style.display = (viewName === 'sect') ? 'block' : 'none';
    
    autoScaleDrawing();
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
    
    const totalRacks = v.rCnt * v.rRows;
    const rackDensity = totalRacks > 0 ? (v.nKw / totalRacks) : 0;
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
    const hallRowCount = Math.max(1, Math.ceil(v.rRows / 2) * 2);
    const hallCduTotal = cduInGallery ? 0 : cduTotal;
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

    document.getElementById('resRackDensity').innerText = `${totalRacks} EA (${rackDensity.toFixed(1)} kW/Rack)`;
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
        <div class="f-item"><b>${t.form1Title}:</b><br>${t.form1Racks}: ${totalRacks} EA ➔ ${t.form1Dens}: <b>${rackDensity.toFixed(2)} kW/Rack</b></div>
        <div class="f-item"><b>${t.form2Title}:</b><br>HA(${v.rHA}) + Rack(${v.rD}×2) + CA(${v.rCA}) = <code style="color:#27ae60;">${pitch.toFixed(2)} m</code></div>
        <div class="f-item"><b>${t.form3Title}:</b><br>${v.nKw}kW × ${v.acRatio}% = ${acLoad.toFixed(1)}kW<br>${acLoad.toFixed(1)}kW × ${v.nCfm}CFM/kW × 1.699 × ${v.nMargin} = <b>${Math.round(totalCmh).toLocaleString()} CMH</b></div>
        <div class="f-item"><b>${t.form3LcTitle}:</b><br>${v.nKw}kW × ${v.lcRatio}% × ${v.nMargin} = ${cduReqKw.toFixed(1)}kW<br>${cduReqKw.toFixed(1)}kW / ${v.cduCap}kW = <b>${cduActive} + ${v.cduCatcher}대(예비) = ${cduTotal}대</b><br>${t.formLcLoc}: <b style="color:#27ae60;">${cduInGallery ? t.valCduGallery : t.valCduHall}</b>${cduInGallery ? '' : `<br>${t.formLcRows}: ${hallCdu.rowsUsed} / ${hallCdu.rowCount} (${t.formLcPerRow} ${hallCdu.perRowMax}EA) → ${t.formLcAddLen}: <code style="color:#c0392b;">${hallCdu.len.toFixed(2)} m</code>`}</div>
        <div class="f-item"><b>${t.form4Title}:</b><br>${t.form4Type} <b>Type ${v.fwuType}</b> ➔ ${t.form4Units}: ${v.nUnits}×${gallerySideMultiplier} = <b>${totalActiveUnits} EA</b><br>${t.form4Air}: ${Math.round(unitCmh).toLocaleString()} CMH ➔ ${t.form4Req}: <code style="color:#c0392b;">${unitH.toFixed(2)} m</code><br>${t.form4Mode}: <b>${isCountMode ? t.form4ModeCount : (isManualH ? t.form4ModeManual : t.form4ModeAuto)}</b> → ${t.form4Vel}: <code style="color:${saVel > 4 ? '#c0392b' : '#2980b9'};">${saVel.toFixed(2)} m/s</code>${isCountMode ? `<br>${t.form4Solved}: <b>${v.nUnits}×${gallerySideMultiplier} EA</b> (${v.nPlanUnits}${t.form4Row}) / ${t.form4Cap}: ${galleryRowCapacity}${t.form4Row} ${rowOverflow > 0 ? `<b style="color:#c0392b;">▲ ${rowOverflow}${t.form4Over} — ${t.form4Hint}</b>` : '<b style="color:#27ae60;">OK</b>'}` : ''}</div>
        <div class="f-item"><b>${t.form5Title}:</b><br>${t.form5Clear}(${v.nCH}-${v.nSlab}-${v.nBD}m) - ${t.form5Equip}(${totalFwuH.toFixed(2)}m) = <b>${raSpace.toFixed(2)} m</b></div>
    `;

    renderCAD(v, clearSpan, fwuRowsRender, cduPerSide, isPlanFit, unitH, totalFwuH, raSpace, saVel, raVelocity, hallCdu);
}

const BASE_SCALE = 40; 

function renderCAD(v, clearSpan, fwuRowsRender, cduPerSide, isPlanFit, unitH, totalFwuH, raSpace, saVel, raVelocity, hallCdu) {
    const totalDrawingWidth = ((v.nColCnt - 1) * v.nSpan) + v.nColW;
    const t = translations[currentLang];
    const bays = v.nColCnt - 1;
    
    const anyGridShown = yGrids.some(g => g.show);
    
    const drawElev = document.getElementById('drawElev');
    const drawPlan = document.getElementById('drawPlan');
    const drawSect = document.getElementById('drawSect');
    drawElev.innerHTML = ''; drawPlan.innerHTML = ''; drawSect.innerHTML = '';
    
    const totalCH = v.nCH + v.nSlab;
    drawElev.style.width = (totalDrawingWidth * BASE_SCALE) + 'px';
    drawElev.style.height = (totalCH * BASE_SCALE) + 'px';

    const planDepth = 2.0 * BASE_SCALE; 
    const cduDepth = 1.2 * BASE_SCALE; 
    const airFlowDepth = 1.5 * BASE_SCALE; 
    
    const galleryPhysicalDepth = (v.nColW * BASE_SCALE); 
    const corridorGap = v.rCorridor * BASE_SCALE; 
    // 랙 영역 + (데이터홀 배치 시) 랙열 끝단 CDU 영역
    const rackAreaLen = v.rCnt * v.rW * BASE_SCALE;
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

        for(let k = 0; k < v.rCnt; k++) {
            let rack = document.createElement('div');
            rack.className = 'rack-block';
            rack.style.left = currentX + 'px';
            rack.style.top = (rackStartY + k * v.rW * BASE_SCALE) + 'px';
            rack.style.width = (v.rD * BASE_SCALE) + 'px'; 
            rack.style.height = (v.rW * BASE_SCALE) + 'px';
            drawPlan.appendChild(rack);
        }
        
        drawRowEndCdu(currentX);

        currentX += (v.rD * BASE_SCALE); 

        let ha = document.createElement('div');
        ha.className = 'aisle-ha';
        ha.style.left = currentX + 'px'; ha.style.top = dataHallY + 'px';
        ha.style.width = (v.rHA * BASE_SCALE) + 'px'; ha.style.height = dhLength + 'px';
        ha.innerHTML = `<span>Hot Aisle (${v.rHA}m)</span>`;
        drawPlan.appendChild(ha);
        currentX += (v.rHA * BASE_SCALE);

        for(let k = 0; k < v.rCnt; k++) {
            let rack = document.createElement('div');
            rack.className = 'rack-block';
            rack.style.left = currentX + 'px';
            rack.style.top = (rackStartY + k * v.rW * BASE_SCALE) + 'px';
            rack.style.width = (v.rD * BASE_SCALE) + 'px'; 
            rack.style.height = (v.rW * BASE_SCALE) + 'px';
            drawPlan.appendChild(rack);
        }
        drawRowEndCdu(currentX);
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
    sectRacks.className = 'sect-rack';
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

    autoScaleDrawing();
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

changeLang();