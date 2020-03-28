/*




Given a 32-bit integer, return the number with its bits reversed.



For example, given the binary number 1111 0000 1111 0000 1111 0000 1111 0000,

return 0000 1111 0000 1111 0000 1111 0000 1111.



*/

const Mask = parseInt(Array(32).fill(1).join(''),2);

function reverseBits(bin){
  let x = (parseInt(bin,2) ^ Mask).toString(2);
  return Array(32-x.length).fill(0).join('') + x;
}

console.log(reverseBits('11110000111100001111000011110000'));


