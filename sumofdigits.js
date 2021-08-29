"use strict"
const num = 379
let sum = 0
let firstDigit = String(num).charAt(0);
let secondDigit = String(num).charAt(1);
let thirdDigit = String(num).charAt(2);
firstDigit = parseInt(firstDigit);
secondDigit = parseInt(secondDigit);
thirdDigit = parseInt(thirdDigit);
sum = firstDigit + secondDigit + thirdDigit;
console.log(sum)
//I found a .Math solution online, but I wanted to solve this one without .Math