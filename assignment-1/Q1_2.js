//Assignment - 1 
//Sneh Aashish Gupta
//Q2

let amount = prompt("Enter the amount");
let rate = prompt("Enter the interest rate");
let time = prompt("Enter the time of loan period");
let payback = amount * (1+((rate/100)*time));
console.log("Pay up "+payback+" buddy you took a loan of "+amount+" at simple annual interest rate of "+rate+" for "+time+" years...");