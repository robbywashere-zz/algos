/*




Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the

number of ways it can be decoded.



For example, the message '111' would give 3, since it could be decoded as 'aaa',

'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not

allowed.



*/

//https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/
function decode(str){
  if (str.length === 0 || str === "0") return 0;
  if (str.length === 1 && str !== "0") return 1;
  if (str.substr(0,2) < '27') {
    return 2 + decode(str.slice(2));
  }
  return decode(str.slice(1));
}

console.log('11',2,decode('11'));
console.log('111',3,decode('111'));
console.log('1234',3,decode('1234'));
console.log('121',3,decode('121'));
