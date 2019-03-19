inp = [1, {a: 2}, [[3]], [[4, 5], 6], 7]
out = inp;

while(out.some(Array.isArray)) out = [].concat(...out);

console.log(out);
