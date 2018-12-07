/*
 
 The power set of a set is the set of all its subsets. Write a function that,
 given a set, generates its power set.
 
 For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1,
 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
 
 You may also use a list or array to represent a set.

 */

function powerset(givenSet){

  let pset = [];
  function subsets(set, newset = []){


    if (set.length === 0) {
      pset.push(newset);
      return;
    }

    subsets(set.slice(1),[...newset,set[0]],pset)
    subsets(set.slice(1),newset,pset)
  }
  subsets(givenSet);

  return pset;
}

console.log(powerset([1,2,3]))
