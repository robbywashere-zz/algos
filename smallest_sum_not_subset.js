/*




Given a sorted array, find the smallest positive integer that is not the sum of

a subset of the array.



For example, for the input [1, 2, 3, 10], you should return 7.



Do this in O(N) time.



*/


function smallest_int(list){
   let res = 1; // Initialize result 
  
   // Traverse the array and increment 'res' if arr[i] is 
   // smaller than or equal to 'res'. 
  for (let i = 0; i < list.length && res >= list[i]; i++) {
     console.log({ res, 'list[i]': list[i], sum: list[i]+res});
     res = res + list[i]; 
   }
  
   return res; 
  


}


console.log(smallest_int([1,2,3,10]));
