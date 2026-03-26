import { initForm } from "./form.js";
import { initModal } from "./modal.js";
import { initValidation } from "./validation.js";

// Инициализация всех модулей
function init() {
  initModal();
  initValidation();
  initForm();
}

// Запуск приложения когда DOM готов
document.addEventListener("DOMContentLoaded", init);
