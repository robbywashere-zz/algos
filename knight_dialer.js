/*Suppose you dial keys on the keypad using only hops a knight can make. Every time the knight lands on a key, we dial that key and make another hop. The starting position counts as being dialed.

How many distinct numbers can you dial in N hops from a particular starting position?*/

//https://medium.com/@alexgolec/google-interview-questions-deconstructed-the-knights-dialer-f780d516f029

table = {
  1: [8,6],
  2: [7,9],
  3: [8,4],
  4: [3,9,0],
  5: [],
  6: [7,1,0],
  7: [2,6],
  8: [3,1],
  9: [2,4],
  0: [6,4]
}

                                                               
function count_sequences(start_position, num_hops){
  if (num_hops == 0) return 1
    num_sequences = 0 
  for (let position of table[start_position]){
    num_sequences += count_sequences(position, num_hops - 1)
  }
  return num_sequences
}


function kd(pos, hops, dist = new Set()) {

  if (hops === 0) return 1;

  return table[pos].reduce((p,n) => p + kd(n,hops-1,dist),0)


}

console.log(count_sequences(2,4));
