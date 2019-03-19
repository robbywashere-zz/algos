/*




Given a string of round, curly, and square open and closing brackets, return

whether the brackets are balanced (well-formed).



For example, given the string "([])[]({})", you should return true.



Given the string "([)]" or "((()", you should return false.



*/


function balanced(str){
  let stack = [];
  for (let char of str){
    switch (char){
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      case ")":
      case "]":
      case "}":
        if (stack.pop() !== char) return false;
        break;
      default: 
        throw new Error('U WOT M8?!')
    }
  }
  return !stack.length;
}



console.log(balanced('([])[]({})'),true)
console.log(balanced('([)]'),false)
console.log(balanced('((()'),false)
