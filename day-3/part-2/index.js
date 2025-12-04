let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const banks = input.split("\n");

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
