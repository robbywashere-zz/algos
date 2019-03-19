/*




You come across a dictionary of sorted words in a language you've never seen

before. Write a program that returns the correct order of letters in this

language.


foo
eoo
emol

For example, given ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], you should return 

['x', 'z', 'w', 'y'].

*/

class Graph {

  constructor(){
    this.nodes = {};
  }
  addNode(n){
    if (!this.nodes[n]) this.nodes[n] = [];
  }
  addDirEdge(a,b){
    this.nodes[a].push(b);
  }
  sort(){

    let stack = [];
    let explored = new Set();

    const ts = (n) => {
      explored.add(n);
      this.nodes[n].forEach(nextNode=>{
        if (!explored.has(nextNode)) ts(nextNode);
      })
      stack.unshift(n);
    }
    for (let node of Object.keys(this.nodes)){
      if (!explored.has(node)){
        ts(node)
      }
    }
    //while (stack.length) console.log(stack.pop())
    return stack;
  }
}
function alienLang(wordList){

  const chars = [...new Set(wordList.reduce((p,n)=>([...p,...n]),[]))];

  const g = new Graph();

  chars.forEach(c=>g.addNode(c));
  for (let i = 0; i < wordList.length-1; i++) {
    let word1 = wordList[i];
    let word2 = wordList[i+1];
    for (let j = 0; j < Math.min(word1.length,word2.length); j++){
      const [c1, c2] =  [word1[j], word2[j]];
      if (c1 !== c2) {
        g.addDirEdge(c1,c2);
        break;
      }
    }
  }
  return g.sort();
}



console.log(alienLang(['xwwz', 'wxyz', 'wxyw', 'ywx', 'ywz']));
console.log(alienLang(["caa", "aaa", "aab"]));

