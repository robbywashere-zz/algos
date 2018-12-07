"use strict";


console.log(JSON.stringify(permx([7,8,9])))
function permx(arr) {



  for (let i = 0; i < arr.length; i++) {
    let a = arr.slice()
    let x = a.splice(i,1)


  }

  return r

}

function perm(arr1) {


  for (let i = 0; i < arr1.length; i++) {
    let arr2 = arr1.slice()
    let [ char1 ] = arr2.splice(i,1)
    for (let j = 0; j < arr2.length; j++) {
      let arr3 = arr2.slice()
      let [ char2 ] = arr3.splice(j,1)
      for (let k = 0; k < arr3.length; k++) {
        let arr4 = arr3.slice()
        let [ char3 ] = arr4.splice(k,1)
        console.log([].concat(char1,char2,char3))
      }
    }

  }
}

//console.log(JSON.stringify(perm2([1,2,3])))

function perm2(arr){
  let r  = []

  if (arr.length <= 1) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {

    let a = arr.slice()
    let [c] = a.splice(i,1);

    r.push(
      [].concat(c, perm2(a))
    )
  }
  console.log(r)
  return r
}




//perm([1,2,3])
//console.log(permie([1,2,3]))
//


