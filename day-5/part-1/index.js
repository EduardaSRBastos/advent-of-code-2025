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
  const ids = payload.slice(payload.indexOf("")).filter(a=>a!="");

  let freshIds = [];

  for(let i = 0; i < ids.length; i++) {
    for(let r = 0; r < range.length; r++) {
      let min = BigInt(range[r].slice(0, range[r].indexOf("-")));
      let max = BigInt(range[r].slice(range[r].indexOf("-")).replace("-",""));
      
      if (ids[i] >= min && ids[i] <= max) {
        freshIds.push(ids[i]); 
        break;
      }
    }
  }

  console.log('Answer: ', freshIds.length);
});
