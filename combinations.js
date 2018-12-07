
// given an array of characters, and a second argument; n, list all combinations of that array to length n
//


function comb(arr, n, result, stack = []) {

  if (n === 0) {
    result.push(stack);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    comb(arr, n-1, result, stack.concat(arr[i]) );
  }

  return result;
}

const n = 3;
const arr = ['a','b']
const result = comb(arr, n, []);

console.log(result);
console.log(result.length, arr.length**n)




//1,2
//2,1
//1,1
//2,2
