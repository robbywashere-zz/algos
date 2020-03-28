/*




Given a string s and an integer k, break up the string into multiple texts such

that each text has a length of k or less. You must break it up so that words

don't break across lines. If there's no way to break the text up, then return

null.



You can assume that there are no spaces at the ends of the string and that there

is exactly one space between each word.



For example, given the string "the quick brown fox jumps over the lazy dog" and

k = 10, you should return: ["the quick", "brown fox", "jumps over", "the lazy",

"dog"]. No string in the list has a length of more than 10.



*/


function breakup(str, length){

  const strArr = str.split(' ');

  let chunks = [];
  let chunk = [];
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    count += strArr[i].length + 1;
    if ((count-1) > length){
      i = i-1;
      count = 0;
      chunks.push(chunk);
      chunk = [];
      continue;
    }
    chunk.push(strArr[i]);
  }
  chunks.push(chunk);
  return chunks.map(c=>c.join(' '));
}

let result = breakup("abcdfeghja the quick brown fox jumps over the lazy dog again and again dangit aaa", 10);

for (let r of result){
  console.log(r, r.length)
}


console.log(Array.prototype.join(' ', [1,2,3]));
