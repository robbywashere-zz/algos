

function enc(charMap, num, result = ""){
  // var r, 'the Remainder' given by the modulo operator `%` will be the character to choose from the charMap; since that is 'as far as we can go' for this 'integer-place'

  // if the charMap is of length 60, and num = 66, the farthest we can go with the charMap of length 60 is 60, leaving a remainder of 6 ... therefore the char of choice for our first character = charMap[6], now the next number will be; num = 66-6 = 60  

  // next go ... 60 % radix = 0 = r = 0; our remainder is '0';
  // then (num - r) / radix = 1 OR (60  - 0) / 60 = 1; 
  // the result will be 16


  let radix = charMap.length

  const r = num % radix; 

  result = charMap[r] + result;

  num = ((num - r) / radix)

  if (num === 0) { return result };

  return enc(charMap, num, result);
}


function dec(chrMap, encStr) {
  return encStr.split('')
    .reverse()
    .reduce((a,c,i) => a + (chrMap.indexOf(c) * (chrMap.length ** i)),0)
}


const assert = require('assert');

const CHAR_MAP = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const number = 19812840094242

let encResult;
let decResult;

//console.log(`Encode: ${number} => ${encResult = enc(CHAR_MAP, number)}`)

//console.log(`Decode: ${encResult} => ${decResult = dec(CHAR_MAP, encResult)}`)

//assert.equal(number, decResult)






