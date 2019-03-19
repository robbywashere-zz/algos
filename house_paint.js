"use strict";

const COST = [[1,8,3],[9,4,1],[3,3,3]];

function paintHouse(cost){
  for (let i = 1; i < cost.length; i++) {
    cost[i][0] += Math.min(cost[i-1][1],cost[i-1][2]);
    cost[i][1] += Math.min(cost[i-1][2],cost[i-1][0]) 
    cost[i][2] += Math.min(cost[i-1][1],cost[i-1][0]) 
    for (let c of COST) console.log(c)
    console.log('-----');
  }
  let m = (cost.length-1);
  return Math.min(cost[m][0],cost[m][1],cost[m][2])
}




console.log(paintHouse(COST));
