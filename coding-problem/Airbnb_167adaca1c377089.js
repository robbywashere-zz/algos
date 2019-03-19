/*




Given a linked list and a positive integer k, rotate the list to the right by k 

places.



For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 

3 -> 5 -> 7 -> 7.



Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4

-> 5 -> 1 -> 2.



*/


class LinkedList {

  constructor(){
    this.length = 0;
  }

  toArray(){

    let node = this.head;
    let r = [];
    while(node) {
      r.push(node.v);
      node = node.next;
    }
  
    return r;
  }

  index(n){
    let node = this.head;
    let i = 0;
    while(i++ < n){
      node = node.next;
    }
    return node;
  }
  rotate(n){
    this.tail.next = this.head;
    let node = this.head;
    let newHead = this.index((this.length - (n % this.length)));
    let newTail = this.index((this.length - (n % this.length+1)));
    newTail.next = null;
    this.head = newHead;
    this.tail = newTail; 
    return this;
  }


  add(n){
    this.length++;
    if (!this.head){
      this.head = { v: n };
      this.tail = this.head;
    } else {
      let node = this.head;
      while (node.next){
        node = node.next;
      }
      node.next = { v: n };
      this.tail = node.next;
    }
    return this;
  }


}

const LL = new LinkedList();

LL.add(1).add(2).add(3).add(4).add(5)

console.log(LL.rotate(3).toArray());

