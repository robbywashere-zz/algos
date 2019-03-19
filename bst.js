



const myArr = [1,2,3,4,5,6,7];

function BST(arr, root = {}){

  if (arr.length === 0) return null;

  if (arr.length === 1) return { val:  arr[0] }

   const rooti =  Math.floor(arr.length / 2);

   const left = BST(arr.slice(0,rooti));

   const right = BST(arr.slice(rooti+1));

   if (left && left.val !== null) root.left = left;
   if (right && right.val !== null) root.right = right;
   root.val = arr[rooti];

   return root;
}

const myBst = BST(myArr);

console.log(JSON.stringify(myBst,null,4))


function height(bst,count = 0){
  if (!bst.left && !bst.right) return count;

  const left = height(bst.left,count+1);

  const right = height(bst.right, count+1);

  return (left > right) ? left : right;

}

console.log(height(myBst))

function deserialize(data) {
	 
    data = data.split(',');
    var index = 0;
    function deserializer(data) {
       if(index > data.length || data[index] === '#'){
       	return null;
       }
       
       var node = { val: parseInt(data[index]) };
       index++;
       node.left = deserializer(data,index);
       index++;
       node.right = deserializer(data, index);
       return node;
    }
    
    return deserializer(data);
};



function serialize(bst) {
  if (bst === undefined) return '#';
  if (bst.right === undefined && bst.left === undefined) return bst.val;
  return [].concat(serialize(bst.left),bst.val,serialize(bst.right)).join(',')
}


const seri = serialize(myBst)
console.log(seri)

//console.log(JSON.stringify(deserialize(seri),null,4))
console.log(serialize(BST('1,2,#,#,3,4,#,#,5,#,#'.split(','))))
