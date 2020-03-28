/*




Given a binary tree, return all paths from the root to leaves.



For example, given the tree



   1

  / \

 2   3

    / \

   4   6
      / \
     5   7




it should return [[1, 2], [1, 3, 4], [1, 3, 5]].

*/

const Node = (value)=>({ value });
let a = Node(1);
a.left = Node(2)
let b = a.right = Node(3);
b.left = Node(4);
let c = b.right = Node(6);

c.left = Node(5);
c.right = Node(7);

console.log(a);

let head = a;



function traverse(head, result = []){

  function ts(node, stack = []){
    stack.push(node.value)
    if (!node.left && !node.right) {
      return result.push(stack);
    }
    ts(node.left, [...stack]);
    ts(node.right, [...stack]);
  }
  ts(head);

  return result;
}

console.log(traverse(a));


