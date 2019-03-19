/*




Given an array of numbers of length N, find both the minimum and maximum using

less than 2 * (N - 2) comparisons.




*/


function findMinMax(list){

  console.log(2*(list.length)-2);
  let min = list.pop();
  let max = list.pop();
  let count = 0;
  for (let item of list) {
    count+=2
    if (item > max) max = item
    else if (item < min) min = item
  }
  console.log(count)
  return { min, max }

}

console.log(findMinMax([1,2,3,4,99,-10,7,-77]));
