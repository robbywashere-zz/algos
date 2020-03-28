/*




Given an array of numbers representing the stock prices of a company in

chronological order and an integer k, return the maximum profit you can make

from k buys and sells. You must buy the stock before you can sell it, and you

must sell the stock before you can buy it again.



For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.



*/

//when k can only be 1

function trade1(list){

  let maxDiff = list[1] - list[0];

  let minElement = list[0];

  for (let i = 1; i<list.length;i++){
    maxDiff = Math.max(maxDiff,list[i]-minElement)
    minElement = Math.min(minElement,list[i])
  }
  return maxDiff;
}

console.log(trade1([5,2,4,2,1,10]))

function tradeK(list){


}
