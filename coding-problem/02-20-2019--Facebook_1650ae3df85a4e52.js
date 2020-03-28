/*




Given a array of numbers representing the stock prices of a company in

chronological order, write a function that calculates the maximum profit you

could have made from buying and selling that stock once. You must buy before you

can sell it.



For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could

buy the stock at 5 dollars and sell it at 10 dollars.



*/



const prices = [9, 11, 8, 5, 7, 10, 9 ,8];

const prices2 = [5, 6, 8, 9, 7, 10];


//Too much N complexity! - Wrong
function maxReturn(prices){

  let max = 0;
  let pair = [];
  for (let i = 0; i < prices.length-1; i++){
    let rest = prices.slice(i);
    for (let j = 0; j < rest.length; j++){
      console.log(rest);
      let r = rest[j] - prices[i];
      if (r > max) {
        max = r;
        pair = [prices[i],rest[j]];
      }
    }
  }
  return pair;

}

//console.log(maxReturn(prices));


//https://www.geeksforgeeks.org/maximum-difference-between-two-elements/


function maxReturn2(arr){

  let max_diff = arr[0] - arr[1]; 

  let min_element = arr[0];
  for (let i = 1; i<arr.length;i++){
  
    if (arr[i] < min_element){
      min_element = arr[i]
    }
    if (arr[i] - min_element>max_diff){
      max_diff = arr[i] - min_element;
    }
  
  }
  return max_diff;
}

console.log(maxReturn2(prices2));
