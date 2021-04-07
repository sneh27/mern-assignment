let n = 5, i, j, min;


  
for (i = 1; i <= N; i++) 
    {
        for (j = 1; j <= N; j++)
        {
            if (i < j) {
            	min = i;
            } else {
            	min = j;
            }
            process.stdout.write(N - min + 1);
        }
        for (j = N - 1; j >= 1; j--)
        {
            if (i < j) {
            	min = i;
            } else {
            	min = j;
            }
            process.stdout.write(N - min + 1);
        }
        process.stdout.write("\n");
    }
      
    for (i = N - 1; i >= 1; i--) 
    {
        for (j = 1; j <= N; j++) 
        {
            if (i < j) {
            	min = i;
            } else {
            	min = j;
            }
            process.stdout.write(N - min + 1);
        }
        for (j = N - 1; j >= 1; j--) 
        {
            if (i < j) {
            	min = i;
            } else {
            	min = j;
            }
            process.stdout.write(N - min + 1);
        }
        process.stdout.write("\n");