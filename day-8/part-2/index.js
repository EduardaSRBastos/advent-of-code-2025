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
