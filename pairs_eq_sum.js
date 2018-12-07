
const numbers = [1,2,3,4,5,6,30,50,80,90];

const target = 6

let results = []

for (let i = 0; i < numbers.length; i++) {

  const num = numbers[i];

  const rest = numbers.slice().splice(i+1);

for (let j = 0; j < rest.length; j++) {
    const num2 = rest[j];
    if (num + num2 === target) results.push([num,num2])
  }

}

console.log(results);
