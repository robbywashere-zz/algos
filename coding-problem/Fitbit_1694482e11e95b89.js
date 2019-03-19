/*




Given a linked list, rearrange the node values such that they appear in

alternating low -> high -> low -> high ... form. For example, given 1 -> 2 -> 3

-> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.



*/


class LinkedList {

  
  add(n){
    let node = { value: n };
    if (!this.head) this.head = node;
    else {
      let n = this.head;
      while(n.next) {
        n = n.next;
      }
      n.next = node;
    }
    return this;
  }

  toArray(){
    let n = this.head;
    let arr = [];
    while (n) {
      arr.push(n.value);
      n = n.next
    }
    return arr;
  }
}

let ll = new LinkedList();

console.log(ll.add(1).add(2).add(3).add(4).add(5));

function rearrange(linkedList){

  let node = linkedList.head;

  let i = 0;
  let prev;
  while (node.next){
    if (i++%2){
      let t = node.next;
      prev.next = node.next;
    } else {
      prev = node;
      node = node.next;
    }
  }

  return linkedList
}


rearrange(ll);


console.log(ll.toArray())



