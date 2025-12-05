/**
 * AI University Searcher
 * Использует данные из universities-data.js
 */

// Получаем элементы формы
const form = document.getElementById('ai-search-form');

// SAT элементы
const hasSatSelect = document.getElementById('has-sat');
const satScoreGroup = document.getElementById('sat-score-group');
const satScoreInput = document.getElementById('sat');

// IELTS элементы
const hasIeltsSelect = document.getElementById('has-ielts');
const ieltsScoreGroup = document.getElementById('ielts-score-group');
const ieltsScoreInput = document.getElementById('ielts');

// TOEFL элементы
const hasToeflSelect = document.getElementById('has-toefl');
const toeflScoreGroup = document.getElementById('toefl-score-group');
const toeflScoreInput = document.getElementById('toefl');

// ЕНТ элементы
const hasEntSelect = document.getElementById('has-ent');
const entScoreGroup = document.getElementById('ent-score-group');
const entScoreInput = document.getElementById('ent');

// Универсальная функция для обработки переключения видимости секций
function setupOptionalField(selectElement, scoreGroup, scoreInput) {
    if (!selectElement || !scoreGroup || !scoreInput) return;
    
    selectElement.addEventListener('change', function() {
        if (this.value === 'yes') {
            scoreGroup.classList.add('visible');
            scoreInput.required = true;
        } else {
            scoreGroup.classList.remove('visible');
            scoreInput.required = false;
            scoreInput.value = '';
        }
    });
}

// Настраиваем обработчики для всех опциональных полей
setupOptionalField(hasSatSelect, satScoreGroup, satScoreInput);
setupOptionalField(hasIeltsSelect, ieltsScoreGroup, ieltsScoreInput);
setupOptionalField(hasToeflSelect, toeflScoreGroup, toeflScoreInput);
setupOptionalField(hasEntSelect, entScoreGroup, entScoreInput);

// Обработчик отправки формы
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Собираем данные формы
    const formData = {
        // IELTS
        hasIelts: document.getElementById('has-ielts')?.value || 'no',
        ielts: parseFloat(document.getElementById('ielts')?.value || 0),
        
        // TOEFL
        hasToefl: document.getElementById('has-toefl')?.value || 'no',
        toefl: parseInt(document.getElementById('toefl')?.value || 0),
        
        // SAT
        hasSat: document.getElementById('has-sat')?.value || 'no',
        sat: parseInt(document.getElementById('sat')?.value || 0),
        
        // ЕНТ
        hasEnt: document.getElementById('has-ent')?.value || 'no',
        ent: parseInt(document.getElementById('ent')?.value || 0),
        
        // GPA
        gpa: parseFloat(document.getElementById('gpa')?.value || 0)
    };

    // Фильтруем университеты с использованием новой функции
    const matchingUniversities = filterUniversities(formData);

    // Сохраняем результаты в localStorage
    localStorage.setItem('searchResults', JSON.stringify({
        criteria: formData,
        universities: matchingUniversities
    }));

    // Показываем результаты на этой же странице
    showResults(matchingUniversities, formData);
});

// Функция отображения результатов
function showResults(universities, criteria) {
    // Скрываем форму
    const formContainer = document.querySelector('.ai-form');
    formContainer.style.display = 'none';
    
    // Создаём контейнер результатов
    let resultsContainer = document.getElementById('results-container');
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'results-container';
        resultsContainer.className = 'results-container';
        document.querySelector('.ai-searcher-container').appendChild(resultsContainer);
    }
    
    // Очищаем предыдущие результаты
    resultsContainer.innerHTML = '';
    
    // Заголовок
    const header = document.createElement('div');
    header.className = 'results-header';
    header.innerHTML = `
        <h2><i class="fas fa-university"></i> Найдено университетов: ${universities.length}</h2>
        <button class="back-btn" onclick="resetSearch()">
            <i class="fas fa-arrow-left"></i> Новый поиск
        </button>
    `;
    resultsContainer.appendChild(header);
    
    // Если нет результатов
    if (universities.length === 0) {
        resultsContainer.innerHTML += `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Университеты не найдены</h3>
                <p>Попробуйте изменить критерии поиска</p>
                <button class="submit-btn" onclick="resetSearch()">
                    <i class="fas fa-redo"></i> Изменить критерии
                </button>
            </div>
        `;
        return;
    }
    
    // Сортируем по рейтингу
    universities.sort((a, b) => {
        const rankA = a.rankings.national || 999;
        const rankB = b.rankings.national || 999;
        return rankA - rankB;
    });
    
    // Карточки университетов
    const grid = document.createElement('div');
    grid.className = 'results-grid';
    
    universities.forEach(uni => {
        const card = createUniversityCard(uni, criteria);
        grid.appendChild(card);
    });
    
    resultsContainer.appendChild(grid);
}

// Создание карточки университета
function createUniversityCard(uni, criteria) {
    const card = document.createElement('div');
    card.className = 'university-card';
    
    // Определяем, есть ли шанс на грант
    let grantChance = '';
    if (criteria.hasEnt === 'yes' && uni.requirements.ent) {
        if (criteria.ent >= uni.requirements.ent.grant) {
            grantChance = '<span class="grant-badge grant-high"><i class="fas fa-star"></i> Высокий шанс на грант</span>';
        } else if (criteria.ent >= uni.requirements.ent.min + 20) {
            grantChance = '<span class="grant-badge grant-medium"><i class="fas fa-star-half-alt"></i> Средний шанс на грант</span>';
        }
    }
    
    // Рейтинг
    let rankingBadge = '';
    if (uni.rankings.qsWorld) {
        rankingBadge = `<span class="ranking-badge">QS: #${uni.rankings.qsWorld}</span>`;
    } else if (uni.rankings.qsAsia) {
        rankingBadge = `<span class="ranking-badge">QS Asia: #${uni.rankings.qsAsia}</span>`;
    }
    
    // Требования
    const reqHtml = [];
    if (uni.requirements.ielts) {
        const status = criteria.hasIelts === 'yes' && criteria.ielts >= uni.requirements.ielts.min ? 'met' : 'unmet';
        reqHtml.push(`<span class="req ${status}">IELTS: ${uni.requirements.ielts.min}+</span>`);
    }
    if (uni.requirements.ent) {
        const status = criteria.hasEnt === 'yes' && criteria.ent >= uni.requirements.ent.min ? 'met' : 'unmet';
        reqHtml.push(`<span class="req ${status}">ЕНТ: ${uni.requirements.ent.min}+</span>`);
    } else if (!uni.requirements.entRequired) {
        reqHtml.push(`<span class="req special">ЕНТ не требуется</span>`);
    }
    if (uni.requirements.sat) {
        const status = criteria.hasSat === 'yes' && criteria.sat >= uni.requirements.sat.min ? 'met' : 'unmet';
        reqHtml.push(`<span class="req ${status}">SAT: ${uni.requirements.sat.min}+</span>`);
    }
    
    card.innerHTML = `
        <div class="card-header">
            <h3>${uni.shortName}</h3>
            ${rankingBadge}
        </div>
        <div class="card-body">
            <p class="uni-name">${uni.nameRu}</p>
            <p class="uni-location"><i class="fas fa-map-marker-alt"></i> ${uni.info.location.city}</p>
            ${grantChance}
            <div class="requirements">
                ${reqHtml.join('')}
            </div>
            <div class="strengths">
                ${uni.strengths.slice(0, 3).map(s => `<span class="strength">${s}</span>`).join('')}
            </div>
        </div>
        <div class="card-footer">
            <a href="university.html?id=${uni.id}" class="btn-details">
                <i class="fas fa-info-circle"></i> Подробнее
            </a>
        </div>
    `;
    
    return card;
}

// Сброс поиска
function resetSearch() {
    const formContainer = document.querySelector('.ai-form');
    formContainer.style.display = 'flex';
    
    const resultsContainer = document.getElementById('results-container');
    if (resultsContainer) {
        resultsContainer.remove();
    }
}
