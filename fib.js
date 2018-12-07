//recursive
function fib(num) {
  if (num <= 1) return 1;

  return fib(num - 1) + fib(num - 2);
}

//memoized
function fib(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
}


//for loop
function fib(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
