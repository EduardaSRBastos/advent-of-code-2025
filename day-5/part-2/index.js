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
  const payload = input.split("\n");
  const range = payload.slice(0, payload.indexOf(""));

  const ranges = range.map(r => {
    let min = BigInt(r.slice(0, r.indexOf("-")));
    let max = BigInt(r.slice(r.indexOf("-") + 1));
    return { min, max };
  });

  ranges.sort((a,b) => (a.min < b.min ? -1 : 1));

  let lastMax = -1n;
  let total = 0n;

  for (let r = 0; r < ranges.length; r++) {
    let min = ranges[r].min;
    let max = ranges[r].max;
  
    if (min <= lastMax) 
      min = lastMax + 1n;
    
  
    if (max >= min) 
      total = total + max - min + 1n;
  
    if (max > lastMax) 
      lastMax = max;
  }

  console.log('Answer: ', total.toString());
});
