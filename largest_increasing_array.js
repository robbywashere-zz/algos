function largest(arr){
  let max = [];
  let accum = [arr.shift()];
  for (let n of arr) {
    if (n > accum[accum.length-1]) accum.push(n);
    else accum = [n];
    if (accum.length > max.length) max = accum;
  }
  return (max.length > 1 ? max : []);
}

console.log(largest([-4, 3, 2 ]));
