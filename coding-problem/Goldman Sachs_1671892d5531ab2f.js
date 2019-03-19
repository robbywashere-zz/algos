/*




Given a list of numbers L, implement a method sum(i, j) which returns the sum

from the sublist L[i:j] (including i, excluding j).



For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]),

which is 5.



You can assume that you can do some pre-processing. sum() should be optimized

over the pre-processing step.



*/

let list = [1,2,3,4,5]

function sum(a,b){
  return this.slice(a,a-b).reduce((p,n)=>p+n,0)
}

Array.prototype.sum = sum;

console.log(list.sum(1,3));
