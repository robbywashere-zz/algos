class Heap {

  constructor(a = [], compare = (a,b)=>a>b){
    this.heap = a;
    this.compare = compare;
  }

  push(v){
    this.heap.push(v);
    this.bubbleUp(this.heap.length-1);
    return this;
  }

  pop(){
    const v = this.heap.shift();
    if (this.heap.length){
      this.heap.unshift(this.heap.pop());
      this.sinkDown(0);
    }
    return v;
  }

  sinkDown(n){
    const { length } = this.heap;
    while (true) {
      const child2N = (n + 1) * 2;
      const child1N = child2N - 1;
      if (child1N < length && this.compare(this.heap[n], this.heap[child1N])){
        [this.heap[n], this.heap[child1N] ] = [this.heap[child1N], this.heap[n]];
        n = child1N
      }
      else if (child2N < length && this.compare(this.heap[n] > this.heap[child2N])){
        [this.heap[n], this.heap[child2N] ] = [this.heap[child2N], this.heap[n]];
        n = child2N
      }
      else {
        break;
      }
    }
  }

  bubbleUp(n){

    while (n > 0) {

      let parentN = Math.floor((n + 1) / 2) - 1;

      if (this.compare(this.heap[n],this.heap[parentN])) break;

      [ this.heap[parentN], this.heap[n] ] = [ this.heap[n], this.heap[parentN] ];

      n = parentN;

    }

  }


}

const mh = new Heap([],(a,b)=>a<b)

mh.push(3)
mh.push(2)
mh.push(1)
mh.push(5)
mh.push(4)


while(mh.heap.length) {
  console.log(mh.pop());
}


console.log(mh.heap);

