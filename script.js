const menuButton = document.getElementById('menubutton');
const menuModal = document.getElementById('menumodal');
let menuOpen = false;

menuButton.addEventListener('click', () => {
  if (!menuOpen) {
    menuModal.style.display = 'flex';
    menuOpen = true;
    // Тут добавить анимацию раскрытия кнопки в поиск и появление кнопок
  }
});
menuModal.addEventListener('click', function(e) {
  if(e.target === menuModal) {
    menuModal.style.display = 'none';
    menuOpen = false;
    // Тут добавить анимацию ухода кнопки и возврата сайта
  }
});
