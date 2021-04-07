process.stdout.write("\n\n");

// E -> Pascal Triangle
let rows_e = 5; //prompt("Enter the size for Pascal Triangle");
let i_5 = 0, coef;

/*
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1

* Total nums per row = row index
* Num 1 and Num Last (Num Last is number at (row index)th pos) is 1
* Rest Numbers are given by (Num_PrevRow_SamePos + Num_PrevRow_SamePos-1)
  (COULDN"T FIGURE THE WHILE LOOP SOLN)
  Reference: https://www.programiz.com/c-programming/examples/pyramid-pattern
*/

while (i_5 <= rows_e) {
    let j = 0;
    while (j <= i_5) {
        if (j == 0 || i_5 == 0) {
            coef = 1;
        } else {
            coef = Math.floor((coef * (i_5 - j + 1))/j);
        }
        process.stdout.write(coef+"\t");
        j++;
    }
    process.stdout.write("\n");
    i_5++;
}