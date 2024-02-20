// Заданий масив об'єктів, що містять інформацію про користувачів.
var arr = [
    {
        userName: "Serhii",
        lastName: "Bondarenko",
        email: "test.test@gmail.com"
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

// Регулярний вираз для валідації email-адрес.
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

// Пустий масив для довірених email-адрес.
var trustedEmails = [];

// Ітерація через кожен об'єкт у масиві.
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

    /*Перевірка умов для додавання email-адреси до довірених.
     Використовуєм регулярний вираз для перевірки формату email.
     Також перевіряється, чи закінчується email на '@gmail.com' або '@yahoo.com'.*/
    if (emailRegex.test(item.email) && (item.email.endsWith('@gmail.com') || item.email.endsWith('@yahoo.com'))) {
        trustedEmails.push(item);
    }
}

// Вивід результату у консоль.
console.log(trustedEmails);

