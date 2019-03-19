
/*




Given a string, find the longest palindromic contiguous substring. If there are

more than one with the maximum length, return any one.



For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The

longest palindromic substring of "bananas" is "anana".



*/


function longest(...args){
  return args.reduce((p,n)=>p.length > n.length ? p : n, '')
}

function longPal(str,stack = ''){
  if (str === '') return stack + str + stack.split('').reverse().join('');;
  if ((str.length === 1) || (str.length === 2 && str[0] === str[1])) {
    return stack + str + stack.split('').reverse().join('');
  }
  
  if (str[0] === str[str.length-1]) return longPal(str.slice(1,str.length-1),stack + str[0]);

  return longest(longPal(str.slice(1),''), longPal(str.slice(0,-1),''))
  //  longPal(str,'');

  //if (str[0])
  //
  // longPal(str.slice(1,str.length-1),"")
  // longPal(str.slice(1,str.length),"")
  //longPal(str.slice(0,str.length-1))





}



console.log('>>>>',longPal("bananas"));
