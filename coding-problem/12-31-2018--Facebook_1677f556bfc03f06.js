/*




Given an N by N matrix, rotate it by 90 degrees clockwise.



For example, given the following matrix:



[[1, 2, 3],

 [4, 5, 6],

 [7, 8, 9]]





you should return:



[[7, 4, 1],

 [8, 5, 2],

 [9, 6, 3]]





Follow-up: What if you couldn't use any extra space?



*/

let M = [[1,2],
         [3,4]];

M = M.reverse();
[M[1][0],M[0][1]] = [M[0][1],M[1][0]]


console.log(M)





function rotate(matrix) {
  const m = matrix.reverse();
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < i; j++) {
      [m[i][j],m[j][i]] = [m[j][i], m[i][j]];
    }
  }
  return m;
}

const mtx = [[1,2,3],
             [4,5,6],
             [7,8,9]];

console.log(rotate(mtx));
