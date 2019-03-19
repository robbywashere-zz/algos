
/* largest sum of non adjacent numbers in n time */


function maxNonAdj(arr){

  let incl = 0;
  let excl = 0;
  
  for (let i = 0; i < arr.length; i++) {

    let newExcl = Math.max(excl,incl);
    incl = excl + arr[i];
    excl = newExcl;
    console.log({ incl, excl })

  }

  return Math.max(incl, excl);

}

console.log(maxNonAdj([9,3,11,30]));

