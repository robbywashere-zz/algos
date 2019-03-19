function duplicates(arr) {
  
  // where we will store our duplicate values
  var dups = [];

  for (var i = 0; i < arr.length; i++) {
    
    // get element in array
    var el = arr[Math.abs(arr[i])];
    
    // element in array is positive so make it negative
    if (el > 0) { arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; }
    
    // special case if element is zero
    // we set the value at this index to -arr.size as not to
    // mix this number up with the others because we know the
    // numbers are all in the range of 0 to n-1
    else if (el === 0) { arr[Math.abs(arr[i])] = -arr.length; }
    
    // element is negative so it is a duplicate
    else { 
      if (Math.abs(arr[i]) === arr.length) { dups.push(0); }
      else { dups.push(Math.abs(arr[i])); }
    }
    
  }
  
  return dups;
  
}

console.log(duplicates([0,2,0,1,3,3]));
