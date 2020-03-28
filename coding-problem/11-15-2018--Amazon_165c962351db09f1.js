/*




Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1

represents land and 0 represents water, so an island is a group of 1s that are

neighboring and their perimiter is surrounded by water.



For example, this matrix has 4 islands.



1 0 0 0 0

0 0 1 1 0

0 1 1 0 0

0 0 0 0 0

1 1 0 0 1

1 1 0 0 1



*/

Array.prototype.eq = function(arr){
  return (JSON.stringify(this) === JSON.stringify(arr));
}

const matrix = [
  [ 1, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 0 ],
  [ 0, 1, 1, 0, 0 ],
  [ 0, 0, 0, 1, 0 ],
  [ 1, 1, 0, 1, 1 ] ];



function uid(x,y){
  return `[${x},${y}]`;
}
function neighbors(x,y,arr, claimed = new Set()){
  const id = uid(x,y);
  if ((x < 0 || y < 0) || claimed.has(id) || !arr[x]) return; // ?
  const result = [];
  const index = arr[x][y];
  // if (!index) return result;
  if (index === 1) {
    claimed.add(id) //result = [...result, [x,y]];
    //visted = [...claimed, [x,y]]
    neighbors(x,y-1,arr,claimed) //up
    neighbors(x,y+1,arr,claimed) //down
    neighbors(x-1,y,arr,claimed) //left
    neighbors(x+1,y,arr,claimed) //right
  }

  return claimed;

}

let i = -1; 
let islands = 0;
const claimed = new Set();
while (i++ < matrix.length-1){
  let j = -1;
  while (j++ < matrix[0].length-1) {
    if (matrix[i][j] === 1 && !claimed.has(uid(i,j))){
      islands++
      neighbors(i,j,matrix, claimed);
    }
  }
}

console.log(islands)
