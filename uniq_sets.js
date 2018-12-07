

const a = [1,2,3]

let pairs = [];
for (let i =0; i < a.length; i++) {
let soFar = [];


  const rest = a.slice(i+1); //non repeating ! ([x,y] === [y,x])
  //const rest = [...a.slice(0,i), ...a.slice(i+1)] repeating ([x,y] === [y,x])


  for (let j = 0; j < rest.length; j++) {
    if (soFar.indexOf(rest[j])>-1) { 
      continue;
    }
    soFar.push(rest[j]);
    pairs.push([a[i],rest[j]])
  
  }
  
}
console.log(pairs)
