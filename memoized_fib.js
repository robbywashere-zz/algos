
function MemFib(){
  let hash = {}
  return function fib(n){
    if (n <= 1) return n;
    if (n in hash) return hash[n];
    let result = fib(n-1) + fib(n-2)
    hash[n] = result;
    return result;
  }
}

function fib(n){
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2)
}


let myFib = new MemFib();
for (let i =0; i<50; i++){
  console.log(myFib(i));
}
