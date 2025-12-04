<div align="center">

# [Advent of Code 2025](https://adventofcode.com/2025) - JavaScript Edition

</div>

## Table of Contents

| Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Day 6 |
|-------|-------|-------|-------|-------|-------|
| <p align="center">[⭐](#day-1)</p> | <p align="center">[⭐](#day-2)</p> | <p align="center">[⭐](#day-3)</p> | <p align="center">[⭐](#day-4)</p> | <p align="center">[⭐](#day-5)</p> | <p align="center">[⭐](#day-6)</p> |
| **Day 7** | **Day 8** | **Day 9** | **Day 10** | **Day 11** | **Day 12** |
| <p align="center">[⭐](#day-7)</p> | <p align="center">[⭐](#day-8)</p> | <p align="center">[⭐](#day-9)</p> | <p align="center">[⭐](#day-10)</p> | <p align="center">[⭐](#day-11)</p> | <p align="center">[⭐](#day-12)</p> |


<br>

## ⭐Day 1

### Part 1

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.trim().split("\n").filter(Boolean);

  const rotations = payload.map(line => ({
    turn: line[0],
    number: Number(line.slice(1))
  }));

  let sumNumber = 50;
  const history = [];
  let counter = 0;

  for (let i = 0; i < rotations.length; i++) {
    const { turn, number } = rotations[i];

    if (turn === 'L') {
      sumNumber -= number;
    } else {
      sumNumber += number;
    }

    if (sumNumber < 0) sumNumber = ((sumNumber % 100) + 100) % 100;
    if (sumNumber > 99) sumNumber = sumNumber % 100;

    history.push(sumNumber);

    if (sumNumber === 0) counter++;
  }

  console.log('History:', history);
  console.log('Pointing at 0:', counter);
});

```
</details>

### Part 2

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.trim().split("\n").filter(Boolean);

  const rotations = payload.map(line => ({
    turn: line[0],
    number: Number(line.slice(1))
  }));

  let sumNumber = 50;
  const history = [];
  let counter = 0;

  for (let i = 0; i < rotations.length; i++) {
    const { turn, number } = rotations[i];
    for (let j = 0; j < number; j++) {
      if (turn === 'L') {
        sumNumber--;
        if (sumNumber < 0) sumNumber = 99;
      } else {
        sumNumber++;
        if (sumNumber > 99) sumNumber = 0;
      }
      if (sumNumber === 0) counter++;
    }
    history.push(sumNumber);
  }

  console.log('History:', history);
  console.log('Pointing at 0:', counter);
});

```
</details>

<br>

## ⭐Day 2

### Part 1

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
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

```
</details>

### Part 2

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
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

```
</details>

<br>

## ⭐Day 3

### Part 1

<details>
  <summary>Code</summary>

```javascript
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

```
</details>

### Part 2

<details>
  <summary>Code</summary>

```javascript
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

```
</details>

<br>

## ⭐Day 4

### Part 1

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.split("\n").map(row => row.split(""));
  
  let diagram = payload.map(row => row.slice());

  const dirs = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];

  let sum = 0;
  
  for (let r = 0; r < payload.length; r++) {
    for (let c = 0; c < payload[r].length; c++) {
      let counter = 0;
      
      for (let [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
      
        if (nr >= 0 && nr < payload.length &&
          nc >= 0 && nc < payload[nr].length) {
              
            if (payload[nr][nc] == "@") counter++;
        }
      }
        
      if (payload[r][c] == "@" && counter < 4  ) {
        diagram[r][c] = "x";
        sum++;
      }
    }
  }

  console.log('Answer: ', sum);
  console.log('Diagram: ', diagram);
});

```
</details>

### Part 2

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.split("\n").map(row => row.split(""));

  const dirs = [
    [-1, 0], [1, 0], [0, -1], [0, 1],
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ];

  let sum = 0;
  let removed = 0;
  
  while (true) {
    
    for (let r = 0; r < payload.length; r++) {
      for (let c = 0; c < payload[r].length; c++) {
        let counter = 0;
        
        for (let [dr, dc] of dirs) {
          const nr = r + dr;
          const nc = c + dc;
        
          if (nr >= 0 && nr < payload.length &&
            nc >= 0 && nc < payload[nr].length) {
              
              if (payload[nr][nc] == "@") counter++;
          }
        }
        
        if (payload[r][c] == "@" && counter < 4  ) {
          payload[r][c] = ".";
          sum++;
          removed++;
        }
       
      }
    }
    
    if (removed == 0) break; else removed = 0;
  }

  console.log('Answer: ', sum);
  console.log('Diagram: ', payload);
});

```
</details>

<br>

## Other years
[2024 - Dataweave](https://github.com/EduardaSRBastos/advent-of-code-2024)

‎<h2 align="right">[▲](#advent-of-code-2025---javascript-edition)</h2>
