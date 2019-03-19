/*




You are given n numbers as well as n probabilities that sum up to 1. Write a

function to generate one of the numbers with its corresponding probability.



For example, given the numbers [1, 2, 3, 4] and probabilities [0.1, 0.5, 0.2,

0.2], your function should return 1 10% of the time, 2 50% of the time, and 3

and 4 20% of the time.



You can generate random numbers between 0 and 1 uniformly.



*/

function getRanges(probs) {
  return ([...(function *range(pArr){
  let p = 0;
  for (let v of pArr) {
    yield (p/10);
    p +=(v*100)
  }
  })(probs)].map((n,i,arr)=>[(n/10),(arr[i+1]/10)||Infinity])) 
}

function probability(numbers, probs){
  const ranges = getRanges(probs);
  return () => {
    const target = Math.random();
    const index = ranges.findIndex(([a,b])=>(target >= a && target <= b));
    return numbers[index];
  }
}

const myProb = probability([1,2,3,4], [0.1, 0.2, 0.2, 0.5]);
const AMOUNT = 20480000;
const result = Array(AMOUNT).fill(0).map(myProb);

const count = function (p,n){
  if (p[n] === undefined) p[n] = 0
  p[n]++
  return p; 
}
let countResult = result.reduce(count,{});

for (let [k,v] of Object.entries(countResult)) console.log(k + ":", (v/AMOUNT)*100)




