// Получаем сохраненные результаты
const searchResults = JSON.parse(localStorage.getItem('searchResults'));
const universityCatalog = document.getElementById('university-catalog');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const searchCriteria = document.getElementById('search-criteria');

// Функция для отображения критериев поиска
function displaySearchCriteria(criteria) {
    let criteriaItems = [];
    
    // IELTS (если указан)
    if (criteria.hasIelts === 'yes') {
        criteriaItems.push(`<p><strong>IELTS:</strong> ${criteria.ielts}</p>`);
    }
    
    // TOEFL (если указан)
    if (criteria.hasToefl === 'yes') {
        criteriaItems.push(`<p><strong>TOEFL:</strong> ${criteria.toefl}</p>`);
    }
    
    // SAT (если указан)
    if (criteria.hasSat === 'yes') {
        criteriaItems.push(`<p><strong>SAT:</strong> ${criteria.sat}</p>`);
    }
    
    // ЕНТ (если указан)
    if (criteria.hasEnt === 'yes') {
        criteriaItems.push(`<p><strong>ЕНТ:</strong> ${criteria.ent}</p>`);
    }
    
    // GPA (всегда показываем)
    criteriaItems.push(`<p><strong>GPA:</strong> ${criteria.gpa}</p>`);
    
    const criteriaHTML = `
        <div class="criteria-list">
            ${criteriaItems.join('')}
        </div>
    `;
    searchCriteria.innerHTML = criteriaHTML;
}

// Функция для создания карточки университета
function createUniversityCard(university) {
    const card = document.createElement('div');
    card.className = 'university-card';

    // Собираем требования университета
    let requirementsHTML = '';
    
    if (university.requirements.ielts) {
        requirementsHTML += `<p>IELTS: ${university.requirements.ielts}</p>`;
    }
    if (university.requirements.toefl) {
        requirementsHTML += `<p>TOEFL: ${university.requirements.toefl}</p>`;
    }
    if (university.requirements.sat) {
        requirementsHTML += `<p>SAT: ${university.requirements.sat}</p>`;
    }
    if (university.requirements.ent) {
        requirementsHTML += `<p>ЕНТ: ${university.requirements.ent}</p>`;
    }
    if (university.requirements.gpa) {
        requirementsHTML += `<p>GPA: ${university.requirements.gpa}</p>`;
    }

    card.innerHTML = `
        <img src="../${university.image}" alt="${university.name}" class="university-image">
        <div class="university-info">
            <h3 class="university-name">${university.name}</h3>
            <p class="university-country">${university.country}</p>
        </div>
        <div class="university-requirements">
            ${requirementsHTML}
        </div>
    `;

    return card;
}

// Проверяем наличие результатов
if (searchResults && searchResults.universities) {
    const { universities, criteria } = searchResults;
    
    // Отображаем критерии поиска
    displaySearchCriteria(criteria);

    // Отображаем количество найденных университетов
    resultsCount.textContent = `Найдено университетов: ${universities.length}`;

    if (universities.length > 0) {
        // Отображаем университеты
        universities.forEach(university => {
            universityCatalog.appendChild(createUniversityCard(university));
        });
        noResults.style.display = 'none';
    } else {
        // Показываем сообщение об отсутствии результатов
        universityCatalog.style.display = 'none';
        noResults.style.display = 'block';
    }
} else {
    // Если нет результатов, перенаправляем на страницу поиска
    window.location.href = 'ai-searcher.html';
}
