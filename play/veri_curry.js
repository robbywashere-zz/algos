
function sum(n){
  let v = x => sum(n + x);
  v.valueOf = () => n
  return v;
}



console.log(+sum(1)(2)(6));


function addSubtract(n = 0,flip=1){
  flip *= -1;
  let v = x => addSubtract(n + (x*flip),flip);
  v.valueOf = ()=> n
  return v;

}

console.log(+addSubtract(5)(2)(2)(11)(88)()(100));

