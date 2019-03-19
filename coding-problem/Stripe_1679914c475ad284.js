/*
Write a function to flatten a nested dictionary. Namespace the keys with a
period.
For example, given the following dictionary:
{
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}
it should become:
{
    "key": 3,
    "foo.a": 5,
    "foo.bar.baz": 8
}
You can assume keys do not contain dots in them, i.e. no clobbering will occur.
*/


const INPUT = {
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}


function dotObj(obj,stack = [], result = {}) {
  if (obj.constructor == Object){
    for (let [k,v] of Object.entries(obj)){
      dotObj(v,[...stack, k],result);
    }
  } else {
    result[stack.join('.')] = obj;
  }

  return result;
}

console.log(dotObj(INPUT));
