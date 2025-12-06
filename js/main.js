// Получаем необходимые элементы DOM
const centralButton = document.getElementById('central-button');
const circularMenu = document.getElementById('circular-menu');
const universityCatalog = document.getElementById('university-catalog');
const searchModal = document.getElementById('search-modal');

// Функция для создания карточки университета
function createUniversityCard(university) {
    const card = document.createElement('div');
    card.className = 'university-card';

    card.innerHTML = `
        <img src="${university.image}" alt="${university.name}" class="university-image">
        <div class="university-info">
            <h3 class="university-name">${university.name}</h3>
            <p class="university-country">${university.country}</p>
        </div>
        <div class="university-requirements">
            <p>IELTS: ${university.requirements.ielts}</p>
            <p>SAT: ${university.requirements.sat}</p>
        </div>
    `;

    // Добавляем обработчик клика для перехода на страницу университета
    card.addEventListener('click', () => {
        // TODO: Реализовать переход на страницу университета
        console.log('Переход на страницу университета:', university.name);
    });

    return card;
}

// Функция для отображения университетов
function displayUniversities(universitiesList = universities) {
    universityCatalog.innerHTML = '';
    universitiesList.forEach(university => {
        universityCatalog.appendChild(createUniversityCard(university));
    });
}

// Функция для фильтрации университетов
function filterUniversities(criteria) {
    return universities.filter(university => {
        const meetsIelts = !criteria.ielts || university.requirements.ielts <= criteria.ielts;
        const meetsSat = !criteria.sat || university.requirements.sat <= criteria.sat;
        const meetsCountry = !criteria.country || university.country === criteria.country;
        
        return meetsIelts && meetsSat && meetsCountry;
    });
}

// Функция для переключения меню
function toggleMenu() {
    circularMenu.classList.toggle('active');
    universityCatalog.classList.toggle('blur');
}

// Обработчик клика по центральной кнопке
centralButton.addEventListener('click', toggleMenu);

// Обработчик клика по кнопке Exit (закрытие меню)
document.querySelector('.exit-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Обработчик клика по кнопке поиска
document.querySelector('.search-btn').addEventListener('click', () => {
    searchModal.classList.add('active');
    circularMenu.classList.remove('active');
    universityCatalog.classList.remove('blur');
});

// Обработчик отправки формы поиска
document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const criteria = {
        ielts: parseFloat(formData.get('ielts')),
        sat: parseInt(formData.get('sat')),
        country: formData.get('country')
    };

    const filteredUniversities = filterUniversities(criteria);
    displayUniversities(filteredUniversities);
    searchModal.classList.remove('active');
});

// Закрытие модального окна при клике вне его содержимого
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('active');
    }
});

// Закрытие модального окна по кнопке
const closeModalBtn = document.querySelector('.close-btn');
closeModalBtn.addEventListener('click', () => {
    searchModal.classList.remove('active');
});

// Заполнение выпадающего списка стран
const countrySelect = document.getElementById('country-select');
const countries = [...new Set(universities.map(u => u.country))];
countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});

// Инициализация: главная страница пустая
// Университеты отображаются только через AI поиск на странице результатов
// displayUniversities();

// ============================================
// АНИМИРОВАННЫЙ ПОИСК
// ============================================

const animatedSearchInput = document.getElementById('animated-search-input');
const animatedSearchButton = document.getElementById('animated-search-button');
const animatedSearch = document.querySelector('.animated-search');

// Функция для поиска университетов по тексту
function searchUniversitiesByText(searchText) {
    if (!searchText || searchText.trim() === '') {
        return universities;
    }
    
    const searchLower = searchText.toLowerCase().trim();
    return universities.filter(university => {
        const nameMatch = university.name.toLowerCase().includes(searchLower);
        const countryMatch = university.country.toLowerCase().includes(searchLower);
        return nameMatch || countryMatch;
    });
}

// Обработчик ввода текста в анимированный поиск
if (animatedSearchInput) {
    let searchTimeout;
    
    animatedSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const searchText = e.target.value;
        
        // Поиск с небольшой задержкой для оптимизации
        searchTimeout = setTimeout(() => {
            const filteredUniversities = searchUniversitiesByText(searchText);
            displayUniversities(filteredUniversities);
        }, 300);
    });
    
    // Обработчик нажатия Enter
    animatedSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchText = e.target.value;
            const filteredUniversities = searchUniversitiesByText(searchText);
            displayUniversities(filteredUniversities);
        }
    });
}

// Обработчик клика по кнопке поиска
if (animatedSearchButton) {
    animatedSearchButton.addEventListener('click', () => {
        if (animatedSearchInput) {
            const searchText = animatedSearchInput.value;
            const filteredUniversities = searchUniversitiesByText(searchText);
            displayUniversities(filteredUniversities);
        }
    });
}

// Управление классом search-opened для контроля анимации закрытия
if (animatedSearch) {
    animatedSearch.addEventListener('mouseenter', () => {
        animatedSearch.classList.add('search-opened');
    });
    
    animatedSearch.addEventListener('mouseleave', () => {
        // Убираем класс после завершения анимации закрытия
        setTimeout(() => {
            animatedSearch.classList.remove('search-opened');
        }, 150); // Время анимации закрытия
    });
    
    // Также при фокусе
    if (animatedSearchInput) {
        animatedSearchInput.addEventListener('focus', () => {
            animatedSearch.classList.add('search-opened');
        });
        
        animatedSearchInput.addEventListener('blur', () => {
            setTimeout(() => {
                animatedSearch.classList.remove('search-opened');
            }, 150);
        });
    }
}