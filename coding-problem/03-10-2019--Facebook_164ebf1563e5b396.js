/*




Given an unordered list of flights taken by someone, each represented as

(origin, destination) pairs, and a starting airport, compute the person's

itinerary. If no such itinerary exists, return null. If there are multiple

possible itineraries, return the lexicographically smallest one. All flights

must be used in the itinerary.



For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL',

'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list

['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].



Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport

'COM', you should return null.



Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and

starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even

though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first

one is lexicographically smaller.



*/


let FLIGHTS = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']].sort(([x,a],[_,b])=>a>b);
console.log(FLIGHTS)


function graph(flights){
  let flmap = {};
  for (let flight of flights) {
    const [a, b] = flight;
    if (!(a in flmap)) flmap[a] = [];
    flmap[a].push(b);
  }
  return flmap;
}

function traverse(g, key,result = []){
  result.push(key);
  if (g[key] === undefined || !g[key].length) return result;
  let n = g[key].shift();
  return traverse(g, n,result);
  
}

console.log(traverse(graph(FLIGHTS),'A'))
