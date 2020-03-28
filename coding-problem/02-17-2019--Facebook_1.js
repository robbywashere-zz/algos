/*

 Minimum Word Break
Given a string s, break s such that every substring of the partition can be found in the dictionary. Return the minimum break needed.
Examples:

Given a dictionary ["Cat", "Mat", "Ca", 
     "tM", "at", "C", "Dog", "og", "Do"]

Input :  Pattern "CatMat"
Output : 1 
Explanation: we can break the sentences
in three ways, as follows:
CatMat = [ Cat Mat ]  break 1
CatMat = [ Ca tM at ] break 2
CatMat = [ C at Mat ] break 2  so the 
         output is: 1

Input : Dogcat
Output : 1

*/


function pt(words){
  const t = { '$': { } };
  let node = t['$'];
  for (let word of words){
    for (let c of word) {
      if(!node[c]) node[c]= {}
      node = node[c];
    }
    node['#'] = word;
    node = t['$'];
  }
  return t;
}


function wordBreak(input, dict, node, stack = [], result = []){

  if (input === "") return result.push(stack);

  const char = input.substr(0,1);

  node = node[char];

  if (!node) return

  if (node['#']) wordBreak(input.substr(1), dict, dict['$'],[...stack,node['#']], result);
  if (node[input.substr(1,1)]) wordBreak(input.substr(1), dict, node, [...stack], result);

  return result;

}

const dict = pt(["Cat", "Mat", "Ca", "tM", "at", "C", "Dog", "og", "Do"]);
console.log(wordBreak("CatMat", dict, dict['$']));
console.log(wordBreak("DogCat", dict, dict['$']));
