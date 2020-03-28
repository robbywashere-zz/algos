/*




Given a 2D board of characters and a word, find if the word exists in the grid.



The word can be constructed from letters of sequentially adjacent cell, where

"adjacent" cells are those horizontally or vertically neighboring. The same

letter cell may not be used more than once.



For example, given the following board:



[

  ['A','B','C','E'],

  ['S','F','C','S'],

  ['A','D','E','E']

]





exists(board, "ABCCED") returns true,exists(board, "SEE") returns true,

exists(board, "ABCB") returns false.



*/

function next(grid, word, row, index){
  if (typeof grid[row] === "undefined") return false;

  if (word === '') return true

  return (word[0] === grid[row][index]) &&
    //up
    (next(grid, word.slice(1), row-1, index) |
    //down
    next(grid, word.slice(1), row+1, index) |
    //left
    next(grid, word.slice(1), row, index-1) |
    //right
    next(grid, word.slice(1), row, index+1));


}




let grid = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]



function find(word){ 
  for (let [rowi,row] of Object.entries(grid)){
    for (let [letteri, letter] of Object.entries(grid[rowi])) {
      if (next(grid, word, rowi, letteri)) return true;
    }
  }
  return false;
}

console.log(find('ABC'))


