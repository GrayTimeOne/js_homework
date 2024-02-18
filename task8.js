// Об'єкт, який надає повну інформацію про компанію та її структуру.
const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

// Функція findValueByKey завдяки якій, буде виконуватись пошук об'єкта за значенням 'name' вглиб вкладених об'єктів.
function findValueByKey(obj, companyName) {
    // Перевірка на те, чи об'єкт має ключ 'name' та його значення рівне companyName.
    if (obj.name === companyName) {
        // Повертаємо об'єкт, якщо знайдено відповідність.
        return obj;
    }

    // Перевірка на те, чи об'єкт має ключ 'partners' та рекурсивно викликаємо функцію для кожного партнера.
    if (obj.partners) {
        for (const partner of obj.partners) {
            const result = findValueByKey(partner, companyName);
            if (result) {
                // Повертаємо результат, якщо знайдено в 'partners'.
                return result;
            }
        }
    }

    // Перевірка на те, чи об'єкт має ключ 'clients' та рекурсивно викликаємо функцію для кожного клієнта.
    if (obj.clients) {
        for (const client of obj.clients) {
            const result = findValueByKey(client, companyName);
            if (result) {
                // Повертаємо результат, якщо знайдено в 'clients'.
                return result;
            }
        }
    }

    // Якщо об'єкт не містить значення яке ми шукаємо, повертаємо null.
    return null;
}

// Функція для пошуку 'Клієнт 1.2'.
const foundCompany = findValueByKey(company, 'Клієнт 1.2');

// Виведення результату в консоль.
console.log(foundCompany);


