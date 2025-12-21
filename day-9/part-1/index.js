const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter input (press Enter then Ctrl+D when done):");

let input = "";

rl.on("line", (line) => {
  input += line + "\n";
});

rl.on("close", () => {
  const payload = input.trimEnd().split("\n");
  const coords = payload.map((line) => line.split(",").map(Number));

  let maxArea = 0;

  for (let i = 0; i < coords.length; i++) {
    for (let j = 1; j < coords.length - 1; j++) {
      let width = Math.abs(coords[j][0] - coords[i][0]) + 1;
      let height = Math.abs(coords[j][1] - coords[i][1]) + 1;
      let area = width * height;

      if (area > maxArea) maxArea = area;
    }
  }

  console.log("Answer: ", maxArea);
});
