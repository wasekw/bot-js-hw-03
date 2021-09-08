// const numbers = [1, 2, 45, 56, 78];
// console.log(numbers.unshift(66));
// console.log(numbers);
// console.log(numbers.shift());
// console.log(numbers);
// let a = 20;
// a /= 10;
// console.log(a);

// Подсчет суммы элементов массива
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let sumArray = 0;
// const lastIndex = cart.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//   sumArray += cart[i];
//   }
// console.log(sumArray);

// Второй вариант через for of
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let sumArray = 0;
// for (const value of cart) {
//   sumArray += value;
// }
// console.log(sumArray);

// Посчитать сумму всех четных элементов массива.
// const cart = [54, 28, 105, 70, 92, 17, 120, 199, 28, 99];
// let sumEven = 0;
// for (let i = 0; i < cart.length; i += 2) {
//   console.log(cart[i]);
//   sumEven += cart[i];
// }
// console.log(sumEven);

// Проверить есть ли такой логин в массиве
// const logins = ["rafa", "olya", "dima", "fedya"];
// const loginToFind = "dima";
// let message = `Пользователь ${loginToFind}  не найден`;
// // for (let i = 0; i < logins.length; i += 1) {
// //   const login = logins[i];

// //   if (login === loginToFind) {
// //     message = `Пользователь ${loginToFind}  найден`;
// //     break;
// //   }
// // }
// // console.log(message);

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind}  найден`;
//     break;
//   }
// }
// console.log(message);

// console.log(logins.includes("dima"));
// const logins = ["rafa", "olya", "dima", "fedya"];
// const loginToFind = "dima";
// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind}  найден`
//   : `Пользователь ${loginToFind} не найден`;
// console.log(message);

// Поиск самого маленького числа в массиве
// const numbers = [54, 28, 105, 70, 92, 17, 120, 199, 2, 28, 99];
// let minNum = numbers[0];
// for (i = 0; i < numbers.length; i += 1) {
//   if (minNum > numbers[i]) {
//     minNum = numbers[i];
//   }
// }
// console.log(minNum);

// Second variant
// const numbers = [54, 28, 105, 70, 92, 17, 120, 199, 2, 28, 99];
// let minNum = numbers[0];
// for (const number of numbers) {
//   if (minNum > number) {
//     minNum = number;
//   }
// }
// console.log(minNum);

// Найти самое большое число
// const numbers = [54, 28, 105, 70, 92, 17, 120, 199, 2, 28, 99];
// let maxNumber = numbers[0];
// for (const number of numbers) {
//   if (maxNumber < number) {
//     maxNumber = number;
//   }
// }
// console.log(maxNumber);

// Соеденить элементы массива в одну строку
// const friends = ["Mango", "Ajax", "Loya", "Filip"];
// let arrayString = "";
// for (const friend of friends) {
//   arrayString += friend;
// }
// console.log(arrayString);

// Соеденить элементы массива используя метод join
// const friends = ["Mango", "Ajax", "Loya", "Filip"];
// console.log(friends.join("-"));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   const newArray = [firstElement, lastElement];
//   return newArray;
// }

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   const totalPriceAllWord = message.split(" ").length * pricePerWord;
//   return totalPriceAllWord;
// }

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   console.log(slug);
//   return slug;
// }

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   }
//   console.log(newArray);
//   return newArray;
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);

// Цикл for как применять. Синтаксис
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let summer = 0;
//   for (number; number > 0; number -= 1) {
//     summer += number;
//   }
//   console.log(summer);
//   return summer;
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(34);
// calculateTotal(111);

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// function findLongestWord(string) {
//   const arrayWords = string.split(" ");
//   let longWord = arrayWords[0];
//   for (i = 0; i < arrayWords.length; i += 1) {
//     if (longWord.length < arrayWords[i].length) {
//       longWord = arrayWords[i];
//     }
//   }
//   console.log(longWord);
//   return longWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = 0; i <= max - min; i += 1) {
//     numbers.push(min + i);
//   }
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 98);

// function filterArray(numbers, value) {
//    // Change code below this line
// const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 20);

// function getCommonElements(array1, array2) {
//   const commonArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       commonArray.push(array1[i]);
//     }
//   }
//   console.log(commonArray);
//   return commonArray;
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function getEvenNumbers(start, end) {
//   const evenNumbersArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbersArray.push(i);
//     }
//   }
//   return evenNumbersArray;
// }

// function includes(array, value) {
//   for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }
