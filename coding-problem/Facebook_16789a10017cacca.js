/*




Given a start word, an end word, and a dictionary of valid words, find the

shortest transformation sequence from start to end such that only one letter is

changed at each step of the sequence, and each transformed word exists in the

dictionary. If there is no possible transformation, return null. Each word in

the dictionary have the same length as start and end and is lowercase.



For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop",

"dat", "cat"}, return ["dog", "dot", "dat", "cat"].



Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"},

return null as there is no possible transformation from dog to cat.



*/


function transform(worda, wordb, dict, results = [], stack = []){

  if (worda === wordb) return results.push(stack);

  for (let i = 0; i < worda.length; i++) {
    let newWord = [...worda].map((c,j)=>j===i ? wordb[j]: c).join('');
    let index = dict.indexOf(newWord);
    if (index >= 0) {
      let newDict = dict.slice(0,index).concat(dict.slice(index+1));
      transform(newWord, wordb, newDict, results, [...stack, newWord]);
    }
  }
  return results;
}



console.log(transform("dog","cat",["dot", "dop","dat", "cat"]));
console.log(transform("dog","cat",["dot", "tod","dat", "dar"]));
