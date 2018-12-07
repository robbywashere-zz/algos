
//https://bost.ocks.org/mike/shuffle/

function shuffle(array){

  let m = array.length


  while(m){
  
  
    let i = Math.floor(Math.random() * m--) //move 'pointer' downward while making random range smaller

    let t = array[m];
    array[m] = array[i]; //Put element at then 'end' of the list
    array[i] = t; 
  
  }
  return array;

}

console.log(shuffle([1,2,3,4,5,6,7,8,9]))
