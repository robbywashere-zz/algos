
///https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/
//
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

}

let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addDirEdge("A", "C");
g.addDirEdge("A", "B");
g.addDirEdge("A", "D");
g.addDirEdge("C", "D");
g.addDirEdge("D", "E");
g.addDirEdge("E", "F");
g.addDirEdge("B", "G");



function topoSort(graph){

  let stack = [];
  let explored = new Set();

  for (let node of Object.keys(graph.nodes)){
    if (!explored.has(node)){
      function ts(n){
        explored.add(n);
        graph.nodes[n].forEach(newNode=>{
          if (!explored.has(newNode)) ts(newNode);
        })
        stack.push(n);
      }

      ts(node)
    }
  }
  while (stack.length) console.log(stack.pop())
}




topoSort(g);




