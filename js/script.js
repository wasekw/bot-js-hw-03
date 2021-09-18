// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }
//   console.log(total);
//   return total;
// }
// multiply(1, 2, 3);
// // console.log(multiply(1, 2, 3)); //  6
// // console.log(multiply(1, 2, 3, 4)); //  10
// // console.log(multiply(1, 2, 3, 4, 5)); //  15
// Описание объекта

// const apartment = {
//  imgUrl: "https://via.placeholder.com/640x480",
//  descr: "Spacious apartment in the city center",
//  rating: 4,
//  price: 2153,
//  tags: ["premium", "promoted", "top"],
// } ;

// Добавление объекта в объект

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.owner.name);

// Добавление свойств в объект

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// Короткая запись свойств в объект product

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// Добавление в объект свойства имя которого мы точно не знаем

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// Перебор объекта циклом for...in

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//  keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Проверка объекта на собственные свойства hasOwnProperty

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }
// }

// Подсчет собственных свойств объекта.

// function countProps(object) {
//   let propCount = 0;

// for ( const key in object) {
//  if (object.hasOwnProperty(key)) {
//   propCount += 1;
//  }
// }
//   return propCount;
// }

// Вывод свойств и их значений из объекта используя массив for of

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);

// Подсчет колличества свойств из объекта

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//    propCount += 1;
//   }
//   return propCount;
// }
// Второй метод

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   propCount = keys.length;
//   console.log(propCount);
//   return propCount;
// }

// Получение массивов свойств и значений из объекта

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// Запись функции расчета зарплат из объекта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//  const keys = Object.keys(salaries);
//   for (const key of keys) {
//   totalSalary += salaries[key];
//   }
//   return totalSalary;
// }

// Перебор массива объекта

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// Перебор массива объекта

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     console.log(product);
//     if (product.name === productName) {
//       const getProductPrice = product.price;
//       return getProductPrice;
//     }
//   }
//   return null;
// }
// getProductPrice("Radar");

// Выбор значений определенного ключа из массива объектов

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const getAllProperty = [];
//   for (const product of products) {
//     for (const key in product) {
//       if (key !== propName) {
//         continue;
//       }
//       getAllProperty.push(product[key]);
//     }
//   }
//   console.log(getAllProperty);
//   return getAllProperty;
// }

// getAllPropValues("price");

// const user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Peter";
// delete user.name;
// console.log(user);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// const salaryArray = Object.values(salaries);
// console.log(salaryArray);
// for (let salary of salaryArray) {
//   sum += salary;
// }
// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(object) {
//   for (let key in object) {
//     if (typeof object[key] === "number") {
//       object[key] *= 2;
//     }
//     continue;
//   }
//   console.log(object);
// }

// multiplyNumeric(menu);

// Перебор массива объектов.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//  for (let product of products) {
//    if (product.name === productName) {
//      return product.price * product.quantity;
//    }
//  }
//   return 0;
// }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Деструктуризация свойств объекта

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Деструктуризация свойств объекта 2

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Деструктуризация с заменой имени переменной

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Деструктуризация в теле цикла for...of

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// Глубокая Деструктуризация объекта с двумя вложеными объектами

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// Глубокая Деструктуризация при вызове функции

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });

// Использование распыления и метода Math.max and Math.min нахождение самого большого и самого малого элемента массива

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// Метод spread для создания массива из нескольких массивов

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Распыление свойств двух объектов при создании нового объекта

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   let makeNewTask = {};
//   makeNewTask = { completed, category, priority, ...data };
//   return makeNewTask;
// или так можно сократить код
// //   return = {completed, category, priority, ...data};
// // }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
//   // Change code above this line
// }

// add(74, 11, 62, 46, 12, 36);

// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (number < arg) {
//       total += arg;
//     }
//   }
//   return total;
// }
// Перебор двух массивов и поиск в них одинаковых элементов и запись их в пустой массив
// function findEqualObjects(someArray, otherArray) {
//     var equalObjects = [];

//     someArray.forEach(function(elementOfSomeArray) {
//         otherArray.forEach(function(elementOfOrherArray){
//             if (JSON.stringify(elementOfSomeArray) === JSON.stringify(elementOfOrherArray)) {
//                 equalObjects.push(elementOfOrherArray);
//             }
//         });
//     });

//     return equalObjects;

// function findMatches(array, ...arg) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < array.length; i += 1) {
//     let a = array[i];
//     for (let j = 0; j < arg.length; j += 1) {
//       if (a === arg[j]) {
//         matches.push(arg[j]);
//         break;
//       }
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     let index = this.books.indexOf(oldName);

//     this.books.splice(index, 1, newName);
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {

//     this.potions.push(potionName);
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const indexPotion = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotion, 1);
//   },
// };
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {

//     const indexChangePotion = this.potions.indexOf(oldName);
//     this.potions.splice(indexChangePotion, 1, newName);
//   },
// };

//  Работа с массивом объектов встроеными методами

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

// getPotions() {
//   return this.potions;
// },
// addPotion(newPotion) {
//   for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//   }
//   this.potions.push(newPotion);
// },
// removePotion(potionName) {
//   let removeIndex;
//   for (const potion of this.potions) {
//     if (potion.name === potionName) {
//       removeIndex = this.potions.indexOf(potion);
//       this.potions.splice(removeIndex, 1);
//       break;
//     }
//   }
//   return `Potion ${potionName} is not in inventory!`;
// },
// updatePotionName(oldName, newName) {
//   for (const potion of this.potions) {
//     if (potion.name === oldName) {
//       potion.name = newName;
//       break;
//     }
//   }
//   return `Potion ${oldName} is not in inventory!`;
// },
// };
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad);
