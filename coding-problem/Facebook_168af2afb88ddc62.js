/*




Boggle is a game played on a 4 x 4 grid of letters. The goal is to find as many

words as possible that can be formed by a sequence of adjacent letters in the

grid, using each cell at most once. Given a game board and a dictionary of valid

words, implement a Boggle solver.



*/

function prefixTree(words){

  const pt = { $:{} };

  let node = pt['$'];

  for (let word of words) {

    for (let letter of word) {
      node[letter] = {}
      node = node[letter];
    }
    node['#'] = word;
    node = pt['$'];
  }

  return pt;
}


console.log(prefixTree(['foo','foobar','woo','wood','wool']));

let grid = [[['f'],['o'],['o'],['b']]
[['x'],['w'],['d'],['a']]
[['l'],['o'],['o'],['r']]
[['x'],['w'],['w'],['w']]];


function boggle(words,grid){

  const pt = words

}

