// ==================== ИНИЦИАЛИЗАЦИЯ ====================

// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initUI();
    hideLoader();
});

// Глобальные переменные
let map;
let regionsLayer;
let universitiesLayer;
let selectedRegion = null;
let selectedUniversity = null;

// DOM элементы
const infoPanel = document.getElementById('info-panel');
const panelContent = document.getElementById('panel-content');
const loader = document.getElementById('loader');

// ==================== ИНИЦИАЛИЗАЦИЯ КАРТЫ ====================

function initMap() {
    // Создаём карту
    map = L.map('map', {
        center: kazakhstanCenter,
        zoom: 5,
        minZoom: 4,
        maxZoom: 14,
        maxBounds: [
            [38, 44],
            [58, 90]
        ],
        maxBoundsViscosity: 1.0,
        zoomControl: false
    });

    // Добавляем тайловый слой
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Создаём слои для маркеров
    regionsLayer = L.layerGroup().addTo(map);
    universitiesLayer = L.layerGroup().addTo(map);

    // Показываем маркеры регионов
    showRegionMarkers();

    // Перерисовываем маркеры при смене зума, чтобы уменьшать их на крупных планах
    map.on('zoomend', () => showRegionMarkers());

    // Обновляем статистику
    updateStats();
}

// ==================== ИНИЦИАЛИЗАЦИЯ UI ====================

function initUI() {
    // Кнопки управления картой
    document.getElementById('zoom-in').addEventListener('click', () => map.zoomIn());
    document.getElementById('zoom-out').addEventListener('click', () => map.zoomOut());
    document.getElementById('reset-view').addEventListener('click', resetView);

    // Панель на мобильных
    const panelToggle = document.getElementById('panel-toggle');
    panelToggle.addEventListener('click', () => {
        infoPanel.classList.toggle('expanded');
    });

    // Подсказка onboarding
    const closeOnboarding = document.getElementById('close-onboarding');
    const onboarding = document.getElementById('onboarding');
    closeOnboarding.addEventListener('click', () => {
        onboarding.classList.add('hidden');
        localStorage.setItem('mapOnboardingShown', 'true');
    });

    // Проверяем, показывали ли уже подсказку
    if (localStorage.getItem('mapOnboardingShown') === 'true') {
        onboarding.classList.add('hidden');
    }

    // Модальное окно помощи
    const helpBtn = document.getElementById('help-btn');
    const helpModal = document.getElementById('help-modal');
    const helpClose = document.getElementById('help-close');

    helpBtn.addEventListener('click', () => {
        helpModal.classList.add('active');
    });

    helpClose.addEventListener('click', () => {
        helpModal.classList.remove('active');
    });

    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            helpModal.classList.remove('active');
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            helpModal.classList.remove('active');
        }
    });
}

// ==================== ЗАГРУЗЧИК ====================

function hideLoader() {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
}

// ==================== МАРКЕРЫ РЕГИОНОВ ====================

function createRegionIcon(count, isActive = false) {
    const base = Math.max(40, Math.min(55, 35 + count * 2));
    const zoom = map?.getZoom ? map.getZoom() : 5;
    // После z>8 постепенно уменьшаем маркер, чтобы не мешал при большом приближении
    const shrinkFactor = Math.max(0.55, 1 - Math.max(0, zoom - 8) * 0.12);
    const size = Math.round(base * shrinkFactor);
    return L.divIcon({
        className: 'region-marker' + (isActive ? ' active' : ''),
        html: `<span>${count}</span>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2]
    });
}

function showRegionMarkers() {
    regionsLayer.clearLayers();

    kazakhstanRegions.forEach(region => {
        const universities = universitiesByRegion[region.id] || [];
        if (universities.length === 0) return;

        const marker = L.marker(region.center, {
            icon: createRegionIcon(universities.length, selectedRegion === region.id)
        });

        marker.on('click', () => {
            selectRegion(region.id);
        });

        marker.bindTooltip(region.name, {
            permanent: false,
            direction: 'top',
            className: 'region-tooltip',
            offset: [0, -10]
        });

        regionsLayer.addLayer(marker);
    });
}

// ==================== ВЫБОР РЕГИОНА ====================

function selectRegion(regionId) {
    selectedRegion = regionId;
    selectedUniversity = null;

    // Скрываем onboarding
    document.getElementById('onboarding').classList.add('hidden');
    localStorage.setItem('mapOnboardingShown', 'true');

    // Обновляем маркеры
    showRegionMarkers();
    showUniversityMarkers(regionId);

    // Показываем информацию
    showRegionInfo(regionId);

    // Раскрываем панель на мобильных
    infoPanel.classList.add('expanded');

    // Центрируем карту
    const region = kazakhstanRegions.find(r => r.id === regionId);
    if (region) {
        map.flyTo(region.center, 8, { duration: 0.8 });
    }
}

// ==================== МАРКЕРЫ УНИВЕРСИТЕТОВ ====================

function createUniversityIcon(isActive = false) {
    return L.divIcon({
        className: 'uni-marker' + (isActive ? ' active' : ''),
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
}

function showUniversityMarkers(regionId) {
    universitiesLayer.clearLayers();

    const universities = universitiesByRegion[regionId] || [];

    universities.forEach(uni => {
        const marker = L.marker(uni.coords, {
            icon: createUniversityIcon(selectedUniversity === uni.id)
        });

        marker.on('click', () => {
            selectUniversity(uni.id, regionId);
        });

        marker.bindTooltip(uni.shortName, {
            permanent: false,
            direction: 'top',
            className: 'region-tooltip',
            offset: [0, -5]
        });

        universitiesLayer.addLayer(marker);
    });
}

// ==================== ВЫБОР УНИВЕРСИТЕТА ====================

function selectUniversity(uniId, regionId) {
    selectedUniversity = uniId;

    showUniversityMarkers(regionId);
    showUniversityDetail(uniId, regionId);

    const uni = universitiesByRegion[regionId]?.find(u => u.id === uniId);
    if (uni) {
        map.flyTo(uni.coords, 12, { duration: 0.5 });
    }
}

// ==================== ИНФОРМАЦИЯ О РЕГИОНЕ ====================

function showRegionInfo(regionId) {
    const region = kazakhstanRegions.find(r => r.id === regionId);
    const universities = universitiesByRegion[regionId] || [];

    if (!region || universities.length === 0) {
        showPlaceholder();
        return;
    }

    // Сортируем по национальному рейтингу
    const sortedUnis = [...universities].sort((a, b) => 
        (a.ranking?.national || 999) - (b.ranking?.national || 999)
    );

    const universitiesList = sortedUnis.map(uni => {
        const typeLabels = {
            'national': 'Национальный',
            'research': 'Исследовательский',
            'technical': 'Технический',
            'medical': 'Медицинский',
            'business': 'Бизнес',
            'it': 'IT',
            'pedagogical': 'Педагогический',
            'regional': 'Региональный',
            'international': 'Международный',
            'oil-gas': 'Нефтегаз',
            'agricultural': 'Аграрный',
            'law': 'Юридический',
            'arts': 'Искусство',
            'private': 'Частный'
        };
        
        return `
            <div class="uni-item ${selectedUniversity === uni.id ? 'active' : ''}" data-uni-id="${uni.id}">
                <h4>${uni.name}</h4>
                <div class="city">
                    <i class="fas fa-map-marker-alt"></i>
                    ${uni.city}
                </div>
                <span class="uni-type">${typeLabels[uni.type] || uni.type}</span>
            </div>
        `;
    }).join('');

    panelContent.innerHTML = `
        <div class="region-header">
            <h2><i class="fas fa-map-marker-alt"></i> ${region.name}</h2>
            <div class="count">Найдено: ${universities.length} ${getUniversityWord(universities.length)}</div>
        </div>
        <div class="universities-list">
            ${universitiesList}
        </div>
    `;

    // Обработчики кликов
    document.querySelectorAll('.uni-item').forEach(item => {
        item.addEventListener('click', () => {
            const uniId = item.dataset.uniId;
            selectUniversity(uniId, regionId);
        });
    });
}

// ==================== ДЕТАЛЬНАЯ КАРТОЧКА ====================

function showUniversityDetail(uniId, regionId) {
    const uni = universitiesByRegion[regionId]?.find(u => u.id === uniId);
    if (!uni) return;

    const region = kazakhstanRegions.find(r => r.id === regionId);

    // Требования
    const requirementsHTML = Object.entries(uni.requirements)
        .filter(([key, value]) => value !== null && value !== undefined)
        .map(([key, value]) => {
            const labels = {
                ent: 'ЕНТ',
                gpa: 'GPA',
                creative: 'Творч. экзамен'
            };
            const displayValue = value === true ? '✓' : value;
            return `
                <div class="req-item">
                    <div class="label">${labels[key] || key}</div>
                    <div class="value">${displayValue}${key !== 'creative' && key !== 'gpa' ? '+' : ''}</div>
                </div>
            `;
        }).join('');

    // Программы
    const programsHTML = uni.programs.map(p => 
        `<span class="program-tag">${p}</span>`
    ).join('');

    // Рейтинги
    const rankingsHTML = `
        <div class="ranking-item">
            <span class="name">QS Asia 2024</span>
            <span class="rank">${uni.ranking.qsAsia ? `#${uni.ranking.qsAsia}` : '—'}</span>
        </div>
        <div class="ranking-item">
            <span class="name">QS World 2024</span>
            <span class="rank">${uni.ranking.qsWorld ? `#${uni.ranking.qsWorld}` : '—'}</span>
        </div>
        <div class="ranking-item">
            <span class="name">H-Index (kz.h-index.com)</span>
            <span class="rank">${uni.ranking.hIndex ? `#${uni.ranking.hIndex}` : '—'}</span>
        </div>
        <div class="ranking-item">
            <span class="name">Нац. рейтинг</span>
            <span class="rank">#${uni.ranking.national}</span>
        </div>
        <div class="ranking-item">
            <span class="name">Гранты/Стипендии</span>
            <span class="rank">${uni.ranking.scholarships}%</span>
        </div>
    `;

    // Контакты
    const contactsHTML = `
        <div class="contact-item">
            <i class="fas fa-globe"></i>
            <a href="${uni.contacts.website}" target="_blank" rel="noopener">${uni.contacts.website.replace('https://', '')}</a>
        </div>
        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:${uni.contacts.phone.replace(/\s/g, '')}">${uni.contacts.phone}</a>
        </div>
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:${uni.contacts.email}">${uni.contacts.email}</a>
        </div>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>${uni.contacts.address}, ${uni.city}</span>
        </div>
    `;
    
    // Кнопка специальностей
    const specialtiesBtn = `
        <a href="https://eduser.app/specialities/" target="_blank" rel="noopener" class="specialties-btn">
            <i class="fas fa-graduation-cap"></i>
            Смотреть все специальности на eduser.app
        </a>
    `;

    panelContent.innerHTML = `
        <div class="region-header clickable" id="back-to-region">
            <h2><i class="fas fa-arrow-left"></i> ${region.name}</h2>
            <div class="count">← Назад к списку</div>
        </div>
        <div class="uni-detail-card">
            <div class="card-header">
                <button class="close-detail" id="close-detail" title="Закрыть">
                    <i class="fas fa-times"></i>
                </button>
                <h3>${uni.name}</h3>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${uni.city}
                </div>
            </div>
            <div class="card-body">
                <p class="card-description">${uni.description}</p>

                <div class="detail-section">
                    <h5><i class="fas fa-clipboard-check"></i> Требования</h5>
                    <div class="requirements-grid">
                        ${requirementsHTML}
                    </div>
                </div>

                <div class="detail-section">
                    <h5><i class="fas fa-graduation-cap"></i> Программы</h5>
                    <div class="programs-list">
                        ${programsHTML}
                    </div>
                </div>

                <div class="detail-section">
                    <h5><i class="fas fa-trophy"></i> Рейтинги</h5>
                    <div class="rankings-list">
                        ${rankingsHTML}
                    </div>
                </div>

                <div class="detail-section">
                    <h5><i class="fas fa-address-book"></i> Контакты</h5>
                    <div class="contacts-list">
                        ${contactsHTML}
                    </div>
                </div>

                ${specialtiesBtn}
            </div>
        </div>
    `;

    // Обработчики
    const backToRegion = () => {
        selectedUniversity = null;
        showUniversityMarkers(regionId);
        showRegionInfo(regionId);
        
        const region = kazakhstanRegions.find(r => r.id === regionId);
        if (region) {
            map.flyTo(region.center, 8, { duration: 0.5 });
        }
    };

    document.getElementById('back-to-region').addEventListener('click', backToRegion);
    document.getElementById('close-detail').addEventListener('click', backToRegion);
}

// ==================== PLACEHOLDER ====================

function showPlaceholder() {
    const totalRegions = kazakhstanRegions.filter(r => 
        (universitiesByRegion[r.id] || []).length > 0
    ).length;
    
    const totalUnis = Object.values(universitiesByRegion)
        .reduce((sum, unis) => sum + unis.length, 0);

    panelContent.innerHTML = `
        <div class="panel-placeholder">
            <div class="placeholder-icon">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Выберите область</h3>
            <p>Нажмите на маркер на карте, чтобы увидеть список университетов</p>
            <div class="placeholder-stats">
                <div class="stat-item">
                    <span class="stat-number">${totalRegions}</span>
                    <span class="stat-label">Областей</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${totalUnis}</span>
                    <span class="stat-label">Университетов</span>
                </div>
            </div>
        </div>
    `;
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

function updateStats() {
    const totalRegions = kazakhstanRegions.filter(r => 
        (universitiesByRegion[r.id] || []).length > 0
    ).length;
    
    const totalUnis = Object.values(universitiesByRegion)
        .reduce((sum, unis) => sum + unis.length, 0);

    const regionsEl = document.getElementById('total-regions');
    const unisEl = document.getElementById('total-unis');
    
    if (regionsEl) regionsEl.textContent = totalRegions;
    if (unisEl) unisEl.textContent = totalUnis;
}

function resetView() {
    selectedRegion = null;
    selectedUniversity = null;
    universitiesLayer.clearLayers();
    showRegionMarkers();
    showPlaceholder();
    map.flyTo(kazakhstanCenter, 5, { duration: 0.8 });
}

function getUniversityWord(count) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'университетов';
    }
    if (lastDigit === 1) {
        return 'университет';
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'университета';
    }
    return 'университетов';
}


