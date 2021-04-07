process.stdout.write("\n\n");

// B -> Numbered Up Triangle Pattern

let rows_b = 5;//prompt("Enter the size for numbered up triangle pattern");
let i_2 = 1;

while (i_2 <= rows_b) {
    let j_2 = 1;
    while (j_2 <= i_2) {
        process.stdout.write(j_2+"\t");
        j_2++;
    }
    process.stdout.write("\n");
    i_2++;
}