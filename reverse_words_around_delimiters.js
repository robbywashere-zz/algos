/*




Given a string and a set of delimiters, reverse the words in the string while

maintaining the relative order of the delimiters. For example, given

"hello/world:here", return "here/world:hello"



Follow-up: Does your solution work for the following cases: "hello/world:here/",

"hello//world:here"



*/
function isDelim(c) {
  switch (c) {
    case '/': 
    case ':': 
      return true;
    default: 
      return false;
  }
}

function reverse_delim(str){
  let tokens = []
  for (let c of str) {
    if (isDelim(c)) tokens.push({ value: c, type: 'delim' })
    else tokens.push({ value: c, type: 'char' })
  }

  for (let token of tokens) { 
  
  }
}


function reverse_delim2(str){

  const words = str.split(/[:\/]+/);

  const tokens = str.split(/[a-z]+/);

  const result = [];

  while (words.length > 0 || tokens.length > 0) {
    let w = words.pop();
    if (w === '') {
      let t = tokens.shift()
      result.push(t);
      result.push(words.pop())
    }
    else {
      result.push(tokens.shift());
      result.push(w);
    }
  }
  return result.join('');
}

console.log(reverse_delim2('hello/world:here/'))



