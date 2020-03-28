/*




Given the head of a singly linked list, reverse it in-place.



*/

// h .  n . 
// 1 -> 2 -> 3 -> 4 -> 5
// 5 -> 4 -> 3 -> 2 -> 1


class LinkedList {

  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  reverse(head = this.head){ 

    if (head == null || head.next == null) return head;
    let p = this.reverse(head.next);
    head.next.next = head;
    head.next = null;
    return p;
  }
}



let ll = new LinkedList(1)

ll.addToHead(2);
ll.addToHead(3);

console.log(JSON.stringify(ll))




console.log(ll.reverse())
