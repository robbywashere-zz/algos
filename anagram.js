
function anagram(str1, str2){

  if (str1.length !== str2.length) return false;

  let map = new Map();



  for (let i = 0; i < str1.length; i++) {
    let v = map.has(str1[i]) ? map.get(str1[i]) : 0;
    map.set(str1[i],v + 1);
  }


  for (let i = 0; i < str2.length; i++) {

    const chr = str2[i];

    if (!map.has(chr)) return false;

    let v = map.get(chr) - 1;

    map.set(chr,v);

    if (v === 0) map.delete(chr);

  }


  return (map.size) ? false : true;



}

console.log(anagram("stressed","desserts"));
