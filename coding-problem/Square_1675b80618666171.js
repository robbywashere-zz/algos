/*




Given a list of words, return the shortest unique prefix of each word. For

example, given the list:



 * dog

 * cat

 * apple

 * apricot

 * fish



Return the list:



 * d

 * c

 * app

 * apr

 * f



*/

let words = `dog cat apricot apple fish`.split(' ')

let trie = { '$': { } };
let node = trie['$'];
for (let word of words) {
  for (let char of word){
    if (!(char in node)) node[char] = { '@': 1 }
    else 
      node[char]['@']++
    node = node[char];
  }
  node['#'] = word;
  node = trie['$']
}

function finder(node, stack = ''){
  for (let key of Object.keys(node)){
    if (key !== '@' && key !== '#') {
      if (node[key]['@'] === 1) {
        console.log(stack + key);
        continue;
      }
      finder(node[key],stack + key);
    }
  }


}

console.log(JSON.stringify(trie,null,4))


finder(trie['$']);

