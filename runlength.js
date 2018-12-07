
function encode(string, count = 1) {
  if (string === "") return "";

  let first = string.substr(0,1);
  let next = string.substr(1,1);
  let rest = string.substr(1);

  if (first !== next) return count + first + encode(rest);

  return encode(rest,count+1);

}


const s = "AAAAAAAAAAABBBBBAAABBABABBBDCDCDCDDCCCCCCCCCCCCC";

console.log(s, encode(s), s.length);


const s2 = "BWWBWWBWWBWW"; //[3,BWW]

console.log(s2, encode(s2))

function encode2(string) {







}
