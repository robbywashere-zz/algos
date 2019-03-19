/*




Print the nodes in a binary tree level-wise. For example, the following should

print 1, 2, 3, 4, 5.

  1

 / \

2   3

   / \

  4   5

*/



let bst = { v: 1, l: { v: 2 } };

bst.r = { v: 3, l: { v: 4 }, r: { v: 5 } }

console.log(bst);

function level(b, stack = []){
  if (b == undefined) return;
  stack.push(b.v)
  level(b.l, stack);
  level(b.r, stack);
  return stack;
}

console.log(level(bst));
