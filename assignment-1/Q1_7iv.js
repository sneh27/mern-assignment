

process.stdout.write("\n\n");
// D -> Numeric Palindrome Pyramid (Row wise-Indexed)

let rows_d = 5;//prompt("Enter the size for numeric palindrome pyramid (1-indexed)");
let i_4 = 0;

/*

*Row-wise indexed array is starting from (main_odd_num - row_num + 1) till main_odd_num (exclusive)
        1           //4 Tabs - Main Odd Num (= 1)
      2 3 2         //3 Tabs - 1-Indexed Array - Main Odd Num (= 3) - Reverse 1-Indexed Array
    3 4 5 4 3       //2 Tabs - 1-Indexed Array - Main Odd Num (= 5) - Reverse 1-Indexed Array
  4 5 6 7 6 5 4     //1 Tab  - 1-Indexed Array - Main Odd Num (= 7) - Reverse 1-Indexed Array
5 6 7 8 9 8 7 6 5   //0 Tab  - 1-Indexed Array - Main Odd Num (= 9) - Reverse 1-Indexed Array
* From pattern no. of tabs = total_rows - main_num
*/

while (i_4 < rows_d) {
    
    let tab_spaces = 1;
    while ( tab_spaces < rows_d-i_4) {
        process.stdout.write("\t");
        tab_spaces++;
    } // Correct
    
    let indexedArr = i_4+1;
    while ( indexedArr < i_4*2+1) {
        process.stdout.write(indexedArr+"\t");
        indexedArr++;
    }
    
    let main_odd_num = i_4*2+1; //Correct
    process.stdout.write(main_odd_num+"\t"); //Correct
    
    let revIndexedArr = i_4*2;
    while ( revIndexedArr > i_4 ) {
        process.stdout.write(revIndexedArr+"\t");
        revIndexedArr--;
    }
    process.stdout.write("\n");
    i_4++;
}