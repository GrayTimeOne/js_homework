// Об'єкт, що містить послуги та їх вартість
let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Додаємо нову послугу та її вартість
services['Розбити скло'] = "200 грн";

// Метод, що обчислює та повертає загальну вартість "наданих послуг"
services.price = function () {
    // Змінна для зберігання загальної вартості
    let total = 0;

    // Перебираємо властивості об'єкта
    for (let service in this) {
        // Перевіряємо, чи значення є рядком і може бути конвертованим в число
        if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
            // Додаємо вартість послуги до загальної вартості
            total += parseInt(this[service]);
        }
    }

    // Повертаємо загальну вартість послуг
    return total;
};

// Метод, який повертає мінімальну вартість серед послуг
services.minPrice = function () {
    // Змінна для зберігання мінімальної вартості
    let min = Infinity;

    // Перебираємо властивості об'єкта
    for (let service in this) {
        // Перевіряємо, чи значення є рядком і може бути конвертованим в число
        if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
            // Порівнюємо з поточним мінімумом та оновлюємо, якщо необхідно
            if (parseInt(this[service]) < min) {
                min = parseInt(this[service]);
            }
        }
    }

    // Повертаємо мінімальну вартість послуг
    return min;
};

// Метод, який повертає максимальну вартість серед послуг
services.maxPrice = function () {
    // Змінна для зберігання максимальної вартості
    let max = -Infinity;

    // Перебираємо властивості об'єкта
    for (let service in this) {
        // Перевіряємо, чи значення є рядком і може бути конвертованим в число
        if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) {
            // Порівнюємо з поточним максимумом та оновлюємо, якщо необхідно
            if (parseInt(this[service]) > max) {
                max = parseInt(this[service]);
            }
        }
    }

    // Повертаємо максимальну вартість послуг
    return max;
};

// Виведення результатів
console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");
