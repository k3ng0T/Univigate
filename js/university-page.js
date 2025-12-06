/**
 * Страница университета
 * Динамически загружает и отображает информацию об университете
 */

// Получаем ID университета из URL
function getUniversityIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Основная функция загрузки данных
function loadUniversityData() {
    const uniId = getUniversityIdFromUrl();
    
    if (!uniId) {
        showError();
        return;
    }
    
    const university = getUniversityById(uniId);
    
    if (!university) {
        showError();
        return;
    }
    
    renderUniversityPage(university);
}

// Показать ошибку
function showError() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'flex';
}

// Рендер страницы университета
function renderUniversityPage(uni) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('uni-content').style.display = 'block';
    
    // Заголовок страницы
    document.title = `${uni.shortName} - ${uni.nameRu} | UniviGate`;
    
    // Основная информация
    document.getElementById('uni-name').textContent = uni.name;
    document.getElementById('uni-name-ru').textContent = uni.nameRu;
    document.getElementById('uni-type').textContent = uni.info.type;
    document.getElementById('uni-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${uni.info.location.city}`;
    document.getElementById('uni-founded').textContent = `Основан: ${uni.info.founded}`;
    
    // Логотип
    const logoImg = document.getElementById('uni-logo');
    logoImg.src = `../${uni.logo}`;
    logoImg.alt = uni.shortName;
    logoImg.onerror = function() {
        this.src = '../images/unilogo.png';
    };
    
    // Рейтинги
    renderRankings(uni);
    
    // Описание
    document.getElementById('uni-description').textContent = uni.info.description;
    
    // Контакты
    const websiteEl = document.getElementById('uni-website');
    websiteEl.href = uni.info.website;
    websiteEl.textContent = uni.info.website;
    
    const emailEl = document.getElementById('uni-email');
    emailEl.href = `mailto:${uni.info.email}`;
    emailEl.textContent = uni.info.email;
    
    document.getElementById('uni-phone').textContent = uni.info.phone;
    document.getElementById('uni-address').textContent = uni.info.location.address;
    
    // Ссылка на сайт для подачи заявки
    document.getElementById('apply-link').href = uni.info.website;
    
    // Требования
    renderRequirements(uni);
    
    // Сильные стороны
    renderStrengths(uni);
    
    // Факультеты
    renderFaculties(uni);
    
    // Программы
    renderPrograms(uni);
    
    // Баллы ЕНТ
    renderENTScores(uni);
    
    // Стипендии
    renderScholarships(uni);
    
    // Аккредитации
    renderAccreditations(uni);
    
    // Избранное
    initFavoriteButton(uni);
    
    // Инициализация табов
    initTabs();
}

// Рендер рейтингов
function renderRankings(uni) {
    const container = document.getElementById('uni-rankings');
    let html = '';
    
    if (uni.rankings.qsWorld) {
        html += `
            <div class="ranking-badge qs-world">
                <span class="ranking-label">QS World</span>
                <span class="ranking-value">#${uni.rankings.qsWorld}</span>
            </div>
        `;
    }
    
    if (uni.rankings.qsAsia) {
        html += `
            <div class="ranking-badge qs-asia">
                <span class="ranking-label">QS Asia</span>
                <span class="ranking-value">#${uni.rankings.qsAsia}</span>
            </div>
        `;
    }
    
    if (uni.rankings.national) {
        html += `
            <div class="ranking-badge national">
                <span class="ranking-label">🇰🇿 Национальный</span>
                <span class="ranking-value">#${uni.rankings.national}</span>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// Рендер требований
function renderRequirements(uni) {
    const container = document.getElementById('uni-requirements');
    const req = uni.requirements;
    let html = '';
    
    if (req.ielts) {
        html += `
            <div class="req-card">
                <div class="req-icon"><i class="fas fa-language"></i></div>
                <div class="req-info">
                    <span class="req-name">IELTS</span>
                    <span class="req-value">от ${req.ielts.min}</span>
                    <span class="req-grant">грант: ${req.ielts.grant}+</span>
                </div>
            </div>
        `;
    }
    
    if (req.toefl) {
        html += `
            <div class="req-card">
                <div class="req-icon"><i class="fas fa-language"></i></div>
                <div class="req-info">
                    <span class="req-name">TOEFL</span>
                    <span class="req-value">от ${req.toefl.min}</span>
                    <span class="req-grant">грант: ${req.toefl.grant}+</span>
                </div>
            </div>
        `;
    }
    
    if (req.sat) {
        html += `
            <div class="req-card">
                <div class="req-icon"><i class="fas fa-file-alt"></i></div>
                <div class="req-info">
                    <span class="req-name">SAT</span>
                    <span class="req-value">от ${req.sat.min}</span>
                    <span class="req-grant">грант: ${req.sat.grant}+</span>
                </div>
            </div>
        `;
    }
    
    if (req.ent) {
        html += `
            <div class="req-card">
                <div class="req-icon"><i class="fas fa-graduation-cap"></i></div>
                <div class="req-info">
                    <span class="req-name">ЕНТ</span>
                    <span class="req-value">от ${req.ent.min}</span>
                    <span class="req-grant">грант: ${req.ent.grant}+</span>
                </div>
            </div>
        `;
    } else if (!req.entRequired) {
        html += `
            <div class="req-card highlight">
                <div class="req-icon"><i class="fas fa-check-circle"></i></div>
                <div class="req-info">
                    <span class="req-name">ЕНТ</span>
                    <span class="req-value">Не требуется</span>
                </div>
            </div>
        `;
    }
    
    if (req.gpa) {
        html += `
            <div class="req-card">
                <div class="req-icon"><i class="fas fa-chart-line"></i></div>
                <div class="req-info">
                    <span class="req-name">GPA</span>
                    <span class="req-value">от ${req.gpa.min}</span>
                    ${req.gpa.grant ? `<span class="req-grant">грант: ${req.gpa.grant}+</span>` : ''}
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
    
    // Примечание о ЕНТ
    if (req.entNote) {
        document.getElementById('uni-ent-note').textContent = req.entNote;
    }
}

// Рендер сильных сторон
function renderStrengths(uni) {
    const container = document.getElementById('uni-strengths');
    container.innerHTML = uni.strengths.map(s => `
        <li><i class="fas fa-check"></i> ${s}</li>
    `).join('');
}

// Рендер факультетов
function renderFaculties(uni) {
    const container = document.getElementById('uni-faculties');
    let html = '';
    
    for (const [name, data] of Object.entries(uni.faculties)) {
        html += `
            <div class="faculty-card">
                <h4>${name}</h4>
                <ul>
                    ${data.programs.map(p => `<li>${p}</li>`).join('')}
                </ul>
                ${data.entThreshold ? `
                    <div class="faculty-ent">
                        <span>ЕНТ: ${data.entThreshold.min}+</span>
                        <span>Грант: ${data.entThreshold.grant}+</span>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// Рендер программ по степеням
function renderPrograms(uni) {
    const programs = uni.programs;
    
    // Бакалавриат
    const bachelorContainer = document.getElementById('tab-bachelor');
    if (programs.bachelor && programs.bachelor.length > 0) {
        bachelorContainer.innerHTML = `
            <div class="programs-list">
                ${programs.bachelor.map(p => `<span class="program-tag">${p}</span>`).join('')}
            </div>
        `;
    } else {
        bachelorContainer.innerHTML = '<p class="no-data">Программы не указаны</p>';
    }
    
    // Магистратура
    const masterContainer = document.getElementById('tab-master');
    if (programs.master && programs.master.length > 0) {
        masterContainer.innerHTML = `
            <div class="programs-list">
                ${programs.master.map(p => `<span class="program-tag">${p}</span>`).join('')}
            </div>
        `;
    } else {
        masterContainer.innerHTML = '<p class="no-data">Программы не указаны</p>';
    }
    
    // Докторантура
    const docContainer = document.getElementById('tab-doctorate');
    if (programs.doctorate && programs.doctorate.length > 0) {
        docContainer.innerHTML = `
            <div class="programs-list">
                ${programs.doctorate.map(p => `<span class="program-tag">${p}</span>`).join('')}
            </div>
        `;
    } else {
        docContainer.innerHTML = '<p class="no-data">Программы не указаны</p>';
    }
}

// Рендер баллов ЕНТ
function renderENTScores(uni) {
    const container = document.getElementById('uni-ent-scores');
    const section = document.getElementById('ent-section');
    
    if (!uni.entScores || Object.keys(uni.entScores).length === 0) {
        if (!uni.requirements.entRequired) {
            section.innerHTML = `
                <h2><i class="fas fa-chart-line"></i> Проходные баллы ЕНТ</h2>
                <div class="ent-not-required-full">
                    <i class="fas fa-info-circle"></i>
                    <p>${uni.requirements.entNote || 'ЕНТ не требуется для поступления'}</p>
                </div>
            `;
        } else {
            section.style.display = 'none';
        }
        return;
    }
    
    let html = `
        <div class="ent-table">
            <div class="ent-table-header">
                <span>Программа</span>
                <span>Порог</span>
                <span>Грант</span>
            </div>
    `;
    
    for (const [program, data] of Object.entries(uni.entScores)) {
        html += `
            <div class="ent-table-row">
                <span class="program-name">${program}</span>
                <span class="threshold">${data.threshold}</span>
                <span class="grant">${data.grant}</span>
            </div>
        `;
    }
    
    html += '</div>';
    container.innerHTML = html;
}

// Рендер стипендий
function renderScholarships(uni) {
    const container = document.getElementById('uni-scholarships');
    const scholarships = uni.scholarships;
    
    let html = '';
    
    if (scholarships.types && scholarships.types.length > 0) {
        html += `
            <div class="scholarship-block">
                <h4><i class="fas fa-coins"></i> Стипендии и гранты</h4>
                <ul>
                    ${scholarships.types.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (scholarships.international && scholarships.international.length > 0) {
        html += `
            <div class="scholarship-block">
                <h4><i class="fas fa-plane"></i> Международные программы</h4>
                <ul>
                    ${scholarships.international.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// Рендер аккредитаций
function renderAccreditations(uni) {
    const container = document.getElementById('uni-accreditations');
    container.innerHTML = uni.accreditations.map(a => `
        <li><i class="fas fa-award"></i> ${a}</li>
    `).join('');
}

// Кнопка избранного
function initFavoriteButton(uni) {
    const favBtn = document.getElementById('favorite-toggle');
    if (!favBtn || typeof bindFavoriteButton !== 'function') return;
    favBtn.dataset.id = uni.id;
    bindFavoriteButton(favBtn, uni.id, {
        labels: { add: 'В избранное', remove: 'В избранном' }
    });
}

// Инициализация табов
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем активный класс со всех
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущему
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', loadUniversityData);
