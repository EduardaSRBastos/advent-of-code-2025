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
  const banks = input.split("\n").filter(Boolean);

  const batteries = banks.map(battery => {        
    const nums = battery.split("").map(Number);  
    const max = [];
    const pos = [];

    return { nums, max, pos };
  });

  let joltages = [];
  let sum = 0;

  for (let i = 0; i < batteries.length; i++) {
    let battery = batteries[i];

    for (let j = 0; j < battery.nums.length; j++) {
      while (
        battery.nums[j] > battery.max[battery.max.length - 1] &&
        battery.max.length - 1 + (battery.nums.length - j) >= 12
      ) {
        battery.max.pop();
        battery.pos.pop();
      }

      if (battery.max.length < 12) {
        battery.max.push(battery.nums[j]);
        battery.pos.push(j);
      }
    }

    joltages.push(Number(battery.max.join('')));
    sum += joltages[i];
  }

  console.log('Answer: ', sum);
  console.log('Joltages: ', joltages);
});
