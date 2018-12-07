

const assert = require('assert');

function m(a,b,c,x = 0) {
  if (a <= b && c === 0) return 0;
  if (a >= b) return -1
  if ((b*x) > ((a * x) + c)) return x;
  return m(a,b,c,x+1);
}

function test(a,b,c,e) {
  let r= m(a,b,c);
  console.log(r,e)
  //console.log({ r, e, abc: {a,b,c} })
}

test(5,4,0,-1)
test(3,5,1,1)
test(3,3,1,-1)
test(3,3,0,0)
test(2,3,0,0)
test(4,5,1,2) 
test(4,9,113,23) 
test(4,55,313,7) 
//console.log(m(3,40,100000)) 
