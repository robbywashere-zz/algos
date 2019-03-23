/*




Given a sorted list of integers of length N, determine if an element x is in the

list without performing any multiplication, division, or bit-shift operations.



Do this in O(log N) time.



*/

const LIST = (new Array(50).fill(null).map(()=>Math.floor(Math.random()*25))).sort((a,b)=>a>b ? 1 : -1)


const range = (a,b) => Array(Math.abs(a-b)+1).fill(1).map((_,i)=>i+a)

const range2 = (a,b)=>{ let r = [];for (let i = a; i<=b; i++) r.push(i); return r; }


function * range3(a,b){
  for (let i = a;i<=b;i++) yield i;
}

console.log([...range3(0,10)]);

function findN(list, n){

  if (list.length === 1) return (list[0] === n)

  const half = Math.floor(list.length/2);

  const middle = list[half]
  if (middle === n) return true;
  if (middle > n) return findN(list.slice(0,half),n);

  return findN(list.slice(half),n);
}


findN(LIST,LIST[(Math.floor(Math.random()*50))]);




