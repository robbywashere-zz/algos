
/* determine if string is palindrome */

function isPalindrome(str){


  for (let i = 0; i < str.length; i++){


    j = str.length-1-i

    if (str[i] !== str[j]) return false;
  
    if (i === j) return true;
  }



}

console.log(isPalindrome('racecar'));

console.log(isPalindrome('isnotracecar'))


function isPalindrome2(str){

  if (str.split('').reverse().join('') === str) return true;
  return false;
}


console.log(isPalindrome2('racecar'));

console.log(isPalindrome2('isnotracecar'))
