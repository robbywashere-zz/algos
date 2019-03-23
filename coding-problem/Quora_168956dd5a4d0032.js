/*




Given an absolute pathname that may have . or .. as part of it, return the

shortest standardized path.



For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".



*/


function resolvePath(path){

  let paths = path.split('/');
  let result = []

  for (let p of paths){
    if (p === '.') continue;
    else if (p == '..') result.pop();
    else result.push(p);
  }

  return result.join('/');


}


console.log(resolvePath('/usr/bin/../bin/./scripts/../'))
