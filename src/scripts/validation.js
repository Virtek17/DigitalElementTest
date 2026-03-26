// ============================================
// VALIDATION MODULE
// ============================================
// Модуль для валидации формы контактов
// Включает проверку email и имени с выводом ошибок

// Поля формы
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");

// Элементы ошибок
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");

/**
 * Удаляет класс ошибки и очищает текст сообщения об ошибке
 *
 * @param {HTMLElement} input - Поле ввода для очистки
 * @param {HTMLElement} errorElement - Элемент для вывода ошибки
 *
 * @example
 * clearError(fullNameInput, fullNameError)
 */
export function clearError(input, errorElement) {
  input.classList.remove("error");
  errorElement.textContent = "";
}

/**
 * Инициализирует валидацию в реальном времени
 * Добавляет слушатели событий blur для проверки полей при потере фокуса
 *
 * @example
 * initValidation() // Вызывается при загрузке приложения
 */
export function initValidation() {
  fullNameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
}

/**
 * Проверяет корректность формата email
 *
 * @param {string} email - Email адрес для проверки
 * @returns {boolean} true если email валиден, false если нет
 *
 * @example
 * isValidEmail("user@example.com") // true
 * isValidEmail("invalid.email") // false
 */
export function isValidEmail(email) {
  const emailRegex = /\w+@\w+\.\w+/;
  return emailRegex.test(email);
}

/**
 * Проверяет корректность формата имени (Имя Фамилия)
 * Требует: заглавная буква, минимум одна строчная, пробел, заглавная буква, минимум одна строчная
 * Поддерживает кириллицу и латиницу
 *
 * @param {string} name - Имя для проверки
 * @returns {boolean} true если имя в формате "Имя Фамилия", false если нет
 *
 * @example
 * isValidName("John Doe") // true
 * isValidName("Иван Петров") // true
 * isValidName("john") // false
 */
export function isValidName(name) {
  const nameRegex = /^[A-ZА-ЯЁ][a-zа-яё]+\s[A-ZА-ЯЁ][a-zа-яё]+/;
  return nameRegex.test(name);
}

/**
 * Добавляет класс ошибки и выводит сообщение об ошибке
 *
 * @param {HTMLElement} input - Поле ввода для отметки ошибки
 * @param {HTMLElement} errorElement - Элемент для вывода сообщения об ошибке
 * @param {string} message - Текст сообщения об ошибке
 *
 * @example
 * showError(fullNameInput, fullNameError, "Full Name is required")
 */
export function showError(input, errorElement, message) {
  input.classList.add("error");
  errorElement.textContent = message;
}

/**
 * Валидирует поле email
 * Проверяет: не пусто ли, соответствует ли формату email
 *
 * @returns {boolean} true если email валиден, false если есть ошибки
 *
 * @example
 * validateEmail() // true или false в зависимости от значения emailInput
 */
export function validateEmail() {
  const email = emailInput.value.trim();

  if (email === "") {
    showError(emailInput, emailError, "Email is required");
    return false;
  } else if (!isValidEmail(email)) {
    showError(emailInput, emailError, "Please enter a valid email");
    return false;
  } else {
    clearError(emailInput, emailError);
    return true;
  }
}

/**
 * Валидирует всю форму
 * Проверяет все поля и возвращает результат
 *
 * @returns {boolean} true если все поля валидны, false если есть ошибки
 *
 * @example
 * if (validateForm()) {
 *   // Отправить форму
 * }
 */
export function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  return isNameValid && isEmailValid;
}

/**
 * Валидирует поле имени
 * Проверяет: не пусто ли, соответствует ли формату "Имя Фамилия"
 *
 * @returns {boolean} true если имя валидно, false если есть ошибки
 *
 * @example
 * validateName() // true или false в зависимости от значения fullNameInput
 */
export function validateName() {
  const name = fullNameInput.value.trim();

  if (name === "") {
    showError(fullNameInput, fullNameError, "Full Name is required");
    return false;
  } else if (!isValidName(name)) {
    showError(fullNameInput, fullNameError, "Enter your first and last name");
    return false;
  } else {
    clearError(fullNameInput, fullNameError);
    return true;
  }
}
