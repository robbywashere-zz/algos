
/*
  There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

    1, 1, 1, 1
    2, 1, 1
    1, 2, 1
    1, 1, 2
    2, 2


  1       2
 / \     /\
1   2   2  1
|\  |      |
1 2 1      2
|
1

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.

*/

function countSteps(steps, stairCase, stack = [], result = []) {

  if (stairCase === 0) result.push(stack);
  if (stairCase < 0) return result;

}


countSteps([1, 2], 4);

function fib(n){
    if ( n <= 1 ) return n;
    return fib(n-1) + fib(n-2);
}

/*
function splice(arr, pos) {
  let nArr = Array.from(arr);
  return [ nArr.splice(pos,1), nArr ];
}

function p(arr, result = [], chr = []){
  if (arr.length === 1) result.push(chr.concat(arr).join(''));
  for (let i = 0; i <= arr.length-1; i++) {
    const [c, n] = splice(arr,i);
    p(n,result,chr.concat(c));
  }
  return result;
}

const result = p('12345'.split(''));
*/
console.log(JSON.stringify(result,null,2));
