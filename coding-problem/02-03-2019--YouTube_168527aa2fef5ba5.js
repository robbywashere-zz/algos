/*




Write a program that computes the length of the longest common subsequence of

three given strings. For example, given "epidemiologist", "refrigeration", and

"supercalifragilisticexpialodocious", it should return 5, since the longest

common subsequence is "eieio".



*/




function LCS(strA, strB, strC){
  if (!strA.length || !strB.length || !strC.length) return 0;
  if ((strA.slice(-1) === strB.slice(-1)) && (strB.slice(-1) === strC.slice(-1))) return  LCS(strA.slice(0,-1), strB.slice(0,-1), strC.slice(0,-1)) + 1;
  return longest(
    LCS(strA.slice(0,-1),strB,strC),
    LCS(strA,strB.slice(0,-1),strC), 
    LCS(strA,strB,strC.slice(0,-1))
  );

}

function longest(...args){
  return args.reduce( (p,str)=> str.length > p ? str.length : p,0);
}


const abc = ["epidemiologist", "refrigeration", "supercalifragilisticexpialodocious"];

console.log(LCS(...abc));

//ADH
