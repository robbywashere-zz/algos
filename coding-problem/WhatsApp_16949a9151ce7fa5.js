/*




Given an array of integers out of order, determine the bounds of the smallest

window that must be sorted in order for the entire array to be sorted. For

example, given [3, 7, 5, 6, 9], you should return (1, 3).

https://www.geeksforgeeks.org/minimum-length-unsorted-subarray-sorting-which-makes-the-complete-array-sorted/

*/

function find_sort_bounds(list){

  let sorted = list.slice().sort();

  let begin;
  let end;

  for (let i = 0; i < sorted.length; i++){

    if (sorted[i] !== list[i]) {
      if (begin === undefined) begin = i;
      else end = i;
    }
  
  }
  return [begin, end]
}


//console.log(find_sort_bounds([10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]));


function find_sort_bounds2(list){

  let i;
  for (i = 1; i < list.length; i++) {
    if (list[i] > list[i+1]) break;
  }
  let j;
  for (j = list.length; j >= 0; j--) {
    if (list[j] < list[j-1]) break;
  }
  const max = Math.max.apply(null,list.slice(i,j+1));
  const min = Math.min.apply(null,list.slice(i,j+1));

  console.log({ i,j })


  for (let l = i-1; l >= 0; l--){
    if (list[l] > min) i = l;
  }

  for (let k = j+1; k < list.length; k++) {
    if (list[k] < max) j = k;
  }

  return [i,j];


}


console.log(find_sort_bounds2([10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]));

console.log(find_sort_bounds2([0, 1, 15, 25, 6, 7, 30, 40, 50]));


