
/*
Find the smallest window in a string containing all characters of another string

Given two strings string1 and string2, find the smallest substring in string1 containing all characters of string2 efficiently.
For Example:

Input :  string = "this is a test string"
         pattern = "tist"
Output :  Minimum window is "t stri"
Explanation: "t stri" contains all the characters
              of pattern.

Input :  string = "geeksforgeeks"
         pattern = "ork" 
Output :  Minimum window is "ksfor"

https://medium.com/leetcode-patterns/leetcode-pattern-2-sliding-windows-for-strings-e19af105316b
*/


const pattchk = (pt,st) => pt.reduce((p,n)=>p && st.includes(n),true);

const str ="this is a test string";

const pat = "tist";

function win(str,pat) {

  let patMap = {};

  [...pat].forEach(c=> patMap[c] = (patMap[c]||0)+1);


  let start = 0;
  let end = 0;
  let len = Infinity;
  let ans = "";
  let counter = Object.entries(patMap).length;

  while (end < str.length) {
    if (patMap[str[end]]) {
      patMap[str[end]]--;
      if (patMap[str[end]] == 0) counter--;
    }
    end++;

    console.log({ counter, end })

    while (counter === 0) {

      if (end-start < len) {
        len = end-start
        ans = str.slice();
      
      }
    
    }

  }
  return ans;
}

console.log(win(str,pat))
