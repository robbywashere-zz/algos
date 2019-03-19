/*




The Sieve of Eratosthenes is an algorithm used to generate all prime numbers

smaller than N. The method is to take increasingly larger prime numbers, and

mark their multiples as composite. 



For example, to find all primes less than 100, we would first mark [4, 6, 8,

...] (multiples of two), then [6, 9, 12, ...] (multiples of three), and so on.

Once we have done this for all primes less than N, the unmarked numbers that

remain will be prime.



Implement this algorithm.



Bonus: Create a generator that produces primes indefinitely (that is, without

taking N as an input).



*/

function erato(n){
  let map = new Map((new Array(n-1).fill(1)).map((n,i)=>[i+2,true]));
  for (let i = 2; i <= Math.sqrt(n);i++){
    if (!map.get(i)) continue
    for (let j = i*2; j <= n; j += i) map.set(j,false)
  }
  return [...map].reduce((p,[i,b])=>b?[...p,i]:p,[])
}

console.log(erato(100))
