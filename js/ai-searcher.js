/**
 * AI University Searcher
 * Использует данные из generalDB.js
 */

// Комбинации профильных предметов ЕНТ и соответствующие направления
const SUBJECT_COMBOS = {
    'math-physics': {
        name: 'Математика + Физика',
        directions: ['engineering', 'energy', 'math-physics', 'petroleum', 'mining', 'architecture']
    },
    'math-informatics': {
        name: 'Математика + Информатика',
        directions: ['it', 'software', 'cybersecurity', 'data-science']
    },
    'biology-chemistry': {
        name: 'Биология + Химия',
        directions: ['medicine', 'chemistry-biology']
    },
    'biology-geography': {
        name: 'Биология + География',
        directions: ['agriculture', 'ecology', 'tourism']
    },
    'chemistry-physics': {
        name: 'Химия + Физика',
        directions: ['chemistry-biology', 'petroleum', 'engineering']
    },
    'history-geography': {
        name: 'История Казахстана + География',
        directions: ['tourism', 'international', 'pedagogy', 'ecology']
    },
    'history-world': {
        name: 'История Казахстана + Всемирная история',
        directions: ['history', 'international', 'journalism', 'pedagogy']
    },
    'history-law': {
        name: 'История Казахстана + Основы права',
        directions: ['law', 'international']
    },
    'history-literature': {
        name: 'История Казахстана + Литература',
        directions: ['languages', 'journalism', 'pedagogy', 'history']
    },
    'english-history': {
        name: 'Иностранный язык + История',
        directions: ['languages', 'international', 'tourism', 'journalism']
    },
    'language-literature': {
        name: 'Язык + Литература',
        directions: ['languages', 'pedagogy', 'journalism']
    },
    'math-geography': {
        name: 'Математика + География',
        directions: ['economics', 'finance', 'management', 'logistics', 'tourism']
    },
    'creative-history': {
        name: 'Творческий экзамен + История',
        directions: ['design', 'architecture', 'journalism']
    },
    'creative-math': {
        name: 'Творческий экзамен + Математика',
        directions: ['design', 'architecture']
    }
};

// Получаем элементы формы
const form = document.getElementById('ai-search-form');

// ЕНТ элементы
const hasEntSelect = document.getElementById('has-ent');
const entDetailsGroup = document.getElementById('ent-details-group');
const entScoreInput = document.getElementById('ent');
const entComboSelect = document.getElementById('ent-combo');

// Универсальная функция для обработки переключения видимости секций
function setupOptionalField(selectElement, scoreGroup, inputs) {
    if (!selectElement || !scoreGroup) return;
    
    selectElement.addEventListener('change', function() {
        if (this.value === 'yes') {
            scoreGroup.classList.add('visible');
            if (inputs) {
                inputs.forEach(input => {
                    if (input) input.required = true;
                });
            }
        } else {
            scoreGroup.classList.remove('visible');
            if (inputs) {
                inputs.forEach(input => {
                    if (input) {
                        input.required = false;
                        input.value = '';
                    }
                });
            }
        }
    });
}

// Настраиваем обработчики
setupOptionalField(hasEntSelect, entDetailsGroup, [entScoreInput, entComboSelect]);

// Обработчик отправки формы
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Собираем данные формы
    const formData = {
        // ЕНТ
        hasEnt: document.getElementById('has-ent')?.value || 'no',
        ent: parseInt(document.getElementById('ent')?.value || 0),
        entCombo: document.getElementById('ent-combo')?.value || '',
        
        // GPA
        gpa: parseFloat(document.getElementById('gpa')?.value || 0)
    };

    // Фильтруем университеты
    const matchingUniversities = filterUniversitiesByCombo(formData);

    // Сохраняем результаты в localStorage
    localStorage.setItem('searchResults', JSON.stringify({
        criteria: formData,
        universities: matchingUniversities
    }));

    // Показываем результаты на этой же странице
    showResults(matchingUniversities, formData);
});

// Фильтрация университетов с учётом комбинации предметов
function filterUniversitiesByCombo(criteria) {
    const universities = Object.values(UNIVERSITIES);
    const combo = criteria.entCombo ? SUBJECT_COMBOS[criteria.entCombo] : null;
    const matchedDirections = combo ? combo.directions : [];
    
    return universities.filter(uni => {
        const req = uni.requirements;
        
        // Проверка ЕНТ
        if (criteria.hasEnt === 'yes' && req.ent) {
            if (criteria.ent < req.ent.min) return false;
        }
        
        // Проверка GPA
        if (req.gpa && criteria.gpa < req.gpa.min) {
            return false;
        }
        
        // Если выбрана комбинация предметов, проверяем есть ли подходящие направления
        if (criteria.entCombo && matchedDirections.length > 0 && uni.directions) {
            const hasMatchingDirection = uni.directions.some(dir => matchedDirections.includes(dir));
            if (!hasMatchingDirection) return false;
        }
        
        return true;
    }).map(uni => {
        // Добавляем информацию о подходящих факультетах
        const matchingPrograms = getMatchingPrograms(uni, criteria.entCombo, criteria.ent);
        return {
            ...uni,
            matchingPrograms
        };
    });
}

// Получение подходящих программ по комбинации предметов и баллу
function getMatchingPrograms(uni, comboKey, score) {
    if (!comboKey || !uni.entScores) return [];
    
    const combo = SUBJECT_COMBOS[comboKey];
    if (!combo) return [];
    
    const matchedDirections = combo.directions;
    const programs = [];
    
    for (const [program, data] of Object.entries(uni.entScores)) {
        // Проверяем, подходит ли программа по направлению
        const programLower = program.toLowerCase();
        const isMatching = matchedDirections.some(dir => {
            const dirInfo = typeof DIRECTIONS !== 'undefined' ? DIRECTIONS[dir] : null;
            if (!dirInfo) return false;
            return dirInfo.keywords.some(kw => programLower.includes(kw.toLowerCase()));
        });
        
        if (isMatching) {
            const status = score >= data.grant ? 'grant' : (score >= data.threshold ? 'paid' : 'low');
            programs.push({
                name: program,
                threshold: data.threshold,
                grant: data.grant,
                status
            });
        }
    }
    
    return programs.sort((a, b) => a.threshold - b.threshold);
}

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
    
    // Информация о выбранной комбинации
    const combo = criteria.entCombo ? SUBJECT_COMBOS[criteria.entCombo] : null;
    const comboInfo = combo ? `<span class="subject-badge"><i class="fas fa-book"></i> ${combo.name}</span>` : '';
    
    // Заголовок
    const header = document.createElement('div');
    header.className = 'results-header';
    header.innerHTML = `
        <h2><i class="fas fa-university"></i> Найдено университетов: ${universities.length}</h2>
        ${comboInfo}
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
        const rankA = a.rankings?.national || 999;
        const rankB = b.rankings?.national || 999;
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
    if (criteria.hasEnt === 'yes' && uni.requirements?.ent) {
        const entReq = uni.requirements.ent;
        const grantScore = typeof entReq === 'object' ? entReq.grant : entReq + 15;
        const minScore = typeof entReq === 'object' ? entReq.min : entReq;
        
        if (criteria.ent >= grantScore) {
            grantChance = '<span class="grant-badge grant-high"><i class="fas fa-star"></i> Высокий шанс на грант</span>';
        } else if (criteria.ent >= minScore + 20) {
            grantChance = '<span class="grant-badge grant-medium"><i class="fas fa-star-half-alt"></i> Средний шанс на грант</span>';
        }
    }
    
    // Рейтинг
    let rankingBadge = '';
    if (uni.rankings?.qsWorld) {
        rankingBadge = `<span class="ranking-badge">QS: #${uni.rankings.qsWorld}</span>`;
    } else if (uni.rankings?.qsAsia) {
        rankingBadge = `<span class="ranking-badge">QS Asia: #${uni.rankings.qsAsia}</span>`;
    }
    
    // Требования
    const reqHtml = [];
    if (uni.requirements?.ent) {
        const entReq = uni.requirements.ent;
        const minScore = typeof entReq === 'object' ? entReq.min : entReq;
        const status = criteria.hasEnt === 'yes' && criteria.ent >= minScore ? 'met' : 'unmet';
        reqHtml.push(`<span class="req ${status}">ЕНТ: ${minScore}+</span>`);
    } else if (uni.requirements && !uni.requirements.entRequired) {
        reqHtml.push(`<span class="req special">ЕНТ не требуется</span>`);
    }
    
    // Подходящие программы по комбинации предметов
    let programsHtml = '';
    if (uni.matchingPrograms && uni.matchingPrograms.length > 0) {
        const programsList = uni.matchingPrograms.slice(0, 4).map(p => {
            let statusClass = '';
            let statusIcon = '';
            if (p.status === 'grant') {
                statusClass = 'program-grant';
                statusIcon = '<i class="fas fa-star"></i>';
            } else if (p.status === 'paid') {
                statusClass = 'program-paid';
                statusIcon = '<i class="fas fa-check"></i>';
            } else {
                statusClass = 'program-low';
                statusIcon = '<i class="fas fa-times"></i>';
            }
            return `<span class="program-item ${statusClass}">${statusIcon} ${p.name} (${p.threshold}/${p.grant})</span>`;
        }).join('');
        
        programsHtml = `
            <div class="matching-programs">
                <h4><i class="fas fa-graduation-cap"></i> Доступные специальности:</h4>
                <div class="programs-list">${programsList}</div>
                ${uni.matchingPrograms.length > 4 ? `<span class="more-programs">+${uni.matchingPrograms.length - 4} ещё</span>` : ''}
            </div>
        `;
    }
    
    // Сильные стороны
    const strengths = uni.strengths || [];
    const strengthsHtml = strengths.length > 0 
        ? `<div class="strengths">${strengths.slice(0, 3).map(s => `<span class="strength">${s}</span>`).join('')}</div>`
        : '';
    
    // Аккредитации
    const accreditations = uni.accreditations || [];
    const accreditationsHtml = accreditations.length > 0
        ? `<div class="accreditations"><i class="fas fa-certificate"></i> ${accreditations.slice(0, 3).join(', ')}</div>`
        : '';
    
    const cityName = uni.info?.location?.city || uni.city || '';
    const uniName = uni.nameRu || uni.name || '';
    
    card.innerHTML = `
        <div class="card-header">
            <h3>${uni.shortName}</h3>
            ${rankingBadge}
        </div>
        <div class="card-body">
            <p class="uni-name">${uniName}</p>
            <p class="uni-location"><i class="fas fa-map-marker-alt"></i> ${cityName}</p>
            ${grantChance}
            <div class="requirements">
                ${reqHtml.join('')}
            </div>
            ${programsHtml}
            ${strengthsHtml}
            ${accreditationsHtml}
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
