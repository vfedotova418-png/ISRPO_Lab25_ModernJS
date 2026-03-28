// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// };
// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);
// const { name, age, city } = user;
// console.log(name, age, city);
// const { name: fullName, age: years } = user;
// console.log(fullName, years);
// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");
// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }
// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "Милка",
//     price: 124,
//     category: "Сладости",
//     inStock: true,
// };
// const { name, price, category, inStock } = product;
// console.log(name, price, category, inStock);
// function printProduct({ name, price, category, inStock }) {
//     console.log(`Название: ${name}`);
//     console.log(`Цена: ${price} руб.`);
//     console.log(`Категория: ${category}`);
//     console.log(`Есть в наличии: ${inStock}`);
// }
// printProduct(product);

// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);
// const copy = [...arr1];
// console.log("Копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");
// const person = {
//     name: "Иван",
//     age: 30,
// };
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);
// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1, 2, 3:", sum(1, 2, 3));
// console.log("Сумма 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const nums1 = [10, 20, 30, 40, 50];
// const nums2 = [60, 70, 80, 90, 100];
// const nums = [...nums1, ...nums2];
// console.log(nums);
// function findMax(...numbers) {
//     return numbers.reduce((max, num) => {
//         return num > max ? num : max;
//     }, numbers[0])
// }
// console.log(findMax(10, 20, 30, 40, 50));
// const product = {
//     name: "Милка",
//     price: 124,
// };
// const productInfo = {
//     category: "Сладости",
//     inStock: true,
// };
// const combined = { ...product, ...productInfo };
// console.log(combined);

// import { greet, add, PI } from "./utils.js";
// console.log("Модули");
// console.log(greet("Адексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("значение PI:", PI);
// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));
// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import { square, cube, E } from "./math.js";
// console.log(square(2));
// console.log(cube(2));
// console.log(E);

// console.log("Промисы");
// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Операция выполнена успешно!");
//     } else {
//         reject("Произошла ошибка!");
//     }
// });
// simplePromise
//     .then((result) => console.log("Результат:", result))
//     .catch((error) => console.log("Ошибка:", error));
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
// delay(1000)
//     .then((message) => console.log(message));
// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Иван Иванов",
//                     email: "ivan@example.com",
//                 });
//             } else {
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500);
//     });
// }
// fetchUserData(1)
//     .then((user) => console.log("Пользователь:", user))
//     .catch((error) => console.log("Ошибка:", error));
// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Шаг 1 завершён"), 500);
//     });
// }
// function step2(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
//     });
// }
// function step3(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//     });
// }
// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Финальный результат:", finalResult))
//     .catch((error) => console.log("Ошибка в цепочке:", error));

// function checkInventory(product) { 
//     const inventory = ["Шоколад", "Какао", "Молоко", "Мандарины"]
//     return new Promise((resolve, reject) => {
//         if (inventory.includes(product)) {
//             resolve(`Товар ${product} есть в наличии`);
//         } else {
//             reject(`Товара ${product} нет в наличии`);
//         }
//     });
// }
// checkInventory("Шоколад")
//     .then((result) => console.log("Результат:", result))
//     .catch((error) => console.log("Ошибка:", error));
// checkInventory("Бананы")
//     .then((result) => console.log("Результат:", result))
//     .catch((error) => console.log("Ошибка:", error));

// console.log("Async/Await");
// async function greet() {
//     return "Привет!";
// }
// greet().then((message) => console.log(message));
// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }
// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }
// showWeather();

// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800);
//     });
// }
// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);

//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }
// getData();

// async function cookDinner() {
//     console.log("Начинаем готовить...");

//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);

//     const sauce = await delay(500).then(() => "Соус готов");
//     console.log(sauce);

//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);

//     return "Ужин готов!";
// }
// cookDinner().then((result) => console.log(result));
// async function cookDinnerFast() {
//     console.log("Готовим всё одновременно...");

//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салат готов"),
//     ]);

//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// }
// cookDinnerFast().then((result) => console.log(result));

async function processOrder(notAvailable, notDone) {
    try {
        let availability = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (notAvailable) {
                    reject("Товара нет в наличии");
                } else {
                    resolve("Товар есть в наличии");
                }
            }, 1000);
        });
        console.log(availability);
        let cost = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Стоимость товара: 2300 руб.");
            }, 1000);
        });
        console.log(cost);
        let confirm = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (notDone) {
                    reject("К сожалению, мы не смогли подтвердить заказ");
                } else {
                    resolve("Заказ подтверждён");
                }
            }, 1000);
        });
        console.log(confirm);

        console.log("Спасибо за заказ");
    } catch (error) {
        console.log("Ошибка:", error);
    }
}
processOrder(false, false);