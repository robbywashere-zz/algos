/*
 There exists a staircase with N steps, and you can climb up either 1 or 2 steps
 at a time. Given N, write a function that returns the number of unique ways you
 can climb the staircase. The order of the steps matters.
 
 For example, if N is 4, then there are 5 unique ways:
 
 What if, instead of being able to climb 1 or 2 steps at a time, you could climb
 any number from a set of positive integers X? For example, if X = {1, 3, 5}, you
 could climb 1, 3, or 5 steps at a time.
 */

//Given an Integer and a Set of Integers, determine all of the unique combinations of integers from the set of integers would add up to the given integer
//

//assuming none repeat, none are below 1;

//Because this is an array steps to solve for target and not a 'set' we do not remove set[i] / subset here 

let result = [];

function climb(target, set, stepsSoFar = []) {

  for (let i = 0; i < set.length; i++) {

    const stair = set[i];

    const stairsLeft = target-stair;

    if (stairsLeft < 0)  break

    if (stairsLeft === 0) result = [...result, [...stepsSoFar, stair ]];


    if (stairsLeft > 0)  climb(stairsLeft,set,[...stepsSoFar, stair ])


  }
  
}

climb(12,[2,3,4,6])
console.log(result);



