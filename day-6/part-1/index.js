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
  const nums = payload.slice(0, payload.length-1).map(row => row.match(/\d+/g));

  let problems = [];
    
  for (let o = 0; o < op.length; o++) {
    let group = [];
    for (let n = 0; n < nums.length; n++) {
      group.push(nums[n][o]+ op[o]);
    }
    problems.push(eval(group.join("").slice(0, -1)))
  }
  
  let sum = 0;
  problems.map (p => sum += p);

  console.log('Answer: ', sum);
  console.log('Problems: ', problems);
});
