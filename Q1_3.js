//Assignment - 1 
//Sneh Aashish Gupta
//Q3
/*

SELF-ATTEMPTs

function solve_gcd(a, b){
    if (a == 0) return b;
    return solve_gcd(b%a,a);
}
let a = 10;
let b = 15;
let g;
g = solve_gcd(a,b);
console.log("The GCD of "+a+" and "+b+" is "+g);

*/

//https://www.tutorialspoint.com/euclidean-algorithm-for-calculating-gcd-in-javascript

let n1 = prompt("Enter 1st number");
let n2 = prompt("Enter 2nd number");
let gcd = 1;
let i = 1;
let j = null;

if (n1 > n2) {
    j = n2;
} else j = n1;

while (i <= j) {
    if (n1%i == 0 && n2%i == 0) {
        gcd = i;
    }
    i++;
}
console.log(gcd);