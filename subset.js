//  https://www.youtube.com/watch?v=NdF1QDTRkck
//  29:00
function subsets(soFar, rest) {
  if (rest === "") {
    console.log(soFar);
  } else {
    // add to subset, remove from rest, recur
    subsets(soFar + rest[0], rest.substr(1));
    //dont add to subset, remove from rest, recur
    subsets(soFar, rest.substr(1));
  }
}

subsets("","abc")
