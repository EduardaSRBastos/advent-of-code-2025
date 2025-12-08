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
