
/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/
// https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/

function permute(soFar, rest, result) {
  if (rest === "") {
    result.push(soFar);
  } else {
    for (let i = 0; i < rest.length; i++) {
      let next = soFar + rest[i];
      let remaining = rest.substr(0,i) + rest.substr(i+1);
      permute(next, remaining, result);
    }
  }
  return result;
}


function subsets(soFar, rest) {
  if (rest === "") {
    console.log(soFar);
  } else {
    // add to subset, remove from rest, recur
    subsets(soFar + rest[0], rest.substr(1));
    //dont add to subset, remove from rest, recur
    subsets(soFar, rest.substr(1));
  }
}


function decode(soFar, rest) {

  if (rest === "") {
  
  }


}

//1234

console.log(decode("",'123'));

/* 1
 * 2
 * 3
 * 12
 * 23
 * 34
 *
 */


const cipher = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  e: '5',
  f: '6',
  g: '7',
  h: '8',
  i: '9',
  j: '10',
  k: '11',
  l: '12',
  m: '13',
  n: '14',
  o: '15',
  p: '16',
  q: '17',
  r: '18',
  s: '19',
  t: '20',
  u: '21',
  v: '22',
  w: '23',
  x: '24',
  y: '25',
  z: '26',
};
