/*

Given a string of parentheses, find the balanced string that can be produced

from it using the minimum number of insertions and deletions. If there are

multiple solutions, return any of them. 
))((
(())
)()

For example, given "(()", you could return "(())". Given "))()(", you could


return "()()()()".

   (()
    x
   / \
  x   x
 /
x


  ))()(

      x
     / \
    x   x 
   / \
  x   x
       \
        x

*/

const PARENS = `(())`.split(``);

function isBalanced(parens){
  let left = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ')') left--;
    else left++;
    if (left < 0) return false
  }
  return true;

}


console.log(isBalanced(PARENS));





