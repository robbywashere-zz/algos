/*




Given a list of integers, return the largest product that can be made by

multiplying any three integers.



For example, if the list is [-10, -10, 5, 2], we should return 500, since that's 

-10 * -10 * 5.



You can assume the list has at least three integers.


https://www.geeksforgeeks.org/find-maximum-product-of-a-triplet-in-array/

*/

function largest(list, product, count = 3){



}


function kadane(list){

  let x = 0;
  let y = 0;

  for (let i = 0; i < list.length; i++) {
    x += list[i];
    if (x < 0) x = 0;
    if (y < x) y = x;
  }
  return y;
}

console.log(kadane([1,2,-3,4,5,7]));
