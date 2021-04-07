//A -> Star Up Triangle Pattern

let rows_a = 5;//prompt("Enter the size for star up triangle pattern");

for (let i = 1; i <= rows_a; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*\t");
    }
    process.stdout.write("\n");
}



process.stdout.write("\n\n");