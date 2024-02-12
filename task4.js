// Функція drawTriangle малює трикутник в консолі з використанням символу symbol та заданої висоти height.
// Параметр height визначає кількість рядків у трикутнику.
// Параметр symbol визначає символ, яким буде малюватися трикутник.
function drawTriangle(height, symbol) {
    // Цикл for використовується для створення кожного рядка трикутника.
    for (let i = 1; i <= height; i++) {
        // Кожен рядок складається з повторення символу задану кількість разів (збільшується з кожним рядком).
        console.log(symbol.repeat(i));
    }
}

// Функція drawTriangleWhile також малює трикутник, але використовує цикл while.
// Параметри height і symbol використовуються так само, як і в функції drawTriangle.
function drawTriangleWhile(height, symbol) {
    let i = 1;
    // Цикл while використовується для створення кожного рядка трикутника.
    while (i <= height) {
        // Кожен рядок складається з повторення символу задану кількість разів (збільшується з кожним рядком).
        console.log(symbol.repeat(i));
        i++;
    }
}

// Викликаємо функції для малювання трикутника
console.log("Спосіб 1:"); // Пояснення про перший спосіб малювання трикутника
drawTriangle(5, '*'); // Виклик функції drawTriangle з параметрами (висота 5, символ '*')

console.log("\nСпосіб 2:"); // Пояснення про другий спосіб малювання трикутника
drawTriangleWhile(5, '*'); // Виклик функції drawTriangleWhile з параметрами (висота 5, символ '*')
