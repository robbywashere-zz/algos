
function repeatNumber(arr){




  let xor = arr[0];
  for (let int of arr.slice(1)){
    xor ^= int
  }
}


const arr = [18,-5,2,7,32,18,22,3]

repeatNumber(arr);
