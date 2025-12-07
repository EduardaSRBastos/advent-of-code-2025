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
  const chars = payload.map(a => a.split(""));
  const sIndex = chars[0].findIndex(s => s == "S");

  let grid = [];
  grid.push([1, sIndex]);
  let splitters = [];
  let beams = [];
  let count = 0;

  while (grid.length != 0) {
    let [r, c] = grid.shift();
    let alreadyProcessed = false;

    for (let b of beams) {
      if (b[0] == r && b[1] == c) {
        alreadyProcessed = true;
        break;
      }
    }
    if (alreadyProcessed) continue;
    beams.push([r, c]);

    if (r < 0 || r >= payload.length || c < 0 || c >= chars[0].length) continue;

    let char = chars[r][c];

    if (char == ".") grid.push([r+1, c]);
    else if (char == '^') {
      let found = false;
      for (let s of splitters) {
        if (s[0] === r && s[1] === c) {
          found = true;
          break;
        }
      }
      if (!found) {
        splitters.push([r, c]);
        count++;
      }
      grid.push([r+1, c-1]);
      grid.push([r+1, c+1]);
    } else continue;
  }

  console.log('Answer: ', count);
});
