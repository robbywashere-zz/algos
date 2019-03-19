/*




You are given an array of non-negative integers that represents a

two-dimensional elevation map where each element is unit-width wall and the

integer is the height. Suppose it will rain and all spots between two walls get

filled up.



Compute how many units of water remain trapped on the map in O(N) time and O(1)

space.



For example, given the input [2, 1, 2], we can hold 1 unit of water in the

middle.



Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in

the second, and 3 in the fourth index (we cannot hold 5 since it would run off

to the left), so we can trap 8 units of water.



*/



function cool_water() {





}








function findWater(arr) { 
  let n = arr.length;
  // initialize output 
  let result = 0; 

  // maximum element on left and right 
  let left_max = 0;
  let right_max = 0; 

  // indices to traverse the array 
  let lo = 0;
  let hi = n-1; 

  while(lo <= hi)  { 
    //console.log({ left_max, right_max, lo, hi, result })
    if(arr[lo] < arr[hi]) { 

      if(arr[lo] > left_max) {
        // update max in left 
        left_max = arr[lo]; 

      }
      else {
        // water on curr element = max - curr 
        console.log({ result, left_max, 'arr[lo]': arr[lo]})
        result += left_max - arr[lo]; 
      }
      lo++; 
    } 
    else { 
      if(arr[hi] > right_max) 
        // update right maximum 
        right_max = arr[hi]; 
      else {
        console.log({ result, right_max, 'arr[hi]': arr[hi]})
        result += right_max - arr[hi]; 
      }
      hi--; 
    } 
  } 

  return result; 
} 


console.log(findWater([3,0,0,0,8,0,1]))
