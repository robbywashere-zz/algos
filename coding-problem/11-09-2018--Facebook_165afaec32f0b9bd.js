/*




Given an array of integers, write a function to determine whether the array

could become non-decreasing by modifying at most 1 element.



For example, given the array [10, 5, 7], you should return true, since we can

modify the 10 into a 1 to make the array non-decreasing.



Given the array [10, 5, 1], you should return false, since we can't modify any

one element to get a non-decreasing array.


6, 5, 1, 3

*/


const arr1 = [10, 5, 7];

const arr2 = [10, 5, 1];


console.log(arr1.reduce((p,n)=> (p.v > n) ? ({ i: ++p.i, v: n }) : ({ i: p.i, v: n }),{ i: 0, v: -Infinity }).i <= 1)


