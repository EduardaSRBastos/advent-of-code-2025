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
  let memo = [];

  function countTimelines(r, c){
    const key = r + ',' + c;
    if (memo[key] != undefined) return memo[key];

    if (r < 0 || r >= payload.length || c < 0 || c >= chars[0].length) return 1;

    if (chars[r][c] == '.')
        memo[key] = countTimelines(r+1, c);
    else if (chars[r][c] == '^')
        memo[key] = countTimelines(r+1, c-1) + countTimelines(r+1, c+1);
    else
        memo[key] = 1;

    return memo[key];
  }

  console.log('Answer: ', countTimelines(1, sIndex));
});
