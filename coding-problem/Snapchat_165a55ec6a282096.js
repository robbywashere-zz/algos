/*




Given a list of possibly overlapping intervals, return a new list of intervals

where all overlapping intervals have been merged.



The input list is not necessarily ordered in any way.



For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1,

3), (4, 10), (20, 25)].



*/

// MUCH BETTER https://www.geeksforgeeks.org/merging-intervals/

function overlap(a1,b1,a2,b2){
  if (a1 <= b2 && b1 >= a2) return true;
  return false;
}


function merge(a1,b1,a2,b2){
  return [Math.min(a1,a2),Math.max(b1,b2)];
}



let intvs = [[1, 3], [5, 8], [4, 10], [20, 25], [20,1000] ].sort(([a1],[a2])=>a1>a2);


let outvs = [];

for (let i = 0; i < intvs.length; i++) {
  let merged = false;
  for (let j = 0; j < outvs.length; j++) {
    if (overlap(...outvs[j],...intvs[i])) {
      merged = true;
      outvs[j] = merge(...outvs[j],...intvs[i])
    }
  }
  if (!merged) outvs.push(intvs[i])
}

console.log(outvs)
