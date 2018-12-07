/*


 
 There is an N by M matrix of zeroes. Given N and M, write a function to count
 the number of ways of starting at the top-left corner and getting to the
 bottom-right corner. You can only move right or down.
 
 For example, given a 2 by 2 matrix, you should return 2, since there are two
 ways to get to the bottom-right:

0,0
0,0

0,0,0,
0,0,0,
0,0,0,,




 Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.
 
 

*/

function matrixpath(m,n,right = 1, down = 1){

  if (right > n || down > m) return 0;

  if (right === n && down === m) return 1;

  return matrixpath(m,n,right+1,down) + matrixpath(m,n,right,down+1)

}


console.log(matrixpath(5,5));
