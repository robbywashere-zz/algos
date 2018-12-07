/*


A builder is looking to build a row of N houses that can be of K different

colors. He has a goal of minimizing cost while ensuring that no two neighboring

houses are of the same color.

Given an N by K COSTS where the nth row and kth column represents the cost to

build the nthhouse with kth color, return the minimum cost which achieves this

goal.

*/



const COSTS = [ //COSTS[color][house]

//HOUSE  1 2 3 4 5 6
        [1,2,3,4,5,1], // Red
        [1,3,4,5,1,2], // Blue
        [1,4,5,9,1,3], // Green
        [2,3,5,4,1,3]  // Yellow
];

function * paintHouse(costs, house = 0, total = 0, excludeColor){
  if (house === costs[0].length) {
    yield total;
    return;
  } 
  for (let color = 0; color < costs.length; color++){
    if (color !== excludeColor) yield * paintHouse(costs, house+1, total + costs[color][house], color);
  }

}

console.log(Math.min(...paintHouse(COSTS)));
