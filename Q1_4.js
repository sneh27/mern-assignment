//Assignment - 1 
//Sneh Aashish Gupta
//Q4

let curr_even = 2 //Starting value
let skip_till_max = 5 //Max Odd Jumps

/*
In this program the max odd jumps is 3 
i.e. sequence is: 2 (1 Jump) 6 (3 jumps) 14
*/
let curr_odd_jump = 1;
let counter = 1;
let flag = false;
console.log(2); //Irrespective of 0 or n jumps
while(curr_odd_jump <= skip_till_max) {
    if (flag) {
        curr_even += 2;
        console.log(curr_even);
        flag = false;
        curr_odd_jump += 2;
    } else {
        curr_even += 2;
        counter++;
        if (counter > curr_odd_jump) {
            counter = 1;
            flag = true;
        }
    }
}
/*
When skip_till_max = 3
2
4 - 1/1 Jump - Counter = 1
6
8  - 1/3 Jump - Counter = 1
10 - 2/3 Jump - Counter = 2
12 - 3/3 Jump - Counter = 3
14
*/