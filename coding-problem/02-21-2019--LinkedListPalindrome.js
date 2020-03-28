
/* Determine if linked list forms a palindrome */

class LinkedList {
  constructor(){
    this.length = 0;
  }

  index(n){
    let count = 0;
    let node = this.head;
    while(node && count < this.length && count < n){
      count++;
      node = node.next
    }
    return node;
  }
  add(v){
    if (!this.head){
      this.head = { value: v }
      return v;
    }
    this.length++;
    let node = this.head;
    while (node.next){
      node = node.next;
    }
    node.next = { value: v };
    return v;
  }

  toArray(){
    let node = this.head;
    let result = [];
    while (node){
      result.push(node.value);
      node = node.next;
    }
    return result;
  }

  reverse(curr = this.head){
    let start = curr;
    let prev;
    let next;
    while (curr){
      next = curr.next;
      curr.next = prev
      prev = curr;
      curr = next;
    }
    return prev;
  }

}

const linkedList = new LinkedList();

linkedList.add(0);
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

console.log(linkedList.index(0).value);

linkedList.reverse();

console.log(linkedList.toArray());

let middle = Math.floor(linkedList.length/2);
console.log(linkedList.index(middle).value);

let middleNode = linkedList.index(middle);
//linkedList.reverse(linkedList.index(middle));

console.log(linkedList.toArray());



