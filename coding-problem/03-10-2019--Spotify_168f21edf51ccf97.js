/*

There are N couples sitting in a row of length 2 * N. They are currently ordered

randomly, but would like to rearrange themselves so that each couple's partners

can sit side by side.

What is the minimum number of swaps necessary for this to happen?

*/

function sideBySide(){
}

function minSwaps(couples){
}

/*


abcabc
abbacc
aabbcc


abaccb

aabccb
aaccbb


cbcaba
ccbaba

ccaabb

*/


function shuffle(list){
  let { length } = list;
  while (length) {
    let i = (Math.floor(Math.random()*length--));
    const tmp = list[length];
    list[length] = list[i]
    list[i] = tmp;
  }
  return list;
}


list = 'bcabac'.split('');



function nodeSwap([a,b],list){
  const i = list.indexOf(a);
  const j = list.length-1 - list.reverse().indexOf(b);
  return [i,j]
}



class Graph {

  constructor(arr = []){

    this.nodes = {};
    for (let char of [...(new Set([...arr]))]) this.nodes[char] = [];
    //let pairs = arr.reduce((p,n,i,a)=>[...p,...((i%2)?[]:[[a[i],a[i+1]]])],[]);
    for (let i = 0; i < arr.length-1; i++) !(i%2) && this.nodes[arr[i]].push(arr[i+1]);
  }


}


let myG = new Graph(list);

console.log(myG.nodes)

console.log(topoSort(myG, list));


function topoSort(graph,list){
  console.log(list);

  let stack = [];
  let explored = new Set();

  let count = 0;
  for (let node of Object.keys(graph.nodes)){
    if (!explored.has(node)){
      (function ts(n){
        explored.add(n);
        graph.nodes[n].forEach(nextNode=>{
          if (!explored.has(nextNode)) {
            //stack.push(nodeSwap([nextNode,n],list))
            count++;
            ts(nextNode);
          }
        })
      })(node)
    }
  }
  //while (stack.length) console.log(stack.pop())
  console.log(stack);
  return count;
}
