/*




Given two singly linked lists that intersect at some point, find the

intersecting node. The lists are non-cyclical.



For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the

node with value 8.



In this example, assume nodes with the same value are the exact same node

objects.



Do this in O(M + N) time (where M and N are the lengths of the lists) and

constant space.



*/

class LinkedList {


  constructor(){
    this.head = { next: null, value: null }
  }

  add(value){
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = { next: null, value }
  }


  remove(value){
    let node = this.head;
      while (node.next) {
        if (node.next.value === value) {
          break;
        }
        node = node.next;
      }
    node.next = node.next.next
  }

}



let ll1 = new LinkedList()
let ll2 = new LinkedList()

ll1.add(3);
ll1.add(7);
ll1.add(8);
ll1.add(10);

console.log(JSON.stringify(ll1,null,4))

ll2.add(99);
ll2.add(1);
ll2.add(8);
ll2.add(10);

console.log(JSON.stringify(ll2,null,4))
