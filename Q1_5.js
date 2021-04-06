//Assignment - 1 
//Sneh Aashish Gupta
//Q5

let num = 12345;
let digits = 0;
let orig = num;

while (num > 0) {
    digits++;
    //num /= 10; 
    /*
    digits value was 328
    Terminal O/P
        1234.5
        123.45
        12.345
        1.2345000000000002
        0.12345000000000002
        0.012345000000000002
        0.0012345000000000001
        0.00012345000000000002
        0.000012345000000000001
        0.0000012345000000000002
        1.2345e-7
        1.2345e-8
        1.2345e-9
        1.2345e-10
        1.2345e-11
        1.2345e-12
        1.2345e-13
        1.2345e-14 ...............
    */
   num = Math.floor(num/10);
}

console.log("The number of digits in "+orig+" is "+digits);

//https://dev.to/cesareferrari/calculate-the-number-of-digits-with-a-while-loop-in-javascript-53o