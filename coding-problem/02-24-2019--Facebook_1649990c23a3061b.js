/*


Implement regular expression matching with the following special characters:



 * . (period) which matches any single character

 * * (asterisk) which matches zero or more of the preceding element



That is, implement a function that takes in a string and a valid regular

expression and returns whether or not the string matches the regular expression.



For example, given the regular expression "ra." and the string "ray", your

function should return true. The same regular expression on the string "raymond"

should return false.



Given the regular expression ".*at" and the string "chat", your function should

return true. The same regular expression on the string "chats" should return

false.
*/

const assert = require('assert');

function rx(str, ptn){

  if (str === "" && ptn ==="") return true;

  if (ptn[1] === "*"){
    if (str.length && (ptn[0] === str[0] || ptn[0] === ".")) {
      return rx(str.slice(1),ptn.slice(2)) || rx(str.slice(1),ptn) || rx(str,ptn.slice(2)) ;
    }
    return rx(str,ptn.slice(2));
  }
  if (str[0] === ptn[0] || ptn[0] === ".") return rx(str.slice(1),ptn.slice(1));
  return false;
}

let count = 0;
function tap(args,expect){
  let result = rx(...args) === expect;
  if (!result) count++;
  console.log(args,result ? 'Pass' : 'Fail' );
}

tap(['a','a'],true);
tap(['ab','a'],false);
tap(['a','a*'],true);
tap(['abc','.*b'],false);
tap(['a','a*b'],false);
tap(['ab','a*b'],true);
tap(['ab','a.*b'],true);
tap(['ab','.*b'],true);
tap(['a','.'],true);
tap(['abc','a.*.*.*.c'],true);
tap(['abc','a.*.*b.*c'],true);
tap(['abc','a.*c'],true);
tap(['chat','ch.t'],true)
tap(['chaaaaaaxt','chaaaa*t'],false)
tap(['chXXXXats','chX*at'],false)
tap(['chXXXXat','chX*at'],true)
tap(['chat','ch.*at'],true)
tap(['chatsssss','.*at.*x'],false)
tap(['chats','.*at'],false)
tap(['chat','ch.*at'],true)
tap(['chat','c.*at'],true)
tap(['chXXXXat','chX*at'],true)
tap(['chatsssss','.*at.*'],true)
tap(['ccchatathatat','.*at'],true)
tap(['chat','.*at'],true)
tap(['chatat','.*at'],true)
tap(['abc','.*'],true);
tap(['chat','chat.*'],true)
tap(['chat','.*at.*'],true)
tap(['chat','.*at.*k*l*w*x*'],true)
tap(['chat','c.*at.*k*l*w*x*'],true)
console.log(`Failures: ${count}`);


/*
function tokenize(rx){
  const tokens = [];
  for (let i = 0; i < rx.length; i++){
    const val = (rx[i] === '.') ? 'ANY' : rx[i]; 

    let type = 'CHAR';
    if (rx[i+1] === '*') {
      type = (val == 'ANY') ? 'ANYWILD' : 'WILD';
      i++;
    } 
    tokens.push({ val, type })
  }
  return tokens;
}


function RX3(str, rx){

 if (str === "" && rx === "") return true;
 if (str === "") return false;
 if (rx === "") return false;

  const [[char],[xchar,nxchar]] = [str, rx];

  if (char === xchar) {
    return RX3(str.slice(1),rx.slice(1));
  }

  if (xchar + nxchar === '.*') {}

  if (xchar === '.') {}

  return false

}


//return RX3(str,rx.slice(1)) || RX3(str.slice(1),rx) || RX3(str.slice(1),rx.slice(1)) ;

function RX(str,rx) {

  if (str === "" && rx === "") return true;

  if (rx === "") return true;

  if (str === "") return false;

  if (rx[0] === '*') {
    return RX(str.slice(1), rx) || RX(str.slice(1),rx.slice(1))
  }

  if (str[0] === rx[0] || rx[0] === '.') {
    return RX(str.slice(1),rx.slice(1))
  }

  return false;

}


*/
