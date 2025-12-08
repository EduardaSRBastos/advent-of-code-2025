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

### [Part 1](https://onecompiler.com/javascript/446m4eupp)

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

### [Part 2](https://onecompiler.com/javascript/446m4dhjt)

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

### [Part 1](https://onecompiler.com/javascript/446m4gnnc)

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

### [Part 2](https://onecompiler.com/javascript/446m4jeav)

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

### [Part 1](https://onecompiler.com/javascript/446m4kqgy)

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

### [Part 2](https://onecompiler.com/javascript/446m4myrs)

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

### [Part 1](https://onecompiler.com/javascript/446m4pp2g)

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

### [Part 2](https://onecompiler.com/javascript/446m4qhst)

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

## ⭐Day 5

### [Part 1](https://onecompiler.com/javascript/446nvxarq)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
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

```
</details>

### [Part 2](https://onecompiler.com/javascript/446p5qjqw)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.split("\n");
  const range = payload.slice(0, payload.indexOf(""));

  const ranges = range.map(r => {
    let min = BigInt(r.slice(0, r.indexOf("-")));
    let max = BigInt(r.slice(r.indexOf("-") + 1));
    return { min, max };
  });

  ranges.sort((a,b) => (a.min < b.min ? -1 : 1));

  let lastMax = -1n;
  let total = 0n;

  for (let r = 0; r < ranges.length; r++) {
    let min = ranges[r].min;
    let max = ranges[r].max;
  
    if (min <= lastMax) 
      min = lastMax + 1n;
    
  
    if (max >= min) 
      total = total + max - min + 1n;
  
    if (max > lastMax) 
      lastMax = max;
  }

  console.log('Answer: ', total.toString());
});

```
</details>

<br>

## ⭐Day 6

### [Part 1](https://onecompiler.com/javascript/446shgyaj)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.trimEnd().split("\n");
  const op = payload[payload.length-1].match(/[+*]/g);
  const nums = payload.slice(0, payload.length-1).map(row => row.match(/\d+/g));

  let problems = [];
    
  for (let o = 0; o < op.length; o++) {
    let group = [];
    for (let n = 0; n < nums.length; n++) {
      group.push(nums[n][o]+ op[o]);
    }
    problems.push(eval(group.join("").slice(0, -1)))
  }
  
  let sum = 0;
  problems.map (p => sum += p);

  console.log('Answer: ', sum);
  console.log('Problems: ', problems);
});

```
</details>

### [Part 2](https://onecompiler.com/javascript/446vp5sp4)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.trimEnd().split("\n");
  const op = payload[payload.length-1].match(/[+*]/g);
  const nums = payload.slice(0, -1).map(row => row.split(''));
  const problemIndices = [];
  let problems = [];
  let i = 0;
  
  while (i < nums[0].length) {
    if (nums.some(r => r[i] !== ' ')) {
      problemIndices.push(i);
      while (i < nums[0].length && nums.some(r => r[i] !== ' ')) i++;
    } else i++;
  }
  
  for (let p = 0; p < problemIndices.length; p++) {
    const columns = nums.map(row => row.slice(problemIndices[p], problemIndices[p + 1]).join(''));
    
    const numbers = [];
    for (let col = 0; col < columns[0].length; col++) {
      let numStr = '';
      for (let row = 0; row < columns.length; row++) {
        if (columns[row][col] && columns[row][col] !== ' ') numStr += columns[row][col];
      }
      if (numStr.length > 0) numbers.push(Number(numStr)+op[p]);
    }

   problems.push(eval(numbers.join("").slice(0, -1)))
  }
  
  let sum = 0;
  problems.map (p => sum += p);

  console.log('Answer: ', sum);
  console.log('Problems: ', problems);
});

```
</details>

<br>

## ⭐Day 7

### [Part 1](https://onecompiler.com/javascript/446vp2whn)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
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

```
</details>

### [Part 2](https://onecompiler.com/javascript/446vnyx56)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
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

```
</details>

<br>

## ⭐Day 8

### [Part 1](https://onecompiler.com/javascript/446ywaeym)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.trimEnd().split("\n");
  const coords = payload.map(a => {
    const [x,y,z] = a.split(",").map(Number);
    return { x, y, z };
  });

  let dists = [];
  
  for(let i = 0; i < coords.length; i++) {
    for(let j = i+1; j <= coords.length - 1; j++) {
      const dist = Math.hypot(coords[j].x - coords[i].x, coords[j].y - coords[i].y , coords[j].z - coords[i].z);
      
      dists.push({dist: dist, i: i, j: j});
    }
  }
  
  dists.sort((a, b) => a.dist - b.dist);
  const slicedDists = dists.slice(0, 10);
  
  let circuits = [];
  
  for (let d = 0; d < coords.length; d++) {
    circuits.push([d]);
  }
  
  let conn = 0;
  
  for(d of slicedDists) {
    let ci = null;
    let cj = null;
    
    for(c of circuits) {
      if(c.includes(d.i)) ci = c;
      if(c.includes(d.j)) cj = c;
    }
      
    if (ci != cj) {
      circuits = circuits.filter(c => c != ci && c != cj);
      circuits.push([...ci, ...cj]);
      conn++;
    }
  }
  
  let sizes = circuits.map(c => c.length);
  sizes.sort((a,b) => b-a);
  
  console.log('Answer: ', sizes[0] * sizes[1] * sizes[2]);
  console.log('Sizes: ', sizes);
});
```
</details>

### [Part 2](https://onecompiler.com/javascript/446yx4hsk)

<details>
  <summary>Code</summary>

```javascript
let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const payload = input.trimEnd().split("\n");
  const coords = payload.map(a => {
    const [x,y,z] = a.split(",").map(Number);
    return { x, y, z };
  });

  let dists = [];
  
  for(let i = 0; i < coords.length; i++) {
    for(let j = i+1; j <= coords.length - 1; j++) {
      const dist = Math.hypot(coords[j].x - coords[i].x, coords[j].y - coords[i].y , coords[j].z - coords[i].z);
      
      dists.push({dist: dist, i: i, j: j});
    }
  }
  
  dists.sort((a, b) => a.dist - b.dist);
  
  let circuits = [];
  
  for (let d = 0; d < coords.length; d++) {
    circuits.push([d]);
  }
  
  let circuits_count = coords.length;
  let last_pair = [];

  for(d of dists) {
    let ci = null;
    let cj = null;
    
    for(c of circuits) {
      if(c.includes(d.i)) ci = c;
      if(c.includes(d.j)) cj = c;
    }
      
    if (ci != cj) {
      circuits = circuits.filter(c => c != ci && c != cj);
      circuits.push([...ci, ...cj]);
      circuits_count--;
      
      last_pair = [d.i, d.j];
      if (circuits_count == 1) break;
    }
  }
  
  console.log('Answer: ', coords[last_pair[0]].x * coords[last_pair[1]].x);
  console.log('Last 1: ', coords[last_pair[0]].x);
  console.log('Last 2: ', coords[last_pair[1]].x);
});

```
</details>

<br>

## Other years
[2024 - Dataweave](https://github.com/EduardaSRBastos/advent-of-code-2024)

‎<h2 align="right">[▲](#advent-of-code-2025---javascript-edition)</h2>
