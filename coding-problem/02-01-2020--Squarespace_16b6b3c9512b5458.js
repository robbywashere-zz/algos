/*
Write a function, add_subtract, which alternately adds and subtracts curried

arguments. Here are some sample operations:

add_subtract(7) -> 7

add_subtract(1)(2)(3) -> 1 + 2 - 3 -> 0

add_subtract(-5)(10)(3)(9) -> -5 + 10 - 3 + 9 -> 11

*/

function addsub(a, t = 1){
  var v = function(x){
    return addsub(a + (x * t),t*-1)
  }
  v.valueOf = function(){
    return a;
  }
  return v;
}

console.log(+addsub(-5)(10)(3)(9),11);
console.log(+addsub(1)(2)(3),0);
console.log(+addsub(7),7);
