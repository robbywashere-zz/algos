/*




Write a function, throw_dice(N, faces, target), that determines how many ways it

is possible to throw N dice with some number of faces each to get a specific

target.



For example, throw_dice(3, 6, 7) should equal 15.

[1,2,3,4,5,6]


  for (int dice = 2; i <= n; i++) 
    for (int j = 1; j <= x; j++) 
      for (int k = 1; k <= m && k < j; k++) 
        table[dice][j] += table[dice-1][j-k]; 

*/



function countDice(dice,k,target){


  return (function recurse(dice,k,target){

    if (target === 0 && dice === 0) return 1;
    if (dice === 0 || target < 0) return 0;
    let count = 0;
    for (let i = 1; i<=k; i++){
      count += recurse(dice-1,k,target-i);
    }
    return count;

  })(dice,k,target)
}


//doesn;t work
function findWays(n, m,  x) 
{ 
  // Create a table to store results of subproblems.  One extra  
  // row and column are used for simpilicity (Number of dice 
  // is directly used as row index and sum is directly used 
  // as column index).  The entries in 0th row and 0th column 
  // are never used. 
  let table = Array(n+1).fill(Array(x+1).fill(0))

  // Table entries for only one dice 
  for (let j = 1; j <= m && j <= x; j++)  table[1][j] = 1; 
  console.log(table)

  // Fill rest of the entries in table using recursive relation 
  // i: number of dice, j: sum 
  for (let i = 2; i <= n; i++){
    for (let j = 1; j <= x; j++) {
      for (let k = 1; k <= m && k < j; k++) {
        table[i][j] = table[i][j] + table[i-1][j-k]; 
        console.log(table)
      }
    }

  }
  /* Uncomment these lines to see content of table 
    for (let i = 0; i <= n; i++) 
    { 
      for (let j = 0; j <= x; j++) 
        cout << table[i][j] << " "; 
      cout << endl; 
    } */
  return table[n][x]; 
} 

console.log(countDice(3,6,7));
console.log(findWays(3,6,7));

