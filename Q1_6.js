//Assignment - 1 
//Sneh Aashish Gupta
//Q6

let number = prompt("Enter number to be reversed");
let orig = number;
let reverse = 0;
while (number > 0) {
    reverse *= 10;
    reverse += number%10;
    number -= number%10;
    number /= 10;
}
console.log("Reverse of "+orig+" is "+reverse);
/*
My failed attempt:
---
Reference: https://www.educba.com/reverse-in-javascript/
---
let digit = number%10;
reverse = (reverse*10) + (number%10);
number/=10;
*/
