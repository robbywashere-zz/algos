/*Given an array of integers of size ‘n’.
Our aim is to calculate the maximum sum possible for ‘k’ consecutive elements in the array.

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700*/



//brute
let arr = [100, 200, 300, 400]
let k = 2;
let n = arr.length;
let max_sum = -Infinity;
for(i = 0; i < n-k+1; i++){    
  let current_sum = 0;

  for( j = 0; j < k; j++){        
    current_sum = current_sum + arr[i+j];         
  }
  max_sum = Math.max(current_sum, max_sum);    // pick maximum sum 
}

console.log(max_sum);
