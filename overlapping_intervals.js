
/*


Given an array of time intervals (start, end) for classroom lectures (possibly

overlapping), find the minimum number of rooms required.



For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.




*/

const intervals = [[30, 75], [0, 50], [60, 150], [10,10001],[10002,10003]];


function overlap([s1,e1],[s2,e2]){
  return (s1 <= e2) && (s2 <= e1);
}

console.log(overlap(intervals[0],intervals[1]) )

let rooms = 0;
for (let i = 0; i < intervals.length; i++){
  let rest = intervals.slice(i+1);
  let pick = intervals[i];
  if (rest.some(overlap.bind(null,pick))) rooms++
}




console.log(rooms);
