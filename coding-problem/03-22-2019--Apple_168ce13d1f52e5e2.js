/*




Implement the function fib(n), which returns the nth number in the Fibonacci

sequence, using only O(1) space.



*/


function fib(n){
  let [a,b] = [0,1];
  for (let i = 1; i <= n; i++) [a,b] = [b, a+b];
  return a;
}


//0, 1, 1, 2, 3, 5, 8

console.log(fib(6))
