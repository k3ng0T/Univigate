// Получаем необходимые элементы DOM
const centralButton = document.getElementById('central-button');
const circularMenu = document.getElementById('circular-menu');

// Функция для переключения меню
function toggleMenu() {
    circularMenu.classList.toggle('active');
}

// Обработчик клика по центральной кнопке
if (centralButton) {
    centralButton.addEventListener('click', toggleMenu);
}

// Обработчик клика по кнопке Exit (закрытие меню)
const exitBtn = document.querySelector('.exit-btn');
if (exitBtn) {
    exitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
}

// ============================================
// АНИМИРОВАННЫЙ ПОИСК С АВТОЗАПОЛНЕНИЕМ
// ============================================

const animatedSearchInput = document.getElementById('animated-search-input');
const animatedSearchButton = document.getElementById('animated-search-button');
const animatedSearch = document.querySelector('.animated-search');

// Создаём контейнер для подсказок
let suggestionsContainer = null;

function createSuggestionsContainer() {
    if (suggestionsContainer) return;
    
    suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    suggestionsContainer.id = 'search-suggestions';
    
    if (animatedSearch) {
        animatedSearch.appendChild(suggestionsContainer);
    }
}

// Функция для поиска университетов по тексту
function searchUniversitiesByText(searchText) {
    if (!searchText || searchText.trim() === '' || typeof UNIVERSITIES === 'undefined') {
        return [];
    }
    
    const searchLower = searchText.toLowerCase().trim();
    const results = [];
    
    for (const [key, uni] of Object.entries(UNIVERSITIES)) {
        const nameMatch = uni.name.toLowerCase().includes(searchLower);
        const nameRuMatch = uni.nameRu.toLowerCase().includes(searchLower);
        const shortNameMatch = uni.shortName.toLowerCase().includes(searchLower);
        const cityMatch = uni.info.location.city.toLowerCase().includes(searchLower);
        
        if (nameMatch || nameRuMatch || shortNameMatch || cityMatch) {
            results.push(uni);
        }
    }
    
    return results;
}

// Функция для отображения подсказок
function showSuggestions(universities) {
    if (!suggestionsContainer) {
        createSuggestionsContainer();
    }
    
    if (!universities || universities.length === 0) {
        suggestionsContainer.innerHTML = '';
        suggestionsContainer.classList.remove('active');
        return;
    }
    
    let html = '';
    universities.slice(0, 6).forEach(uni => {
        html += `
            <div class="suggestion-item" data-id="${uni.id}">
                <div class="suggestion-icon">
                    <i class="fas fa-university"></i>
                </div>
                <div class="suggestion-info">
                    <span class="suggestion-name">${uni.shortName}</span>
                    <span class="suggestion-full">${uni.nameRu}</span>
                </div>
                <div class="suggestion-location">
                    <i class="fas fa-map-marker-alt"></i> ${uni.info.location.city}
                </div>
            </div>
        `;
    });
    
    suggestionsContainer.innerHTML = html;
    suggestionsContainer.classList.add('active');
    
    // Добавляем обработчики клика на подсказки
    const items = suggestionsContainer.querySelectorAll('.suggestion-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const uniId = item.dataset.id;
            goToUniversity(uniId);
        });
    });
}

// Функция для перехода на страницу университета
function goToUniversity(uniId) {
    window.location.href = `pages/university.html?id=${uniId}`;
}

// Обработчик ввода текста в анимированный поиск
if (animatedSearchInput) {
    createSuggestionsContainer();
    let searchTimeout;
    
    animatedSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const searchText = e.target.value;
        
        // Поиск с небольшой задержкой для оптимизации
        searchTimeout = setTimeout(() => {
            const filteredUniversities = searchUniversitiesByText(searchText);
            showSuggestions(filteredUniversities);
        }, 200);
    });
    
    // Обработчик нажатия Enter
    animatedSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchText = e.target.value.trim();
            
            // Ищем точное совпадение
            const results = searchUniversitiesByText(searchText);
            if (results.length === 1) {
                goToUniversity(results[0].id);
            } else if (results.length > 1) {
                // Проверяем точное совпадение по имени
                const exact = results.find(uni => 
                    uni.name.toLowerCase() === searchText.toLowerCase() ||
                    uni.nameRu.toLowerCase() === searchText.toLowerCase() ||
                    uni.shortName.toLowerCase() === searchText.toLowerCase()
                );
                if (exact) {
                    goToUniversity(exact.id);
                } else {
                    // Переходим к первому результату
                    goToUniversity(results[0].id);
                }
            }
        }
    });
    
    // Скрытие подсказок при клике вне поиска
    document.addEventListener('click', (e) => {
        if (suggestionsContainer && !animatedSearch.contains(e.target)) {
            suggestionsContainer.classList.remove('active');
        }
    });
    
    // Показать подсказки при фокусе если есть текст
    animatedSearchInput.addEventListener('focus', () => {
        const searchText = animatedSearchInput.value;
        if (searchText.trim()) {
            const filteredUniversities = searchUniversitiesByText(searchText);
            showSuggestions(filteredUniversities);
        }
    });
}

// Обработчик клика по кнопке поиска
if (animatedSearchButton) {
    animatedSearchButton.addEventListener('click', () => {
        if (animatedSearchInput) {
            const searchText = animatedSearchInput.value.trim();
            const results = searchUniversitiesByText(searchText);
            if (results.length > 0) {
                goToUniversity(results[0].id);
            }
        }
    });
}

// Управление классом search-opened для контроля анимации
if (animatedSearch) {
    animatedSearch.addEventListener('mouseenter', () => {
        animatedSearch.classList.add('search-opened');
    });
    
    animatedSearch.addEventListener('mouseleave', () => {
        if (!animatedSearchInput || !animatedSearchInput.value) {
            setTimeout(() => {
                animatedSearch.classList.remove('search-opened');
            }, 150);
        }
    });
    
    if (animatedSearchInput) {
        animatedSearchInput.addEventListener('focus', () => {
            animatedSearch.classList.add('search-opened');
        });
        
        animatedSearchInput.addEventListener('blur', () => {
            if (!animatedSearchInput.value) {
                setTimeout(() => {
                    animatedSearch.classList.remove('search-opened');
                }, 200);
            }
        });
    }
}

// ============================================
// СИНХРОНИЗАЦИЯ ЯЗЫКА НА ВСЕХ СТРАНИЦАХ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('ui-lang') || 'ru';
    document.documentElement.setAttribute('lang', lang);

    const langButtons = document.querySelectorAll('.lang-switch__btn');
    if (langButtons.length) {
        const setActive = (nextLang) => {
            localStorage.setItem('ui-lang', nextLang);
            document.documentElement.setAttribute('lang', nextLang);
            langButtons.forEach((b) =>
                b.classList.toggle('active', b.dataset.lang === nextLang)
            );
        };
        setActive(lang);
        langButtons.forEach((btn) =>
            btn.addEventListener('click', () => setActive(btn.dataset.lang))
        );
    }
});
