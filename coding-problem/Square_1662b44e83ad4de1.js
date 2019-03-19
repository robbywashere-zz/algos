/*
Given a string and a set of characters, return the shortest substring containing

all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i},

you should return "aeci".

If there is no substring containing all the characters in the set, return null.
https://medium.com/leetcode-patterns/leetcode-pattern-2-sliding-windows-for-strings-e19af105316b
Input :  string = "geeksforgeeks"
         pattern = "ork" 
Output :  Minimum window is "ksfor"

*/

function containing(str, set){

  const map = str
    .split('')
    .filter(c=>set.includes(c))
    .reduce((p,n) =>({ ...p, [n]: (p[n]||0)+1 }),{});


  let i = 0;
  let j = str.length - 1;

  while (true) {
    if (str[j] in map) {
      if (map[str[j]] > 1) map[str[j]]--
      else break;
    } 
    j--;
  }

  while (true) {
    if (str[i] in map) {
      if (map[str[i]] > 1) map[str[i]]--
      else break;
    } 
    i++;
  }


  while (true) {
    if (j < str.length) {
      j++;
      if (str[j] in map) {
        map[str[j]]++ 
      }
    }

    if (str[i] in map) {
      if (map[str[i]] === 1) break;
      map[str[i]]--
    }
    i++;
  }

  return str.substring(i,j);



}

function smallest_window(str,chars){
  if (typeof chars === "string") chars = chars.split("");
  let left = containing(str,chars);
  let right = containing(str.split('').reverse().join(''),chars).split("").reverse().join("");
  return left.length > right.length ? right : left;
}

console.log(smallest_window("geeksforgeeks","ork"))
console.log(smallest_window("figehaeci","aei"))







