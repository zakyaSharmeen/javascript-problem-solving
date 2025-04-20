// let a = 5;
// let b = 10;
// let sum = a + b;

// console.log(sum); // Output: 15

// ----------------------------------------------------------------------------
// let a = parseFloat(prompt("Enter first number:"));
// let b = parseFloat(prompt("Enter second number:"));
// let sum = a + b;

// console.log(`The sum is: ${sum}`);
// alert(`The sum is: ${sum}`);

// -----------------------------------------------------------------------------
// do this afterwords--------------(foreach)

// 1-Given an array [1, 2, 3, 4, 5], use forEach() to print each number.--done
// 2-Use forEach() to find the sum of all elements in an array [10, 20, 30, 40].
// 3-Given an array ["apple", "banana", "cherry"], use forEach() to print each fruit in uppercase.
// 4-Use forEach() to count how many numbers in [5, 10, 15, 20, 25, 30] are greater than 15.
// 5-Given an array ["a", "b", "c", "d"], use forEach() to create a string of all elements joined together.
// 6-Write a function that uses forEach to double each number in an array.

// 7-Count the Number of Vowels in a String
// Write a function that counts the number of vowels (a, e, i, o, u) in a given string using forEach.

// 8-Find the First Duplicate in an Array
// Write a function that finds the first duplicate value in an array using forEach.

// 9-Convert an Array of Strings to Uppercase
// Write a function that converts all words in an array to uppercase using forEach.

// 10-Count the Frequency of Each Element in an Array
// Write a function that counts how many times each element appears in an array using forEach.
// /--------------------------------------------------------------------------------------------------------

// hw to accessa an array
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);

// foreach
// 1- add 2 value in each element of array
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (val) {
//   console.log(val + 2);
// });
// 2-print each element with hello in the start
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (val) {
//   console.log("Hello" + val);
// });

// 3-print the elemnt which r greater than 2
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (val) {
//   if (val > 2) {
//     console.log(val);
//   }
// });

// 4-print the sum of the elemnets
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(function (val) {
//   sum = sum + val;
//   console.log(sum);
// });

// 5-add all the elment except the string present
// let numbers = [1, 2, "3", "4", 5];
// let sum = 0;

// numbers.forEach(function (val) {
//   if (typeof val !== "string") {
//     sum = sum + val;
//     console.log(sum);
//   }
// });

//  1-Given an array [1, 2, 3, 4, 5], use forEach() to print each number.
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (val) {
//   console.log(val);
// });

// 2-Use forEach() to find the sum of all elements in an array [10, 20, 30, 40].
// let numbers = [10, 20, 30, 40];
// let sum = 0;
// numbers.forEach(function (val) {
//   sum = sum + val;
//   console.log(sum);
// });
// 3-Given an array ["apple", "banana", "cherry"], use forEach() to print each fruit in uppercase.
// let fruits = ["apple", "banana", "cherry"];
// fruits.forEach(function (val) {
//   console.log(val.toUpperCase());
// });

// 4-Use forEach() to count how many numbers in [5, 10, 15, 20, 25, 30] are greater than 15.
// let numbers = [5, 10, 15, 20, 25, 30];
// numbers.forEach(function (val) {
//   if (val > 15) {
//     console.log(val);
//   }
// });

// 5-Given an array ["a", "b", "c", "d"], use forEach() to create a string of all elements joined together.
// let letters = ["a", "b", "c", "d"];
// let str = "";
// letters.forEach(function (val) {
//   str = str + val;
//   console.log(str);
// });

// 6-Write a function that uses forEach to double each number in an array.
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (val) {
//   console.log(val * 2);
// });
// 7-Count the Number of Vowels in a String
// let str = "elephantumbrellayiuiyfygygweyrtuyo";
// let count = 0;
// let vowels = ["a", "e", "i", "o", "u"];
// let strArr = str.split("");
// strArr.forEach(function (val) {
//   if (vowels.includes(val)) {
//     count = count + 1;
//     console.log(count);
//   }
// });

// 8-Find the First Duplicate in an Array
// make me understand wht done here
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
// let duplicate = 0;
// let obj = {};
// numbers.forEach(function (val) {
//   if (obj[val]) {
//     duplicate = val;
//     console.log(duplicate);
//   } else {
//     obj[val] = 1;
//   }
// });

// 9-Convert an Array of Strings to Uppercase
// let fruits = ["apple", "banana", "cherry"];
// fruits.forEach(function (val) {
//   console.log(val.toUpperCase());
// });

// 10-Count the Frequency of Each Element in an Array
let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let obj = {};
numbers.forEach(function (val) {
  if (obj[val]) {
    obj[val] = obj[val] + 1;
  } else {
    obj[val] = 1;
  }
});
