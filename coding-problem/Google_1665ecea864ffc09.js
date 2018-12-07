/*




Given a string of words delimited by spaces, reverse the words in string. For

example, given "hello world here okay", return "okay here world hello"



Follow-up: given a mutable string representation, can you perform this operation

in-place?



*/

function reverserOrder(words){
  return words.split(" ").reverse().join(" ");
}

function reverseOrder2(words){



  let current = "";
  let reversed = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      reversed = current + " " + reversed;
      current = "";
      continue;
    }
    current += words[i]
  }
  return current + " " + reversed ;

}

console.log(reverseOrder2("hello world here okay"))


