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

//WRONG!

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

console.log(RX('raising arizona', 'ra*na'))

