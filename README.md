<div align="center">

# [Advent of Code 2025](https://adventofcode.com/2025) - JavaScript Edition

</div>

## Table of Contents

| Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Day 6 |
|-------|-------|-------|-------|-------|-------|
| <p align="center">[⭐](#day-1)</p> | <p align="center">[⭐](#day-2)</p> | <p align="center">[⭐](#day-3)</p> | <p align="center">[⭐](#day-4)</p> | <p align="center">[⭐](#day-5)</p> | <p align="center">[⭐](#day-6)</p> |
| Day 7 | Day 8 | Day 9 | Day 10 | Day 11 | Day 12 |
-------|-------|-------|-------|-------|-------|
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

‎<h2 align="right">[▲](#advent-of-code-2025---javascript-edition)</h2>
