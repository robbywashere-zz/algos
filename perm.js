function permute(soFar, rest, result) {
  if (rest === "") {
    result.push(soFar);
  } else {
    for (let i = 0; i < rest.length; i++) {
      let next = soFar + rest[i];
      let remaining = rest.substr(0,i) + rest.substr(i+1);
      permute(next, remaining, result);
    }
  }
  return result;



}


console.log(permute("","abcd",[]));


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

console.log(JSON.stringify(result,null,2));
*/
//console.log(result.length)

