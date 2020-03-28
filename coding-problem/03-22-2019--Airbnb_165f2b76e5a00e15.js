/*




We're given a hashmap with a key courseId and value a list of courseIds, which

represents that the prerequsite of courseId is courseIds. Return a sorted

ordering of courses such that we can finish all courses.



Return null if there is no such ordering.



For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'],

'CSC100': []}, should return ['CSC100', 'CSC200', 'CSCS300'].



*/



console.log(topoSort2({'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'],'CSC100': []}));


function topoSort2(graph){

  let stack = [];
  let visited = new Set();

  for (let key of Object.keys(graph)){

    if (!visited.has(key)){

      function ts(node){
        if (!visited.has(node)){
          visited.add(node)
          graph[node].forEach(nextNode=>{
            ts(nextNode)
          });
          stack.push(node);
        }
      }
      ts(key)
    }
  
  }
  return stack;
}




























function topoSort(graph){
  let NONE = {};

  let stack = [];
  let explored = new Set();

  try{
    for (let node of Object.keys(graph)){
      if (!explored.has(node)){
        function ts(n){
          explored.add(n);
          if (!graph[n]) throw NONE;
          graph[n].forEach(nextNode=>{
            if (!explored.has(nextNode)) ts(nextNode);
          })
          stack.push(n);
        }
        ts(node)
      }
    }
    return stack;
  } catch(e){
    if (e === NONE) return null
    throw e;
  }
}


console.log(topoSort({'CSC300': ['CSC100', 'CSC200'],  'CSC100': [], 'CSC200': ['CSC100'] }));
