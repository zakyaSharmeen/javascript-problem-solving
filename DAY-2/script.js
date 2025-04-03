// //1- function expression--function inside a variable
// const greet = function (name) {
//   console.log(`Hello, ${name}!`);
// };
// greet("Alice"); // Output: Hello, Alice!

// // 2-annonymous- no name given to function
// const greet = function () {
//   console.log("Hello, World!");}
//   greet(); // Output: Hello, World!

// 3-named function--function with name
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }
// greet("Alice"); // Output: Hello, Alice!

// 4-arrow function--shorter syntax for writing functions
// const add = (x, y) => x + y;
// console.log(add(5, 3)); // Output: 8

// const sub =(x, y) => x - y;
// console.log(sub(5, 3)); // Output: 2

// 5-iife--immediately invoked function expression
// (function(){
//     console.log("This function runs immediately!");
//     // You can also return a value from an IIFE
//     return "IIFE executed!";
// })()

// with paramter
// (function(name){
//     console.log(`Hello, ${name}!`);

// }
// )("alice") // Output: Hello, alice!

// // with return value
// const res= (function(){
//     const x= 1
//     const y= 2
//     return x+y;
// })()

// console.log(res); // Output: 3

// with function
// (()=>{
//     console.log("This function runs immediately!");

// })()

// -------------------------
// filter---
// filter ele by a condition
// new array  return

// 1- filter the even numbers from the array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.filter(function (val) {
//     if(val % 2 == 0) {
//         console.log(val);
//     }

// })
// // ouytput: 2,4,6,8,10

// 2. Use map() to square each number in an array

// const numbers = [1, 2, 3, 4, 5];
// numbers.map(function(val){
//     console.log(val*val);
// })
// // Output: 1,4,9,16,25

// 3. Use filter() to get strings longer than 3 characters

// const words = ["cat", "lion", "dog", "elephant"];
// words.filter(function (val) {
//   if (val.length > 3) {
//     console.log(val);
//   }
// });

// // Output: lion,elephant

//  4. Use map() to add "Mr." in front of each name
// const names = ["John", "Alex", "Sam"];

// names.map(function(val){
//     console.log("mrs" + val);

// })

// 5-use map n filter both
// filter the even numbers and then multiply 2 them
// const numbers = [1, 2, 3, 4, 5, 6];
// const filtered = numbers.filter(function (val) {
//   if (val % 2 == 0) {
//     return val;
//   }
// });
// console.log(filtered);

// filtered.map(function (mapval) {
//   console.log(2 * mapval);
// });
// Output: 4,8,12
