/*Given integers N and X, write a function that returns the number of times X
 appears as a value in an N by N multiplication table.
 
 For example, given N = 6 and X = 12, you should return 4, since the
 multiplication table looks like this:
 
 | 1 | 2 | 3 | 4 | 5 | 6 |
 
 | 2 | 4 | 6 | 8 | 10 | 12 |
 
 | 3 | 6 | 9 | 12 | 15 | 18 |
 
 | 4 | 8 | 12 | 16 | 20 | 24 |
 
 | 5 | 10 | 15 | 20 | 25 | 30 |
 
 | 6 | 12 | 18 | 24 | 30 | 36 |
 
 And there are 4 12's in the table.
 

 */



function findnumber(N,X){

  let sum = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i*j === N) sum++
    }
  }
  return sum;
}

console.log(findnumber(6));
