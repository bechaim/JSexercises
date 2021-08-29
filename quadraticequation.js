"use strict"
const a = 1; 
const b = -2; 
const c = -3;
let solutionA = 0;
let solutionB = 0;
solutionA = (-b+(b**2-4*a*c)**0.5)/(2*a) //X1, Addition after 'b'
solutionB = (-b-(b**2-4*a*c)**0.5)/(2*a) //X2, Subtraction after 'b'
console.log(solutionA, solutionB);