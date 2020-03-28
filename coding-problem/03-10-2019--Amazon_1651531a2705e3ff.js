/*




Given an array of numbers, find the maximum sum of any contiguous subarray of

the array.



For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be

137, since we would take elements 42, 14, -5, and 86.



Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not

take any elements.



Do this in O(N) time.



*/


function kedane(list){


  let max_so_far = 0;
  let max_to_here = 0;

  for (let x of list){
  
    max_so_far += x;

    if (max_so_far < 0) max_so_far = 0;

    if (max_to_here < max_so_far) max_to_here = max_so_far
  
  }

  return max_to_here

}


console.log(kedane([-5, -1, -8, -9]));
