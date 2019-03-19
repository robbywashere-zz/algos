

/*
Input :  string = "geeksforgeeks"
         pattern = "ork" 
Output :  Minimum window is "ksfor"
*/


function slidingWindows(str,k){

  for (let i = 0; i < str.length; i++) {
  
  }
  for (let i = k; i < str.length; i++) {
  }
}



function findwin(str,pat){

  const chrTable = {};

  pat.split("").forEach(c=>chrTable[c] = (chrTable[c] || 0)+1);

  let counter = [...new Set(pat.split(""))].length
  let end = 0;
  let begin = 0;
  let result = "";


  while (end < str.length){
    const endChar = str[end];
    if (endChar in chrTable){
      chrTable[endChar]--;
      if (chrTable[endChar] === 0) counter--;
    }
    end++;

    while (counter === 0) {

      if ((end-begin) < result.length || !result.length) {
        result = str.substr(begin,end-begin);
      }

      const beginChar = str[begin];
      if (beginChar in chrTable) {
        chrTable[beginChar]++;
        if (chrTable[beginChar] > 0) counter++
      }

      begin++
    
    }
  
  }

  return result;


}

console.log(findwin("geeksforgeeks","ork"))

/*

const flatten = (arr) => Array.isArray(arr) ? arr.reduce((p,a)=>[].concat(p, flatten(a)),[]) : arr;

console.log(flatten([1,[2,[3]],[[4]]]))

function sum(x, ...rest){

  const v = n => sum(x + n) 

  v.valueOf = ()=> x

  return v

}


console.log(+sum(1,2)(2)(4)(5))


  */
