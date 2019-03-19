/*




Assume you have access to a function toss_biased() which returns 0 or 1 with a

probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the

bias of the coin.



Write a function to simulate an unbiased coin toss.



*/

function makeCoin(biasA){
  return ()=> (parseFloat(Math.random().toFixed(2)) <= biasA) ? 1 : 0;
}


const coinToss = makeCoin(0.9);


let count = {1:0,0:0};
for (let i = 0; i <= 100000;i++){
  count[unbiased()]++;
}
console.log(count);


function unbiased(){

  const a = coinToss();
  const b = coinToss();

  if (a === 1 && b === 0) return 0
  if (a === 0 && b === 1) return 1

  return unbiased();


}

