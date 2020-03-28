

/* Reverse a linked list */

const assert = require('assert');

class LinkedList {
  constructor(){
    this.length = 0;
  }

  addNode(value){
    this.length++;
    const newNode = { value };
    if (!this.head) {
      this.head = newNode;
    }
    else {
      let node = this.head;
      while(node.next){
        node = node.next;
      }
      node.next = newNode;
    }
  }
  indexValue(n){
    return this.indexNode(n).value
  }

  indexNode(n){
    let node = this.head;
    let count = 0;
    while(count < n){
      if (!node) return;
      count++;
      node = node.next;
    }
    return node;
  }

  reverse(curr = this.head){
    let head = curr;
    let prev;
    while (curr){
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  toArray(){
    let array = [];
    let node = this.head;
    while(node){
      array.push(node.value)
      node = node.next;
    }
    return array;
  
  }

}

const ll = new LinkedList();

ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);


//assert.equal(ll.head.value,1)
//assert.equal(ll.head.next.value,2)
//assert.equal(ll.head.next.next.value,3)
assert.deepEqual(ll.toArray(),[1,2,3,4])

ll.head = ll.reverse();
assert.deepEqual(ll.toArray(),[4,3,2,1]);
assert.equal(ll.indexValue(0),4);
assert.equal(ll.length,4);


function maxNonAdj(list){
  let incl = 0;
  let excl = 0;
  for (let item of list){
    let newExcl = Math.max(item,excl);
    incl = excl + item;
    excl = newExcl;
  }
  return Math.max(incl,excl);
}

console.log(maxNonAdj([1,2,3,4,9]))

/*
console.log(ll.length/2)

function sum(x){
  const v = (y)=>sum(x+y);
  v.valueOf = () => x
  return v
}
console.log(+sum(2)(3)(6));
*/
/*
 *
  reverse(){
    let tail = this.tail;
    let head = this.head;
    let curr = this.head;
    let prev;
    let next;
    while (curr){
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = tail;
    this.tail = head;
  }

 *
 */






