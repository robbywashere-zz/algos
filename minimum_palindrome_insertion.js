/*
 
ab: Number of insertions required is 1 i.e. bab
aa: Number of insertions required is 0 i.e. aa
abcd: Number of insertions required is 3 i.e. dcbabcd
abcda: Number of insertions required is 2 i.e. adcbcda which is same as number of insertions in the substring bcd(Why?).
abcde: Number of insertions required is 4 i.e. edcbabcde
*/

function findMinInsertions(str,  l,  h) { 
  // Base Cases 
  if (l > h) return Infinity; 
  if (l == h) return 0; 
  if (l == h - 1) return (str[l] == str[h])? 0 : 1; 

  // Check if the first and last characters are 
  // same. On the basis of the comparison result,  
  // decide which subproblem(s) to call 
  
  return (str[l] == str[h]) ?  
    findMinInsertions(str, l + 1, h - 1) : 
    (Math.min(
      findMinInsertions(str, l, h - 1), 
      findMinInsertions(str, l + 1, h)
    ) + 1); 
} 

// Driver program to test above functions 
let str = "programmingpuzzlesandcodegolf".split(''); 
console.log(findMinInsertions(str, 0, str.length-1));

// geeks
//
