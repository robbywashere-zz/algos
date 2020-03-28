/*




In academia, the h-index is a metric used to calculate the impact of a

researcher's papers. It is calculated as follows:



A researcher has index h if at least h of her N papers have h citations each. If

there are multiple h satisfying this formula, the maximum is chosen.



For example, suppose N = 5, and the respective citations of each paper are [4,

3, 0, 1, 5]. Then the h-index would be 3, since the researcher has 3 papers with

at least 3 citations.



Given a list of paper citations of a researcher, calculate their h-index.



*/
function hIndex(citations) {
  citations = citations.sort();
  console.log(citations);
  let result = 0;    
  for(let i=0; i<citations.length; i++){
    let smaller = Math.min(citations[i], citations.length-i);
    console.log({ result, smaller });
    result = Math.max(result, smaller);
  }
  return result;
}

console.log(hIndex([4,5,0,1,5,6,3]));
