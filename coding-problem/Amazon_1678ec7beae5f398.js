/*




You are given a list of data entries that represent entries and exits of groups

of people into a building. An entry looks like this:



{"timestamp": 1526579928, count: 3, "type": "enter"}



This means 3 people entered the building. An exit looks like this:



{"timestamp": 1526580382, count: 2, "type": "exit"}



This means that 2 people exited the building. timestamp is in Unix time

[https://en.wikipedia.org/wiki/Unix_time].



Find the busiest period in the building, that is, the time with the most people

in the building. Return it as a pair of (start, end) timestamps. You can assume

the building always starts off and ends up empty, i.e. with 0 people inside.



*/


function kadane(list){


  let max_so_far = 0;
  let max_ending_here = 0;

  for (let i = 0; i < list.length; i++) {
    max_ending_here += list[i];
    if (max_ending_here < 0) {
      console.log('a',i)
      max_ending_here = 0;
    }
    if (max_so_far < max_ending_here) {
      console.log(list[i])
      max_so_far = max_ending_here;
    }
  }
  return max_so_far;
}

const ENTRIES = [
{"timestamp": 1, count: 3, "type": "enter"},
{"timestamp": 2, count: 4, "type": "enter"},
{"timestamp": 3, count: 2, "type": "exit"},
{"timestamp": 4, count: 5, "type": "exit"},
{"timestamp": 5, count: 10, "type": "enter"},
{"timestamp": 6, count: 12, "type": "enter"},
{"timestamp": 7, count: 14, "type": "enter"},
{"timestamp": 8, count: 7, "type": "exit"},
{"timestamp": 9, count: 3, "type": "exit"},
{"timestamp": 10, count: 26, "type": "exit"},
];



const sequence = [ 3,4,-2,-2,10,-7,-6];


console.log(kadane(ENTRIES.map(({ count, type })=>type === "enter" ? count : -1 * count)));

function findBusiest(entries){

  let max_so_far = 0;
  let max_ending_here = 0;
  let begin;
  let end;

  for (let {timestamp, count, type} of entries){
    const amt = (type === "enter") ? count : -1 * count;
    max_ending_here += amt;


    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here
    }
  }
  return  max_so_far;


}

//console.log(findBusiest(ENTRIES));










findBusiest(ENTRIES);
