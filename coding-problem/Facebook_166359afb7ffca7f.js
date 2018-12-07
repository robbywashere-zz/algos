/*




Given a function f, and N return a debounced f of N milliseconds.



That is, as long as the debounced f continues to be invoked, f itself will not

be called for N milliseconds.



*/


function debounce(fn, ms){
  let timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(fn,ms)
  }
}

let db = debounce(()=>console.log('hi!'),1000)

db();
db();
db();
db();
