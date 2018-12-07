/*


Given an array of numbers, find the length of the longest increasing subsequence

in the array. The subsequence does not necessarily have to be contiguous.


For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7,

15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.


*/


let n = 0;
function longsubseq(arr, seq = []) {
  for (let i = 0; i < arr.length; i++) {
    n++;
    if (arr[i] > seq.slice(-1)[0] || seq.length === 0) {


      let seq1 = longsubseq(arr.slice(i), [...seq, arr[i]]);

      let seq2 = longsubseq(arr.slice(i+1), [ ...seq ]);

      let largest = (seq1.length > seq2.length) ? seq1 : seq2;

      seq = largest.length > seq.length ? largest : seq;
      
    }
  }

  return seq;
}

function longsubseq2(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  const prev = arr[0];

  for (let i = 1; i < sortedArr.length; i++) {

  }
}

console.log(longsubseq([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));
console.log([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15].length)
console.log(n)

