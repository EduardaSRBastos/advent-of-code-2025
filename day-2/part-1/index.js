const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Enter input (press Enter then Ctrl+D when done):");

let input = '';

rl.on("line", line => {
  if (line.trim()) input += line + '\n';
});

rl.on("close", () => {
  const payload = input.replace(/\n/g, "").trim().split(",");
  const range = payload.map(range => ({
    min: Number(range.split("-")[0]),
    max: Number(range.split("-")[1])
  }));
  
  let sum = 0;
  
  for (let r = 0; r < range.length; r++) {
    for (let num = range[r].min; num <= range[r].max; num++) {
      let s = String(num);
      let firstHalf = s.slice(0, s.length / 2);
      let secondHalf = s.slice(s.length / 2);
      
      if (firstHalf == secondHalf)
        sum+=Number(s);
    }
  }

  console.log('Answer: ', sum);
});
