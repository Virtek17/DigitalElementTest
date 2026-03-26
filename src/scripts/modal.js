// Модальное окно
const modal = document.getElementById("contactModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("modalClose");
const footerBtn = document.querySelector(".footer__btn");

/**
 * Закрыть модальное окно
 */
export function closeModal() {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

/**
 * Инициализация модального окна
 */
export function initModal() {
  modalCloseBtn.addEventListener("click", closeModal);
  footerBtn.addEventListener("click", openModal);
}

/**
 * Открыть модальное окно
 */
export function openModal() {
  modal.classList.add("active");
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
