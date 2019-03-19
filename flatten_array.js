
const flatten = (arr) => Array.isArray(arr) ? arr.reduce((p,a)=>[...p, ...flatten(a)],[]) : [arr];


console.log(flatten([1,2,3,[4],[[6],[7]]]))
