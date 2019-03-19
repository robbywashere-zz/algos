const LIST = [ 12, 14, 17, 10, 14, 13, 12, 15 ]



function buySell(price, k){

  const n = price.length;

  const profit = new Array(k+1).fill(new Array(price+1).fill(0))

  for (let i = 1; i <= k; i++){

    let prevDiff = -Infinity;

    for (let j = 1; j < n; j++) {

      prevDiff = Math.max(prevDiff, profit[i-1][j-1] - price[j-1]);

      profit[i][j] = Math.max(profit[i][j - 1], price[j] + prevDiff)
    
    
    }
  
  }

  return profit[k][n-1]


}


console.log(buySell(LIST,2));
