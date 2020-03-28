/*




You are given an array of integers, where each element represents the maximum

number of steps that can be jumped going forward from that element. Write a

function to return the minimum number of jumps you must take in order to get

from the start to the end of the array.

For example, given [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], you should return 2, as the

optimal solution involves jumping from 6 to 5, and then from 5 to 9.

*/

const LIST = [6,2,4,0,5,1,1,4,2,9];
//const LIST = [1,1,9,1,1,1];


function jump(list){

  let x = list[0];
  let count = 0;

  for (let i = 1; i < list.length; i++){
    let next_window = list.slice(i,x+i);
    let max = list[i];
    console.log({ next_window });
    for (let j = 0; j < next_window.length; j++){
      if (next_window[j] > max) {
        x = next_window[j];
        //   i = j;
      }
    }
    count++;
    if (list[i]+i >= list.length) break
  
  }

  console.log(count);
}

jump(LIST)
