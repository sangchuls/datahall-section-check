// 💡 양방향 동기화 및 입력 변수 제어
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

const inputsList = ['nKw','nCfm','nMargin','nW','nRatio','nVel','nCH','nBD','nSpan','nColW','nColCnt','nGap'];
const allInputs = [...inputsList, 'nUnits', 'nPlanUnits', 'nCatcher', 'nTiers'];

inputsList.forEach(id => {
    document.getElementById(id).addEventListener('input', calc);
    document.getElementById(id).addEventListener('change', calc);
});

window.addEventListener('resize', autoScaleDrawing);

const svgFan = `<svg viewBox="0 0 24 24" class="fan-svg"><path fill="currentColor" d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 15.75,6.75C14.39,7.93 12.87,7.4 12.87,7.4C12.87,7.4 14.15,10.26 12.5,10.87C11.16,11.36 10.23,9.59 10.23,9.59C10.23,9.59 7.64,11.23 6.64,10.1C5.64,8.96 8.32,7.39 8.32,7.39C8.32,7.39 6.53,5.65 7.64,4.42C8.76,3.19 11.46,4.6 11.46,4.6C11.46,4.6 10.5,2 12.5,2M12,22C7.5,22 7.39,18.43 8.75,17.25C10.11,16.07 11.63,16.6 11.63,16.6C11.63,16.6 10.35,13.74 12,13.13C13.34,12.64 14.27,14.41 14.27,14.41C14.27,14.41 16.86,12.77 17.86,13.9C18.86,15.04 16.18,16.61 16.18,16.61C16.18,16.61 17.97,18.35 16.86,19.58C15.74,20.81 13.04,19.4 13.04,19.4C13.04,19.4 14,22 12,22Z"></path></svg>`;

// 💡 데이터 로컬 저장 및 JSON 내보내기 기능
function getFormData() {
    const data = {};
    allInputs.forEach(id => data[id] = document.getElementById(id).value);
    return data;
}

function setFormData(data) {
    for (let key in data) {
        if(document.getElementById(key)) {
            document.getElementById(key).value = data[key];
        }
    }
    calc();
}

function saveData() {
    const data = getFormData();
    localStorage.setItem('fwuDesignData', JSON.stringify(data));
    alert('현재 설정값이 브라우저 저장소에 성공적으로 저장되었습니다.');
}

function loadData() {
    const savedData = localStorage.getItem('fwuDesignData');
    if (savedData) {
        setFormData(JSON.parse(savedData));
    } else {
        alert('저장된 설정값이 없습니다.');
    }
}

function exportData() {
    const data = getFormData();
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `FWU_Design_Export_${new Date().getTime()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 메인 계산 함수
function calc() {
    const v = {};
    allInputs.forEach(id => v[id] = parseFloat(document.getElementById(id).value) || 0);
    
    const totalCmh = v.nKw * v.nCfm * 1.699 * v.nMargin;
    const activeUnits = v.nUnits > 0 ? v.nUnits : 1; 
    const unitCmh = totalCmh / activeUnits;
    const unitH = unitCmh / (v.nW * v.nRatio * v.nVel * 3600);
    const totalFwuH = unitH * v.nTiers;

    const totalRows = v.nPlanUnits; 
    const bays = v.nColCnt - 1; 
    if(bays <= 0) return;
    
    const fwuPerBay = Math.ceil(totalRows / bays);
    const clearSpan = v.nSpan - v.nColW; 
    const requiredClearW = (fwuPerBay * v.nW) + ((fwuPerBay + 1) * v.nGap);
    const isPlanFit = requiredClearW <= clearSpan;

    const clearHeight = v.nCH - v.nBD; 
    const raSpace = clearHeight - totalFwuH; 
    const isHeightFit = raSpace >= 0;

    let raArea = clearSpan * raSpace * bays;
    let raVelocity = (raSpace > 0 && raArea > 0) ? (totalCmh / 3600) / raArea : 0;

    document.getElementById('resUnitH').innerText = unitH.toFixed(2) + ' m';
    document.getElementById('resTotalFwuH').innerText = totalFwuH.toFixed(2) + ' m';
    
    const cardPlan = document.getElementById('cardPlan');
    cardPlan.className = isPlanFit ? 'card full good' : 'card full alert';
    cardPlan.querySelector('strong').innerText = isPlanFit ? '기둥 사이 배치 가능 (OK)' : '공간 부족 (간섭 발생)';
    
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
        <div class="f-item"><b>1. 풍량:</b> ${v.nKw}kW × ${v.nCfm}CFM × 1.7 × ${v.nMargin} ➔ <code>${Math.round(totalCmh).toLocaleString()} CMH</code></div>
        <div class="f-item"><b>2. 요구H:</b> 1대풍량(<span style="color:var(--accent)">유효대수 기준</span>) ÷ (W × 유효율 × 풍속 × 3600) ➔ <code>${unitH.toFixed(2)} m</code></div>
        <div class="f-item"><b>3. RA공간:</b> 보밑층고(${clearHeight.toFixed(1)}m) - 장비총H(${totalFwuH.toFixed(2)}m) ➔ <code>${raSpace.toFixed(2)} m</code></div>
        <div class="f-item"><b>4. RA풍속:</b> 송풍량(CMS) ÷ 전체 RA면적 ➔ <code>${raVelocity > 0 ? raVelocity.toFixed(2) : '-'} m/s</code></div>
    `;

    renderCAD(v, clearSpan, fwuPerBay, requiredClearW, unitH, totalFwuH, raSpace, totalRows, v.nVel);
}

const BASE_SCALE = 40; 

// 도면 실시간 도화 함수
function renderCAD(v, clearSpan, fwuPerBay, requiredClearW, unitH, totalFwuH, raSpace, totalRows, saVel) {
    const totalDrawingWidth = ((v.nColCnt - 1) * v.nSpan) + v.nColW;
    
    const drawElev = document.getElementById('drawElev');
    const drawPlan = document.getElementById('drawPlan');
    drawElev.innerHTML = ''; drawPlan.innerHTML = '';
    
    drawElev.style.width = (totalDrawingWidth * BASE_SCALE) + 'px';
    drawElev.style.height = (v.nCH * BASE_SCALE) + 'px';
    
    const planDepth = 2.0 * BASE_SCALE; 
    const airFlowDepth = 1.5 * BASE_SCALE; 
    drawPlan.style.width = (totalDrawingWidth * BASE_SCALE) + 'px';
    drawPlan.style.height = (planDepth + airFlowDepth + (v.nColW * BASE_SCALE)) + 'px'; 

    let animDuration = 2.6 / (saVel > 0.1 ? saVel : 0.1);
    let drawnCols = 0; 
    
    const activeRows = totalRows - v.nCatcher;

    for(let i = 0; i < v.nColCnt; i++) {
        const colX = i * v.nSpan * BASE_SCALE; 
        
        const elevCol = document.createElement('div');
        elevCol.className = 'col-block';
        elevCol.style.left = colX + 'px';
        elevCol.style.width = (v.nColW * BASE_SCALE) + 'px';
        elevCol.style.height = '100%';
        drawElev.appendChild(elevCol);

        const planCol = document.createElement('div');
        planCol.className = 'col-block';
        planCol.style.left = colX + 'px';
        planCol.style.top = '0px';
        planCol.style.width = (v.nColW * BASE_SCALE) + 'px';
        planCol.style.height = (v.nColW * BASE_SCALE) + 'px';
        drawPlan.appendChild(planCol);

        if(i < v.nColCnt - 1) {
            const beam = document.createElement('div');
            beam.className = 'beam-block';
            beam.style.left = colX + 'px';
            beam.style.top = '0px';
            beam.style.width = (v.nSpan * BASE_SCALE) + 'px'; 
            beam.style.height = (v.nBD * BASE_SCALE) + 'px';
            beam.innerText = `Beam`;
            drawElev.appendChild(beam);

            const emptySpace = clearSpan - requiredClearW;
            const startX = colX + (v.nColW * BASE_SCALE) + (emptySpace/2 * BASE_SCALE) + (v.nGap * BASE_SCALE);
            
            for(let f = 0; f < fwuPerBay; f++) {
                if (drawnCols >= totalRows) break; 
                
                const fwuX = startX + (f * (v.nW + v.nGap) * BASE_SCALE);
                
                const isCatcher = drawnCols >= activeRows;
                const fwuClass = isCatcher ? 'fwu-block catcher' : 'fwu-block';
                const airClass = isCatcher ? 'sa-air catcher' : 'sa-air';
                const labelText = isCatcher ? 'Catcher' : 'FWU';
                const fanAnim = isCatcher ? `spin ${animDuration * 3}s linear infinite` : `spin ${animDuration}s linear infinite`;
                const airAnim = isCatcher ? `airflow ${animDuration * 3}s linear infinite` : `airflow ${animDuration}s linear infinite`;
                
                for(let t = 0; t < v.nTiers; t++) {
                    const fwuElev = document.createElement('div');
                    fwuElev.className = fwuClass;
                    fwuElev.style.left = fwuX + 'px';
                    fwuElev.style.bottom = (t * unitH * BASE_SCALE) + 'px';
                    fwuElev.style.width = (v.nW * BASE_SCALE) + 'px';
                    fwuElev.style.height = (unitH * BASE_SCALE) + 'px';
                    
                    fwuElev.innerHTML = svgFan + `<span class="fwu-label">${labelText}</span>`;
                    fwuElev.querySelector('.fan-svg').style.animation = fanAnim;
                    drawElev.appendChild(fwuElev);
                }

                const fwuTopY = ((v.nColW - 1.5)/2 * BASE_SCALE);
                
                const fwuPlan = document.createElement('div');
                fwuPlan.className = fwuClass;
                fwuPlan.style.left = fwuX + 'px';
                fwuPlan.style.top = fwuTopY + 'px'; 
                fwuPlan.style.width = (v.nW * BASE_SCALE) + 'px';
                fwuPlan.style.height = planDepth + 'px';
                fwuPlan.innerHTML = `<span class="fwu-label" style="transform: rotate(90deg);">${labelText}</span>`;
                drawPlan.appendChild(fwuPlan);

                const air = document.createElement('div');
                air.className = airClass;
                air.style.left = fwuX + 'px';
                air.style.top = (fwuTopY + planDepth) + 'px';
                air.style.width = (v.nW * BASE_SCALE) + 'px';
                air.style.height = airFlowDepth + 'px';
                air.style.animation = airAnim;
                drawPlan.appendChild(air);

                drawnCols++;
            }

            const raElev = document.createElement('div');
            raElev.className = raSpace < 0 ? 'ra-space error' : 'ra-space';
            raElev.style.left = (colX + v.nColW * BASE_SCALE) + 'px';
            raElev.style.bottom = (totalFwuH * BASE_SCALE) + 'px';
            raElev.style.width = (clearSpan * BASE_SCALE) + 'px';
            
            if(raSpace >= 0) {
                raElev.style.height = (raSpace * BASE_SCALE) + 'px';
                raElev.innerText = `RA`;
            } else {
                raElev.style.height = (Math.abs(raSpace) * BASE_SCALE) + 'px';
                raElev.style.bottom = ((totalFwuH + raSpace) * BASE_SCALE) + 'px';
                raElev.innerText = `간섭`;
            }
            drawElev.appendChild(raElev);
            
            const dimSpan = document.createElement('div');
            dimSpan.className = 'dim dim-w';
            dimSpan.style.left = (colX + v.nColW/2 * BASE_SCALE) + 'px';
            dimSpan.style.bottom = '-10px';
            dimSpan.style.width = (v.nSpan * BASE_SCALE) + 'px';
            dimSpan.innerHTML = `<span>${v.nSpan}m</span>`;
            drawPlan.appendChild(dimSpan);
        }
    }
    
    autoScaleDrawing();
}

// 💡 뷰어 줌 / 팬 인터랙션 상태 관리
let viewState = {
    elev: { scale: 1, baseScale: 1, panX: 0, panY: 0 },
    plan: { scale: 1, baseScale: 1, panX: 0, panY: 0 }
};

function autoScaleDrawing() {
    ['elev', 'plan'].forEach(type => {
        const container = document.getElementById(type + 'Container');
        const draw = document.getElementById(type === 'elev' ? 'drawElev' : 'drawPlan');
        
        if(!draw.style.width) return;
        
        const availableW = container.clientWidth - 40; 
        const availableH = container.clientHeight - 40; 
        const originalW = parseFloat(draw.style.width);
        const originalH = parseFloat(draw.style.height);

        const scaleW = availableW / originalW;
        const scaleH = availableH / originalH;
        const scale = Math.min(scaleW, scaleH, 1.0); 
        
        viewState[type].baseScale = scale;
        viewState[type].scale = scale;
        viewState[type].panX = 0;
        viewState[type].panY = 0;
        
        applyTransform(type);
    });
}

function handleZoom(type, factor) {
    viewState[type].scale *= factor;
    if(viewState[type].scale > 5.0) viewState[type].scale = 5.0;
    if(viewState[type].scale < 0.1) viewState[type].scale = 0.1;
    applyTransform(type);
}

// 화면 맞춤 함수
function handleFit(type) {
    viewState[type].scale = viewState[type].baseScale;
    viewState[type].panX = 0;
    viewState[type].panY = 0;
    applyTransform(type);
}

function applyTransform(type) {
    const draw = document.getElementById(type === 'elev' ? 'drawElev' : 'drawPlan');
    const state = viewState[type];
    draw.style.transform = `translate(calc(-50% + ${state.panX}px), calc(-50% + ${state.panY}px)) scale(${state.scale})`;
}

// 마우스 드래그 및 휠 이벤트 바인딩
['elev', 'plan'].forEach(type => {
    const container = document.getElementById(type + 'Container');
    let isDragging = false;
    let startMouseX, startMouseY;
    let startPanX, startPanY;

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.1 : 0.9;
        handleZoom(type, factor);
    }, { passive: false });

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startMouseX = e.pageX;
        startMouseY = e.pageY;
        startPanX = viewState[type].panX;
        startPanY = viewState[type].panY;
    });

    container.addEventListener('mouseleave', () => isDragging = false);
    container.addEventListener('mouseup', () => isDragging = false);

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const dx = e.pageX - startMouseX;
        const dy = e.pageY - startMouseY;
        viewState[type].panX = startPanX + dx;
        viewState[type].panY = startPanY + dy;
        applyTransform(type);
    });
});

// 초기화 연산 실행
calc();