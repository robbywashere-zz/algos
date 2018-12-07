
function qsort(arr){

  if (arr.length === 0) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i])
  }

  return left.concat(pivot, qsort(right));

}

function permute(soFar, rest, result) {
  if (rest === "") {
    result.push(soFar);
  } else {
    for (let i = 0; i < rest.length; i++) {
      let next = soFar + rest[i];
      let remaining = rest.substr(0,i) + rest.substr(i+1);
      //,,,.i, i, i+1.....
      //[...[...rest].slice(0,i), ...[...rest].slice(i+1)]
      permute(next, remaining, result);
    }
  }
  return result;
}


function removeIndex(arr,i){
  return [...arr.slice(0,i), ...arr.slice(i+1)];
}

function removeIndexOf(arr,io){
  let i = arr.indexOf(io);
  return [...arr.slice(0,i), ...arr.slice(i+1)];
}

function *fib(n, current = 0, next = 1) {
  if (n === 0) return current;
  yield current;
  yield *fib(n-1, next, current + next);
}

for (let f of fib(10)) {
  console.log(f);
}

