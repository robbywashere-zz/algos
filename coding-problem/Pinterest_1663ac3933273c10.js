/*




Given an integer list where each number represents the number of hops you can

make, determine whether you can reach to the last index starting at index 0.



For example, [2, 0, 1, 0] returns true while [1, 1, 0, 1] returns false.



*/



function rabbit(arr, index = 0){
  if (index === arr.length-1) return true;
  if (index < arr.length && arr[index] === 0) return false;
  return rabbit(arr,index + arr[index]);
}

