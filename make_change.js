/*
given coins of the denomination: D find the least amount of coins to add up to a given amount of change: C

*/

//Change 

function makeChange(coins, change, i = 0, selected = []){ 

  if (change < 0 || i === coins.length-1) return { length: Infinity };

  if (change === 0) return selected;

  const left = makeChange(coins,  change - coins[i], i, [...selected, coins[i]])

  const right = makeChange(coins, change, i+1, [...selected])

  return (left.length < right.length) ? left : right;

}

console.log(makeChange([3,5,21,25], 63))
