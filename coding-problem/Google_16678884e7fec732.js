/*




Given a sorted list of integers, square the elements and give the output in

sorted order.



For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].



*/

function squareSort(arr){


  let left = [];
  let right = [];
  let pivot = arr[0]

  for (let i = 1; i < arr.length; i++){
    const indice = arr[i];
    if (indice < pivot) left.push(indice);
    else right.push(indice)
  }

  return squareSort(left).concat(pivot,squareSort(right))





}

function quicksort(arr) {
  if (arr.length == 0) return [];

  let left = [];
  let right = [];
  let pivot = arr[0] ** 2;

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] **2 < pivot) left.push(arr[i])

    else right.push(arr[i]);

  }

  return quicksort(left).concat(pivot, quicksort(right));

}


console.log(quicksort([-9, -2, -10, 1, -9, 0, 2, 3]));
