function parens(str, left, right){

  if (left > right) {
    return;
  }
  if (right === 0 && left === 0) console.log(str);

  if (left >= 0) {
    parens(str + "(", left - 1, right)
  }
  if (right >= 0) {
    parens(str + ")", left, right - 1);
  }

}



const n =  parseInt(process.argv[2]);

parens("", n/2,n/2)
