/*



  // Fisher–Yates shuffle

Given a function that generates perfectly random numbers between 1 and k

(inclusive), where k is an input, write a function that shuffles a deck of cards

represented as an array using only swaps.



It should run in O(N) time.



Hint: Make sure each one of the 52! permutations of the deck is equally likely.



*/





function shuffle2(list){

  let { length } = list;

  while (length) {
    let i = (Math.ceil(Math.random()*length--));
    const tmp = list[length];
    list[length] = list[i]
    list[i] = tmp;
  }
  return list;
}





function shuffle(list){
  let { length } = list;


  while (length){
    const rindex = Math.round(Math.random() * length--)
    let swap = list[length];
    list[length] = list[rindex]
    list[rindex] = swap;
  }

  console.log(list)
}

//shuffle([1,2,3,4,5,6,7,8])
