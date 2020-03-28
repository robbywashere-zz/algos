/*




Given a list of words, find all pairs of unique indices such that the

concatenation of the two words is a palindrome.



For example, given the list ["code", "edoc", "da", "d"], return [(0, 1), (1, 0),

(2, 3)].



*/


function isPalin(word){
  return (word.split('').reverse().join('') === word)
}

function palin(list){
  let pairs = [];
  for (let i = 0; i < list.length; i++){
    for (let j = i+1; j < list.length; j++) {
      if (isPalin(list[i] + list[j])) pairs.push([i,j])
      if (isPalin(list[j] + list[i])) pairs.push([j,j])
    }
  }
  return pairs;
}

console.log(palin(["code", "edoc", "da", "d"]))
