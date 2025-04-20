// alert("hii i m created");

// q-1 -Write a program to check whether a number is even or odd.
// let num = 5;
// let num = Number(prompt("Enter a number: "));
// if (num % 2 == 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }

// q-2- eligibility to vote
// let num = Number(prompt("Enter a number: "));
// if (isNaN(num)) {
//   console.log("please enter a number");
// } else if (num >= 18) {
//   console.log("eligible to vote");
// } else {
//   console.log("foot re nhi de sakta vote");
// }

// q-3 - payable amount after discount calculation
// logic
// discont fromula -- math.floor((original price * discount )/ 100)= discounted price
// payable amount = original - discount price
// = price -math.floor(( price * 5 )/ 100)
let price = Number(prompt("Enter the price of the product: "));
// if (isNaN(price)) {
//   console.log("please enter a number");
// } else if (price > 0 && price <= 5000) {
//   console.log("no discount");
// } else if (price > 5000 && price <= 7000) {
//   console.log(price - Math.floor((price * 5) / 100));
// } else if (price > 7000 && price <= 9000) {
//   console.log(price - Math.floor((price * 10) / 100));
// } else if (price > 9000) {
//   console.log(price - Math.floor((price * 20) / 100));
// }

// let dis = 0;
// if (isNaN(price)) {
//   console.log("please enter a number");
// } else if (price > 0 && price <= 5000) {
//   dis = 0;
// } else if (price > 5000 && price <= 7000) {
//   dis = 5;
// } else if (price > 7000 && price <= 9000) {
//   dis = 10;
// } else if (price > 9000) {
//   dis = 20;
// }
// console.log("the payable price is-", price - Math.floor((price * dis) / 100));

// q-4 electricity bill calculation
// upto 100 = 4 per unit
// 101-200 = 6 per unit
// 201-400 = 8 per unit
// more than 400 = 13 per unit
// ex- 700 unit
// price - given condition = substracted price * giev price per unit

// 700-400= 300 => 300*13= 3900
// left 400
// 400-200 = 200 => 200*8 = 1600
// // left 200
// 200-100 = 100 => 100*6 = 6f00
// // left 100
// 100-0 = 100 => 100*4 = 400
