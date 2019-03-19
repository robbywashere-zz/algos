const LIST = [10, 4, 5, 90, 120, 80]

function stockSpan(price){

  const stack = [0];

  const span = [1];

  for (let i = 1; i < price.length; i++){
  
    while(stack.length && price[stack.slice(-1)[0]] <= price[i]) stack.pop();

    span[i] = (stack.length) ? (i-stack.slice(-1)[0]) : (i+1);

    stack.push(i)
  
  }

  return span;

}

console.log(stockSpan(LIST));
