/*
Check if two given strings are isomorphic to each other

Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every character of str1 to every character of str2. And all occurrences of every character in ‘str1’ map to same character in ‘str2’

*/



function isomorphic(str1,str2){

  if (str1.length !== str2.length) return false;

  const map = new Map();


  for (let i = 0; i < str1.length; i++) {
  
    const chr1 = str1[i];
    const chr2 = str2[i];

    if (map.has(chr1) && (map.get(chr1) !== chr2)) return false;

    else map.set(chr1, chr2);
  
  }

  return true;

}

console.log(isomorphic('aab','xxy'))
console.log(isomorphic('aab','xyx'))
