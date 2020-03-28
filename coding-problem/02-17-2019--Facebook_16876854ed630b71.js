/*




Given a number in Roman numeral [https://en.wikipedia.org/wiki/Roman_numerals] 

format, convert it to decimal.



The values of Roman numerals are as follows:



{

    'M': 1000,

    'D': 500,

    'C': 100,

    'L': 50,

    'X': 10,

    'V': 5,

    'I': 1

}





In addition, note that the Roman numeral system uses subtractive notation

[https://en.wikipedia.org/wiki/Subtractive_notation] for numbers such as IV and 

XL.



For the input XIV, for instance, you should return 14.



*/

const assert = require('assert');

const RN = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
}

function roman(romanStr){

  let result = 0;
  let last = 0;
  for (let c of romanStr) {
    let curr = RN[c];
    if (last < curr){
      result -= last;
      curr = (curr - last);
    }
    result += curr;
    last = curr;
  }
  return result;
}

try {
  assert.equal(roman('IV'),4);
  assert.equal(roman('XL'),40);
  assert.equal(roman('VII'),7);
  assert.equal(roman('XVI'),16);
  assert.equal(roman('XIV'),14);
} catch(e){
  console.log('Error:',e.message);
}

