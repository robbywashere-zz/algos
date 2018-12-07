/*




Given an array of integers in which two elements appear exactly once and all

other elements appear exactly twice, find the two elements that appear only

once.



For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The

order does not matter.



Follow-up: Can you do this in linear time and constant space?



*/

function exactlyOnce(arr){
  let h = {};
  for (let n of arr) {
    h[n] = (h[n]) ? h[n]+1 : 1;
  }
  return Object.entries(h).reduce((p,[k,v])=>[...p, ...((v ===1)?[k]:[])],[])

}

function exactlyOnce2(arr){
  let xor = arr.reduce((p,n)=>p^n,0)
  return [xor & ~(xor-1), Math.abs(xor - (xor & ~(xor-1))) ]
}

console.log(exactlyOnce([2, 4, 6, 8, 10, 2, 6, 10]));
console.log(exactlyOnce2([1,1,2,2,8,10,1,5]));
