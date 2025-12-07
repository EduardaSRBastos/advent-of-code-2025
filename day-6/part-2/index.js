const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Enter input (press Enter then Ctrl+D when done):");

let input = '';

rl.on("line", line => {
  input += line + '\n';
});

rl.on("close", () => {
  const payload = input.trimEnd().split("\n");
  const op = payload[payload.length-1].match(/[+*]/g);
  const nums = payload.slice(0, -1).map(row => row.split(''));
  const problemIndices = [];
  let problems = [];
  let i = 0;
  
  while (i < nums[0].length) {
    if (nums.some(r => r[i] !== ' ')) {
      problemIndices.push(i);
      while (i < nums[0].length && nums.some(r => r[i] !== ' ')) i++;
    } else i++;
  }
  
  for (let p = 0; p < problemIndices.length; p++) {
    const columns = nums.map(row => row.slice(problemIndices[p], problemIndices[p + 1]).join(''));
    
    const numbers = [];
    for (let col = 0; col < columns[0].length; col++) {
      let numStr = '';
      for (let row = 0; row < columns.length; row++) {
        if (columns[row][col] && columns[row][col] !== ' ') numStr += columns[row][col];
      }
      if (numStr.length > 0) numbers.push(Number(numStr)+op[p]);
    }

   problems.push(eval(numbers.join("").slice(0, -1)))
  }
  
  let sum = 0;
  problems.map (p => sum += p);

  console.log('Answer: ', sum);
  console.log('Problems: ', problems);
});
