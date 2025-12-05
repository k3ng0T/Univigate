/**
 * Сравнение университетов
 * Использует данные из universities-data.js
 */

// Заполнение списков выбора университетов
function populateUniversitySelects() {
    const select1 = document.getElementById('university1');
    const select2 = document.getElementById('university2');
    
    if (!select1 || !select2) return;
    
    const universities = Object.values(UNIVERSITIES).sort((a, b) => {
        return a.nameRu.localeCompare(b.nameRu, 'ru');
    });
    
    universities.forEach(uni => {
        const option1 = document.createElement('option');
        option1.value = uni.id;
        option1.textContent = `${uni.shortName} - ${uni.nameRu}`;
        select1.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = uni.id;
        option2.textContent = `${uni.shortName} - ${uni.nameRu}`;
        select2.appendChild(option2);
    });
}

// Заполнение списка направлений
function populateDirections() {
    const select = document.getElementById('direction-category');
    if (!select) return;
    
    for (const [key, value] of Object.entries(DIRECTIONS)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value.name;
        select.appendChild(option);
    }
}

// Функция для определения уникальных элементов
function findUniqueItems(arr1, arr2) {
    if (!arr1 || !arr2) return arr1 || [];
    const set2 = new Set(arr2.map(item => item.toLowerCase()));
    return arr1.filter(item => !set2.has(item.toLowerCase()));
}

// Рендер списка с подсветкой уникальных элементов
function renderListWithHighlight(items, uniqueItems, className = '') {
    const ul = document.createElement('ul');
    ul.className = `compare-list ${className}`;
    
    if (!items || items.length === 0) {
        const li = document.createElement('li');
        li.className = 'no-data';
        li.textContent = 'Нет данных';
        ul.appendChild(li);
        return ul;
    }
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        
        const isUnique = uniqueItems && uniqueItems.some(unique => 
            unique.toLowerCase() === item.toLowerCase()
        );
        
        if (isUnique) {
            li.classList.add('unique-item');
        }
        
        ul.appendChild(li);
    });
    
    return ul;
}

// Рендер секции пороговых баллов ЕНТ
function renderENTSection(uni, otherUni, direction, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const entData = getENTScoresForDirection(uni, direction);
    const otherEntData = getENTScoresForDirection(otherUni, direction);
    
    if (entData.notRequired || !uni.requirements.entRequired) {
        const div = document.createElement('div');
        div.className = 'ent-not-required';
        div.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <span>ЕНТ не требуется</span>
            <p class="ent-note">${uni.requirements.entNote || ''}</p>
        `;
        container.appendChild(div);
        return;
    }
    
    if (entData.noData || entData.scores.length === 0) {
        const div = document.createElement('div');
        div.className = 'ent-no-data';
        div.innerHTML = `
            <i class="fas fa-question-circle"></i>
            <span>Данные по ЕНТ не найдены для выбранного направления</span>
        `;
        container.appendChild(div);
        return;
    }
    
    const scoresDiv = document.createElement('div');
    scoresDiv.className = 'ent-scores';
    
    entData.scores.forEach(score => {
        const scoreItem = document.createElement('div');
        let comparisonClass = '';
        let comparison = '';
        
        if (!otherEntData.notRequired && !otherEntData.noData && otherEntData.scores) {
            const otherScore = otherEntData.scores.find(s => 
                s.program.toLowerCase() === score.program.toLowerCase()
            );
            if (otherScore) {
                if (score.grant < otherScore.grant) {
                    comparison = `<span class="score-better">(легче на ${otherScore.grant - score.grant} баллов)</span>`;
                    comparisonClass = 'better-score';
                } else if (score.grant > otherScore.grant) {
                    comparison = `<span class="score-worse">(сложнее на ${score.grant - otherScore.grant} баллов)</span>`;
                    comparisonClass = 'worse-score';
                }
            }
        }
        
        scoreItem.className = `ent-score-item ${comparisonClass}`;
        scoreItem.innerHTML = `
            <div class="score-program">${score.program}</div>
            <div class="score-details">
                <div class="score-threshold">
                    <span class="score-label">Порог:</span>
                    <span class="score-value">${score.threshold}</span>
                </div>
                <div class="score-grant">
                    <span class="score-label">Грант:</span>
                    <span class="score-value grant-value">${score.grant}</span>
                    ${comparison}
                </div>
            </div>
        `;
        scoresDiv.appendChild(scoreItem);
    });
    
    container.appendChild(scoresDiv);
}

// Рендер секции программ
function renderProgramsSection(uni, otherUni, direction, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const programs = findProgramsByDirection(uni, direction);
    const otherPrograms = findProgramsByDirection(otherUni, direction);
    
    const allPrograms = [...programs.bachelor, ...programs.master, ...programs.doctorate];
    
    if (allPrograms.length === 0) {
        container.innerHTML = '<p class="no-data">Программы по данному направлению не найдены</p>';
        return;
    }
    
    // Бакалавриат
    if (programs.bachelor.length > 0) {
        const section = document.createElement('div');
        section.className = 'programs-subsection';
        section.innerHTML = '<h4><i class="fas fa-user-graduate"></i> Бакалавриат</h4>';
        const uniqueItems = findUniqueItems(programs.bachelor, otherPrograms.bachelor);
        section.appendChild(renderListWithHighlight(programs.bachelor, uniqueItems));
        container.appendChild(section);
    }
    
    // Магистратура
    if (programs.master.length > 0) {
        const section = document.createElement('div');
        section.className = 'programs-subsection';
        section.innerHTML = '<h4><i class="fas fa-user-tie"></i> Магистратура</h4>';
        const uniqueItems = findUniqueItems(programs.master, otherPrograms.master);
        section.appendChild(renderListWithHighlight(programs.master, uniqueItems));
        container.appendChild(section);
    }
    
    // Докторантура
    if (programs.doctorate.length > 0) {
        const section = document.createElement('div');
        section.className = 'programs-subsection';
        section.innerHTML = '<h4><i class="fas fa-award"></i> Докторантура</h4>';
        const uniqueItems = findUniqueItems(programs.doctorate, otherPrograms.doctorate);
        section.appendChild(renderListWithHighlight(programs.doctorate, uniqueItems));
        container.appendChild(section);
    }
}

// Рендер секции рейтингов
function renderRankingsSection(uni, otherUni, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const rankings = [];
    if (uni.rankings.qsWorld) rankings.push(`QS World University Rankings: #${uni.rankings.qsWorld}`);
    if (uni.rankings.qsAsia) rankings.push(`QS Asia University Rankings: #${uni.rankings.qsAsia}`);
    if (uni.rankings.national) rankings.push(`Национальный рейтинг: #${uni.rankings.national}`);
    
    const otherRankings = [];
    if (otherUni.rankings.qsWorld) otherRankings.push(`QS World University Rankings: #${otherUni.rankings.qsWorld}`);
    if (otherUni.rankings.qsAsia) otherRankings.push(`QS Asia University Rankings: #${otherUni.rankings.qsAsia}`);
    if (otherUni.rankings.national) otherRankings.push(`Национальный рейтинг: #${otherUni.rankings.national}`);
    
    if (rankings.length === 0) {
        container.innerHTML = '<p class="no-data">Данные о рейтингах отсутствуют</p>';
        return;
    }
    
    // Подсветка если рейтинг лучше
    const ul = document.createElement('ul');
    ul.className = 'compare-list rankings-list';
    
    rankings.forEach(r => {
        const li = document.createElement('li');
        li.textContent = r;
        
        // Проверяем QS World
        if (r.includes('QS World') && uni.rankings.qsWorld && otherUni.rankings.qsWorld) {
            if (uni.rankings.qsWorld < otherUni.rankings.qsWorld) {
                li.classList.add('unique-item');
            }
        }
        // Проверяем QS Asia
        if (r.includes('QS Asia') && uni.rankings.qsAsia && otherUni.rankings.qsAsia) {
            if (uni.rankings.qsAsia < otherUni.rankings.qsAsia) {
                li.classList.add('unique-item');
            }
        }
        // Проверяем национальный
        if (r.includes('Национальный') && uni.rankings.national && otherUni.rankings.national) {
            if (uni.rankings.national < otherUni.rankings.national) {
                li.classList.add('unique-item');
            }
        }
        
        ul.appendChild(li);
    });
    
    container.appendChild(ul);
}

// Рендер секции сильных сторон
function renderStrengthsSection(uni, otherUni, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const strengths = uni.strengths || [];
    const otherStrengths = otherUni.strengths || [];
    
    if (strengths.length === 0) {
        container.innerHTML = '<p class="no-data">Данные о сильных сторонах отсутствуют</p>';
        return;
    }
    
    const uniqueStrengths = findUniqueItems(strengths, otherStrengths);
    container.appendChild(renderListWithHighlight(strengths, uniqueStrengths, 'strengths-list'));
}

// Рендер секции стипендий
function renderScholarshipsSection(uni, otherUni, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const scholarships = uni.scholarships;
    
    if (!scholarships) {
        container.innerHTML = '<p class="no-data">Данные о стипендиях отсутствуют</p>';
        return;
    }
    
    const div = document.createElement('div');
    div.className = 'scholarships-content';
    
    // Стипендии
    if (scholarships.types && scholarships.types.length > 0) {
        const section = document.createElement('div');
        section.className = 'scholarship-item';
        section.innerHTML = `
            <h4><i class="fas fa-coins"></i> Стипендии и гранты</h4>
            <ul>${scholarships.types.map(t => `<li>${t}</li>`).join('')}</ul>
        `;
        div.appendChild(section);
    }
    
    // Международные программы
    if (scholarships.international && scholarships.international.length > 0) {
        const section = document.createElement('div');
        section.className = 'scholarship-item';
        section.innerHTML = `
            <h4><i class="fas fa-plane"></i> Международные программы</h4>
            <ul>${scholarships.international.map(t => `<li>${t}</li>`).join('')}</ul>
        `;
        div.appendChild(section);
    }
    
    container.appendChild(div);
}

// Рендер секции аккредитаций
function renderAccreditationsSection(uni, otherUni, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const accreditations = uni.accreditations || [];
    const otherAccreditations = otherUni.accreditations || [];
    
    if (accreditations.length === 0) {
        container.innerHTML = '<p class="no-data">Данные об аккредитациях отсутствуют</p>';
        return;
    }
    
    const uniqueAccreditations = findUniqueItems(accreditations, otherAccreditations);
    container.appendChild(renderListWithHighlight(accreditations, uniqueAccreditations, 'accreditations-list'));
}

// Рендер требований для поступления
function renderRequirementsSection(uni, otherUni, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const req = uni.requirements;
    const otherReq = otherUni.requirements;
    
    const div = document.createElement('div');
    div.className = 'requirements-content';
    
    // IELTS
    if (req.ielts) {
        const isEasier = otherReq.ielts && req.ielts.min < otherReq.ielts.min;
        div.innerHTML += `
            <div class="req-item ${isEasier ? 'unique-item' : ''}">
                <span class="req-label">IELTS:</span>
                <span class="req-value">${req.ielts.min}+ (грант: ${req.ielts.grant}+)</span>
            </div>
        `;
    }
    
    // TOEFL
    if (req.toefl) {
        const isEasier = otherReq.toefl && req.toefl.min < otherReq.toefl.min;
        div.innerHTML += `
            <div class="req-item ${isEasier ? 'unique-item' : ''}">
                <span class="req-label">TOEFL:</span>
                <span class="req-value">${req.toefl.min}+ (грант: ${req.toefl.grant}+)</span>
            </div>
        `;
    }
    
    // SAT
    if (req.sat) {
        const isEasier = otherReq.sat && req.sat.min < otherReq.sat.min;
        div.innerHTML += `
            <div class="req-item ${isEasier ? 'unique-item' : ''}">
                <span class="req-label">SAT:</span>
                <span class="req-value">${req.sat.min}+ (грант: ${req.sat.grant}+)</span>
            </div>
        `;
    }
    
    // ЕНТ
    if (req.ent) {
        const isEasier = otherReq.ent && req.ent.min < otherReq.ent.min;
        div.innerHTML += `
            <div class="req-item ${isEasier ? 'unique-item' : ''}">
                <span class="req-label">ЕНТ:</span>
                <span class="req-value">${req.ent.min}+ (грант: ${req.ent.grant}+)</span>
            </div>
        `;
    } else if (!req.entRequired) {
        div.innerHTML += `
            <div class="req-item unique-item">
                <span class="req-label">ЕНТ:</span>
                <span class="req-value">Не требуется</span>
            </div>
        `;
    }
    
    // GPA
    if (req.gpa) {
        const isEasier = otherReq.gpa && req.gpa.min < otherReq.gpa.min;
        div.innerHTML += `
            <div class="req-item ${isEasier ? 'unique-item' : ''}">
                <span class="req-label">GPA:</span>
                <span class="req-value">${req.gpa.min}+ (грант: ${req.gpa.grant || '-'})</span>
            </div>
        `;
    }
    
    container.appendChild(div);
}

// Основная функция сравнения
function performComparison() {
    const uni1Key = document.getElementById('university1').value;
    const uni2Key = document.getElementById('university2').value;
    const direction = document.getElementById('direction-category').value;
    
    if (!uni1Key || !uni2Key || !direction) {
        alert('Пожалуйста, выберите оба университета и направление');
        return;
    }
    
    if (uni1Key === uni2Key) {
        alert('Пожалуйста, выберите разные университеты для сравнения');
        return;
    }
    
    const uni1 = getUniversityById(uni1Key);
    const uni2 = getUniversityById(uni2Key);
    
    if (!uni1 || !uni2) {
        alert('Ошибка загрузки данных университетов');
        return;
    }
    
    // Скрываем форму и показываем результаты
    document.getElementById('compare-selection').style.display = 'none';
    document.getElementById('compare-results').style.display = 'block';
    
    // Заполняем заголовки
    document.getElementById('uni1-name').textContent = uni1.shortName;
    document.getElementById('uni1-fullname').textContent = uni1.nameRu;
    document.getElementById('uni2-name').textContent = uni2.shortName;
    document.getElementById('uni2-fullname').textContent = uni2.nameRu;
    
    // Рендерим все секции
    renderENTSection(uni1, uni2, direction, 'ent1');
    renderENTSection(uni2, uni1, direction, 'ent2');
    renderRequirementsSection(uni1, uni2, 'requirements1');
    renderRequirementsSection(uni2, uni1, 'requirements2');
    renderProgramsSection(uni1, uni2, direction, 'programs1');
    renderProgramsSection(uni2, uni1, direction, 'programs2');
    renderRankingsSection(uni1, uni2, 'achievements1');
    renderRankingsSection(uni2, uni1, 'achievements2');
    renderStrengthsSection(uni1, uni2, 'strengths1');
    renderStrengthsSection(uni2, uni1, 'strengths2');
    renderScholarshipsSection(uni1, uni2, 'scholarships1');
    renderScholarshipsSection(uni2, uni1, 'scholarships2');
    renderAccreditationsSection(uni1, uni2, 'accreditations1');
    renderAccreditationsSection(uni2, uni1, 'accreditations2');
}

// Возврат к форме выбора
function backToSelection() {
    document.getElementById('compare-selection').style.display = 'block';
    document.getElementById('compare-results').style.display = 'none';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    populateUniversitySelects();
    populateDirections();
    
    // Обработчик кнопки сравнения
    const submitBtn = document.getElementById('compare-submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', performComparison);
    }
    
    // Обработчик кнопки "назад"
    const backBtn = document.getElementById('back-to-selection');
    if (backBtn) {
        backBtn.addEventListener('click', backToSelection);
    }
    
    // Предотвращаем выбор одинаковых университетов
    const uni1Select = document.getElementById('university1');
    const uni2Select = document.getElementById('university2');
    
    if (uni1Select && uni2Select) {
        uni1Select.addEventListener('change', function() {
            Array.from(uni2Select.options).forEach(option => {
                option.disabled = option.value === this.value && option.value !== '';
            });
        });
        
        uni2Select.addEventListener('change', function() {
            Array.from(uni1Select.options).forEach(option => {
                option.disabled = option.value === this.value && option.value !== '';
            });
        });
    }
});
