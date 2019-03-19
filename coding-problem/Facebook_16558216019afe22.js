/*


There is an N by M matrix of zeroes. Given N and M, write a function to count

the number of ways of starting at the top-left corner and getting to the

bottom-right corner. You can only move right or down.


For example, given a 2 by 2 matrix, you should return 2, since there are two

ways to get to the bottom-right:


 * Right, then down

 * Down, then right


Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.


*/


const MATRIX = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

function move(matrix,x,y){

  if (x === (matrix.length-1) && y === (matrix[0].length-1)) return 1;

  if (matrix[x] === undefined || matrix[x][y] === undefined) return 0;

  return move(matrix,x+1,y) + move(matrix,x,y+1);

}

console.log(move(MATRIX,0,0));


