/*




Given a list of integers, return the largest product that can be made by

multiplying any three integers.



For example, if the list is [-10, -10, 5, 2], we should return 500, since that's 

-10 * -10 * 5.



You can assume the list has at least three integers.



*/





function largestProduct(list, ints = []){

  if (ints.length === 3) return ints.reduce((p,n)=>p*n); 

  let max = -Infinity;

  for (let i = 0; i < list.length; i++){

    let r = [...list.slice(0,i), ...list.slice(i+1)]

    let result = largestProduct(r, [ ...ints, list[i]]);

    max  = result > max ? result : max;
  
  }

  return max
}



console.log(largestProduct([-10, -10, 2, 5 ]));
console.log(largestProduct([-10, -10, 2, 5, 11, 0, 9, 22, 33 ]));
