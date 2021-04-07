

process.stdout.write("\n\n");

// C -> Numeric Palindrome Pyramid (1-Indexed)

let rows_c = 5;//prompt("Enter the size for numeric palindrome pyramid (1-indexed)");
let i_3 = 1;

/*

* 1-Indexed Array is array of nums starting from 1 till Main Num (exclusive)
        1           //4 Tabs - Main Num (= 1)
      1 2 1         //3 Tabs - 1-Indexed Array - Main Num(= 2) - Reverse 1-Indexed Array
    1 2 3 2 1       //2 Tabs - 1-Indexed Array - Main Num(= 3) - Reverse 1-Indexed Array
  1 2 3 4 3 2 1     //1 Tab  - 1-Indexed Array - Main Num(= 4) - Reverse 1-Indexed Array
1 2 3 4 5 4 3 2 1   //0 Tab  - 1-Indexed Array - Main Num(= 5) - Reverse 1-Indexed Array
* From pattern no. of tabs = total_rows - main_num
*/

while (i_3 <= rows_c) {
    for (let tab_spaces = 0; tab_spaces < rows_c-i_3; tab_spaces++) {
        process.stdout.write("\t");
    }
    for (let indexedArr = 1; indexedArr < i_3; indexedArr++) {
        process.stdout.write(indexedArr+"\t");
    }
    process.stdout.write(i_3+"\t");
    for (let revIndexedArr = i_3-1; revIndexedArr > 0; revIndexedArr--) {
        process.stdout.write(revIndexedArr+"\t");
    }
    process.stdout.write("\n");
    i_3++;
}