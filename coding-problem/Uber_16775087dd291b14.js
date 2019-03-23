/*




Implement a 2D iterator class. It will be initialized with an array of arrays,

and should implement the following methods:



 * next(): returns the next element in the array of arrays. If there are no more

   elements, raise an exception.

 * has_next(): returns whether or not the iterator still has elements left.



For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() 

repeatedly should output 1, 2, 3, 4, 5, 6.



Do not use flatten or otherwise clone the arrays. Some of the arrays can be

empty.



*/

/*
function *iter(arr){
  for (let el of arr) {
    if (Array.isArray(el)) yield * iter(el);
    else yield el;
  }
}*/


const empty = (arr) => arr.reduce( (p,n) => p && (Array.isArray(n) ? empty(n) : false), true);



class MyIter {

  constructor(arr){
    this.gen = this[Symbol.iterator](arr);
    this._has_next = true;
    this.next_val = this.gen.next().value;
  }

  *[Symbol.iterator](arr){
    while (arr.length) {
      let el = arr.shift();
      if (Array.isArray(el)) {
        arr.unshift(...el);
      }
      else yield el
    }
  }

  next(){
    let next = this.next_val;
    this.next_val = this.gen.next().value;
    if (this.next_val === undefined) this._has_next = false;
    return next;
  }

  has_next(){
    return this._has_next 
  }

}

let mi = new MyIter([[1, 2], [3], [[4]],[],[1,2]],);
console.log(mi.next())
console.log(mi.next())
console.log(mi.next())
console.log(mi.has_next())
console.log(mi.next())
console.log(mi.has_next())
console.log(mi.next())
console.log(mi.next())
console.log(mi.has_next())
console.log(mi.next())
