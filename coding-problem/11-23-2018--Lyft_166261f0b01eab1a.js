/*

Given a list of integers and a number K, return which contiguous elements of the

list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return

[2, 3, 4].

*/

function contiguous(a,n){

  let arr = a.sort((a,b)=>a-b);
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
    let j = 0;
    while (sum >= n){
      if (sum === n) {
        return arr.slice(j,i+1); 
      }
      sum = sum - arr[j++];
    }
  }



}


console.log(contiguous([1, 2, 3, 4, 5, 11],12));
