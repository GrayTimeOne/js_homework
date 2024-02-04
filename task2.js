/** Програма працює в браузері. IDE видавав помилку, але інтернет підказав в консолі браузера спробувати)
 не знаю чи то помилка. */
// Спочатку отримую від користувача рік.
let yearInput = prompt("Введіть кількість років");
// Конвертую введене значення в число за допомогою унарного плюса.
let year = +yearInput;
// Перевіряю, чи введене значення це числом і воно не від'ємне.
if (!isNaN(year) && year >= 0 && year <= 100) {
    // Визначаю, яке слово використовувати для виведення в залежності від числа років.
    let word;
    /* Завдяки блоку if-else визначаю правильне слова в залежності від числа років.
    Використовую, якщо рік дорівнює 1. */
    if (year === 1) {
        word = "рік";
    }
    // Використовую, якщо рік в діапазоні від 2 до 4.
    else if (year >= 2 && year <= 4) {
        word = "роки";
    }
    // Використовується для всіх інших випадків, а саме від 5 до 100.
    else {
        word = "років";
    }
    // Показую результат.
    alert(`Ваш вік: ${year} ${word}`);
} else {
    // Роблю попередження, якщо є помилка в вводі даних.
    alert("Введіть додатнє числове значення до 100 років.");
}
