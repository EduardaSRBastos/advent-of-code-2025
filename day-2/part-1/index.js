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
