/*




Given a list of numbers, create an algorithm that arranges them in order to form

the largest possible integer. For example, given [10, 7, 76, 415], you should

return 77641510.

7,76,415,10
415,7,76,10


*/


function large(list = [10, 7, 76, 415]){
  return parseInt(list.sort((a,b)=>compare(a,b)).join(''));
}

function compare(a,b){
  a = a.toString()
  b = b.toString()

  for (let i = 0; i < Math.max(a.length,b.length); i++){
    if (a[i] === undefined) return -1;
    if (b[i] === undefined) return 1;
    if (a[i] === b[i]) continue;
    if (parseInt(a[i]) > parseInt(b[i])) return -1;
    return 1;
  }

  return 0;
}





console.log(large())
