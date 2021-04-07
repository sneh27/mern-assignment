let n = 5, i, j, min;

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i < j) {
            min = i;
        } else {
            min = j;
        }
        process.stdout.write(N-min+1);
    }
    process.stdout.write("\n");
}