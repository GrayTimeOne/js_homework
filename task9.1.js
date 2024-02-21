// Заданий масив об'єктів, що містять інформацію про користувачів.
var arr = [
    {
        userName: "Serhii",
        lastName: "Bondarenko",
        email: "Serhii.Bondarenko@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "Nepotribniy",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для виокремлення потрібних email-адрес.
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Пустий масив для довірених email-адрес.
var trustedEmails = [];

// Ітерація через кожен об'єкт у масиві.
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

     /*Перевірка умов для додавання email-адреси до довірених.
     Використовується регулярний вираз для виокремлення потрібних email.*/
    if (emailRegex.test(item.email)) {
        // Додаємо email до довірених, якщо валідація та перевірка домена успішні.
        trustedEmails.push(item);
    }
}

// Вивід результату у консоль.
console.log(trustedEmails);
