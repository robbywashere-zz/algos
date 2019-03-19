
const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]

function mergeSort(arr){
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0,mid)
  const right = arr.slice(mid);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right){

  let result = [];
  let li = 0;
  let ri = 0;


  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]){
      result.push(left[li]);
      li++
    } else {
      result.push(right[ri]);
      ri++
    }
  }
  return result.concat(left.slice(li),right.slice(ri));
}

console.log(mergeSort(list));
