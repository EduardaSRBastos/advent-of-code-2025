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
  let ids = [];
  
  for (let r = 0; r < range.length; r++) {
    for (let num = range[r].min; num <= range[r].max; num++) {
      let s = String(num);
      
      for (let l = 1; l <= s.length / 2; l++) {
        let pattern = s.substring(0,l);
        
        if(pattern.repeat(s.length / l) == s) {
          sum+=Number(s);
          ids.push(s);
          break;
        }  
      }
    }
  }

  console.log('Answer: ', sum);
  console.log('IDs: ', ids);
});
