
/*


 
 Given an integer k and a string s, find the length of the longest substring that
 contains at most k distinct characters.
 
 For example, given s = "abcba" and k = 2, the longest substring with k distinct
 characters is "bcb".
 
 given s = "abbbzbbba" and k = 2 
 

 */


function findDistinct(s,k) {

  let result = "";

  for (let i = 0; i < s.length; i++) {
  
    let set = new Set([s[i]]);
    let str = s[i];


    for (let j = i+1; j < s.length; j++) {
    
      set.add(s[j]);

      if (set.size > k) break;

      str += s[j];

      if (str.length > result.length) result = str;
    
    }

  }

  return result;

}

console.log(findDistinct('abccccccbaabbbbbccccdccc1c1c1cc',1))


