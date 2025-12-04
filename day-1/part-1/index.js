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
