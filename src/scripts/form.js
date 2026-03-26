import { closeModal } from "./modal.js";
import { validateForm } from "./validation.js";

const form = document.getElementById("form");

/**
 * Отправляет данные формы на webhook.site
 *
 * @param {Event} e - Событие отправки формы
 * @returns {Promise<void>}
 */
async function postData(e) {
  e.preventDefault();

  // Валидация перед отправкой
  if (!validateForm()) {
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const webhookUrl =
      "https://webhook.site/7eef959e-b77f-4612-94b4-7b7e0d5c5dee";

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "no-cors",
    });

    form.reset();
    closeModal();
  } catch (error) {
    console.error("Ошибка при отправке:", error);
    alert("Ошибка при отправке формы. Попробуйте позже.");
  }
}

/**
 * Инициализирует форму и добавляет слушатель события отправки
 *
 * @example
 * initForm() // Вызывается при загрузке приложения
 */
export function initForm() {
  form.addEventListener("submit", postData);
}
