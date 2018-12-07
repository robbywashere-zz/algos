
let a = [ 2, 2, 2, 2, 3, 5, 6 ];


function minSum(arr) { 
  n = arr.length;
  sum = arr[0]; 

  for (i = 1; i < n; i++) { 
    if (arr[i] == arr[i - 1]) {      
      j = i; 
      while (j < n && arr[j] 
        <= arr[j - 1]) 
      {      
        arr[j] = arr[j] + 1; 
        j++; 
      } 
    } 
    sum = sum + arr[i]; 
  } 

  return sum; 
} 

function minSum2(arr) { 
  n = arr.length;
  sum = arr[0];  
  prev = arr[0]; 

  for ( i = 1; i < n; i++) { 

    // If violation happens,  
    // make current value as  
    // 1 plus previous value 
    // and add to sum. 
    if (arr[i] <= prev){ 
      prev = prev + 1; 
      sum = sum + prev; 
    } 

    // No violation. 
    else 
    { 
      sum = sum + arr[i]; 
      prev = arr[i]; 
    } 
  } 

  return sum; 
} 

// THE EASIEST ONE !
function minSum3(arr){
  let prev = -Infinity; 
  let result = 0;
  for (let x of arr) {
    while (x <= prev) x++
    result += x;
    prev = x;
  }
  return result;
}

console.log(minSum3(a))
console.log(minSum2(a))
console.log(minSum(a))
