/*
 Pretty print a json object using proper indentation.

Every inner brace should increase one indentation to the following lines.
Every close brace should decrease one indentation to the same line and the following lines.
The indents can be increased with an additional ‘\t’
Example 1:


Input : ["foo", {"bar":["baz",null,1.0,2]}]
Output : 
[
    "foo", 
    {
        "bar":
        [
            "baz", 
            null, 
            1.0, 
            2
        ]
    }
]
Input : {A:"B",C:{D:"E",F:{G:"H",I:"J"}}}
Output : 
{ 
    A:"B",
    C: 
    { 
        D:"E",
        F: 
        { 
            G:"H",
            I:"J"
        },
        X:
        {
            Y: "Z"
        }
    } 
}

*/


const MULTI = 2;
function prettyJson(str){

  let stack = [];
  let indent = 0;
  let current = ""
  for (let i = 0; i < str.length;i++){

    let char = str[i];

    switch (char){
    
    
      case "[":
      case "{":
        if (current.trim()) stack.push(current);
        stack.push(" ".repeat(indent*MULTI) + char);
        indent++;
        current = " ".repeat(indent*MULTI);
        break;

      case "]":
      case "}":
        if (str[i+1] === ","){
          i++;
          char += ",";
        }
        if (current.trim()) stack.push(current);
        stack.push(" ".repeat(--indent*MULTI) + char);
        current = " ".repeat(indent*MULTI);
        break;
      case ",":
        if (current.trim()) stack.push(current + char);
        current = " ".repeat(indent*MULTI);
        break;
      default:
        current += char;
    }
  }

  for (let line of stack){
    console.log(line);
  }
}

const inputA = {
  "A":"B",
  "C":
  {
    "D":"E",
    "F":
    {
      "G":"H",
      "I":"J"
    },
    "X":
    {
      "Y":"Z"
    }
  }
};
const inputB = ["foo", {"bar":["baz",null,1.0,2]}]
const input = {A:"B",C:{D:"E",F:{G:"H",I:"J"}}};
prettyJson(JSON.stringify(inputA));
prettyJson(JSON.stringify(inputB));

//




