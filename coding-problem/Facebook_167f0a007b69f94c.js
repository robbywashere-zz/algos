/*




Given a circular array, compute its maximum subarray sum in O(n) time.



For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 

where the 8 is obtained from wrapping around.



Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.



*/

function kadane(list){

  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < list.length; i++) {
    max2 += list[i];
    if (max2 < 0) max2 = 0;
    if (max1 < max2) max1 = max2
  }
  return max1;

}

console.log(kadane([-2,-3,4,-1,-2,1,5,-3]));

























/*

  let max_so_far = 0;
  let max_ending_here = 0;

  for (let i = 0; i < list.length; i++) {
    max_ending_here += list[i];
    if (max_ending_here < 0) max_ending_here = 0;
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;
  }
  return max_so_far;

*/
