let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.split("\n").map(row => row.split(""));

  const dirs = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];

  let sum = 0;
  let removed = 0;
  
  while (true) {
    
    for (let r = 0; r < payload.length; r++) {
      for (let c = 0; c < payload[r].length; c++) {
        let counter = 0;
        
        for (let [dr, dc] of dirs) {
          const nr = r + dr;
          const nc = c + dc;
        
          if (nr >= 0 && nr < payload.length &&
            nc >= 0 && nc < payload[nr].length) {
              
              if (payload[nr][nc] == "@") counter++;
          }
        }
        
        if (payload[r][c] == "@" && counter < 4  ) {
          payload[r][c] = ".";
          sum++;
          removed++;
        }
       
      }
    }
    
    if (removed == 0) break; else removed = 0;
  }

  console.log('Answer: ', sum);
  console.log('Diagram: ', payload);
});
