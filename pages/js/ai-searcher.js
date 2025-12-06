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

// Функция для проверки соответствия требованиям университета
function checkUniversityRequirements(university, criteria) {
    // Проверяем IELTS если он указан
    if (criteria.hasIelts === 'yes' && university.requirements.ielts) {
        if (criteria.ielts < university.requirements.ielts) {
            return false;
        }
    }

    // Проверяем TOEFL если он указан
    if (criteria.hasToefl === 'yes' && university.requirements.toefl) {
        if (criteria.toefl < university.requirements.toefl) {
            return false;
        }
    }

    // Проверяем SAT если он указан
    if (criteria.hasSat === 'yes' && university.requirements.sat) {
        if (criteria.sat < university.requirements.sat) {
            return false;
        }
    }

    // Проверяем ЕНТ если он указан
    if (criteria.hasEnt === 'yes' && university.requirements.ent) {
        if (criteria.ent < university.requirements.ent) {
            return false;
        }
    }

    // Проверяем GPA
    if (criteria.gpa < university.requirements.gpa) {
        return false;
    }

    return true;
}

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

    // Фильтруем университеты
    const matchingUniversities = universities.filter(university => 
        checkUniversityRequirements(university, formData)
    );

    // Сохраняем результаты в localStorage
    localStorage.setItem('searchResults', JSON.stringify({
        criteria: formData,
        universities: matchingUniversities
    }));

    // Переходим на страницу результатов
    window.location.href = 'results.html';
});
