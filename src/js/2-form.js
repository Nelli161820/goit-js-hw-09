// Отримуємо елементи форми
let form = document.querySelector('.feedback-form');
let emailInput = form.elements.email;
let messageInput = form.elements.message;

// Перевіряємо, чи є збережені дані у локальному сховищі
let savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  // Якщо дані збережені, перетворюємо їх з JSON-формату і заповнюємо поля форми
  let formData = JSON.parse(savedData);
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}

// Додаємо обробник подій 'input' для збереження значень у локальне сховище
form.addEventListener('input', function (event) {
  // Зберігаємо значення полів у об'єкт
  let formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  // Зберігаємо об'єкт у локальне сховище
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Додаємо обробник подій 'submit' для форми
form.addEventListener('submit', function (event) {
  // Зупиняємо стандартну обробку події
  event.preventDefault();

  // Отримуємо поточні значення полів
  let formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Виводимо дані у консоль
  console.log(formData);

  // Очищаємо поля форми
  form.reset();

  // Очищаємо локальне сховище
  localStorage.removeItem('feedback-form-state');
});
