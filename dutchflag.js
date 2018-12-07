/*



 Given an array of strictly the characters 'R', 'G', and 'B', segregate the
 values of the array so that all the Rs come first, the Gs come second, and the
 Bs come last. You can only swap elements of the array.

 Do this in linear time and in-place.

 For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should
 become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].



*/

// https://coderbyte.com/algorithm/dutch-national-flag-sorting-problem

const chrMap = new Map(Object.entries({ 
  R: 0,
  G: 1,
  B: 2,
}));

const RGBARR = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];


function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function dutch(arr) {

  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  // one pass through the array swapping
  // the necessary elements in place
  while (mid <= high) {
    switch (chrMap.get(arr[mid])) {
      case 0:
        swap(arr, low++, mid++);
        break;
      case 1:
        mid++;
        break;
      case 2:
        swap(arr, mid, high--);
        break;
    }
  }

  return arr;

}

console.log(dutch(RGBARR)); 

