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

    const firstMax = Math.max(...nums.slice(0, -1));
    const firstPos = nums.indexOf(firstMax);

    max.push(firstMax);
    pos.push(firstPos);

    return { nums, max, pos };
  });

  let joltages = [];
  let sum = 0;

  for (let i = 0; i < batteries.length; i++) {
    let nextMax = 0;

    for (let j = batteries[i].pos[0] + 1; j < batteries[i].nums.length; j++) {
      if (nextMax < batteries[i].nums[j]) {
        nextMax = batteries[i].nums[j];
      }
    }

    batteries[i].max.push(nextMax);
    joltages.push(Number(batteries[i].max.join('')));
    sum += joltages[i];
  }

  console.log('Answer: ', sum);
  console.log('Joltages: ', joltages);
});
