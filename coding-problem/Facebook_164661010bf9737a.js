/*




Given a stream of elements too large to store in memory, pick a random element

from the stream with uniform probability.



*/



function pick(bigStream){
  randomElement = null;

  for (let i = 0; i < bigStream.length; i++){
    let e = bigStream[i];
    if (i === 0) randomElement = e;
    else if (Math.floor(Math.random() * bigStream.length) === 1){
      randomElement = e;
    }
  }
  return randomElement;

}


console.log(pick([1,2,3,4,5,6,7,8,9]))
