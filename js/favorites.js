/**
 * Управление избранными университетами через localStorage
 * Глобальные функции:
 * - getFavorites()
 * - isFavorite(id)
 * - addFavorite(id)
 * - removeFavorite(id)
 * - toggleFavorite(id)
 * - clearFavorites()
 * - getFavoriteUniversities() // требует getUniversityById из данных
 */

const FAVORITES_STORAGE_KEY = 'univigate:favorites';

function readFavoritesFromStorage() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('Не удалось прочитать избранные', e);
    return [];
  }
}

function persistFavorites(list) {
  const unique = Array.from(new Set(list));
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(unique));
    window.dispatchEvent(
      new CustomEvent('favorites:changed', { detail: { favorites: unique } })
    );
  } catch (e) {
    console.warn('Не удалось сохранить избранные', e);
  }
  return unique;
}

function getFavorites() {
  return readFavoritesFromStorage();
}

function isFavorite(id) {
  return readFavoritesFromStorage().includes(id);
}

function addFavorite(id) {
  const current = readFavoritesFromStorage();
  if (!current.includes(id)) {
    current.push(id);
    persistFavorites(current);
  }
  return true;
}

function removeFavorite(id) {
  const filtered = readFavoritesFromStorage().filter((fav) => fav !== id);
  persistFavorites(filtered);
  return false;
}

function toggleFavorite(id) {
  return isFavorite(id) ? removeFavorite(id) : addFavorite(id);
}

function clearFavorites() {
  persistFavorites([]);
}

function getFavoriteUniversities() {
  if (typeof getUniversityById !== 'function') return [];
  return getFavorites()
    .map((id) => getUniversityById(id))
    .filter(Boolean);
}

/**
 * Привязка кнопки избранного к ID
 * @param {HTMLElement} button
 * @param {string} uniId
 * @param {{labels?: {add:string, remove:string}}} options
 */
function bindFavoriteButton(button, uniId, options = {}) {
  if (!button || !uniId) return;
  const addLabel =
    options.labels?.add !== undefined ? options.labels.add : 'В избранное';
  const removeLabel =
    options.labels?.remove !== undefined ? options.labels.remove : 'В избранном';
  const labelEl = button.querySelector('[data-fav-label]') || button;

  const renderState = () => {
    const active = isFavorite(uniId);
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
    labelEl.textContent = active ? removeLabel : addLabel;
  };

  button.addEventListener('click', () => {
    toggleFavorite(uniId);
    renderState();
  });

  // Подписка на внешние изменения (другая вкладка/страница)
  window.addEventListener('favorites:changed', renderState);
  window.addEventListener('storage', (e) => {
    if (e.key === FAVORITES_STORAGE_KEY) renderState();
  });

  renderState();
}


