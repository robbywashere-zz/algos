
function parse_json(jsonStr) {
  let tokens = [];
  for (let i = 0; i < jsonStr.length; i++) {

    if (jsonStr[i] === '"') {
      value = '';
      i++ ;
      while (jsonStr[i] !== '"') {
        value += jsonStr[i];
        i++;
        if (jsonStr[i] === "\\" && jsonStr[i + 1] === "\"") {
          value += "\"";
          i += 2
        }
      }
      tokens.push({
        type: 'string',
        value
      })
    }
    if (/[0-9]+/.test(jsonStr[i])) {
      let value = '';
      while (/[0-9]/.test(jsonStr[i])) {
        value += jsonStr[i];
        i++;
      }
      tokens.push({
        type: "number",
        value: parseFloat(value)
      });
    }
    if (jsonStr.slice(i, i + 4) === "null") {
      tokens.push({
        type: 'null',
        value: null
      })
    }

    if (/^true|false$/.test(jsonStr.slice(i,i+5))) {
      tokens.push({
        type: 'boolean',
        value: (jsonStr.slice(i,i+4) === "true")
      })
    }
    if (jsonStr[i] === "{") {
      tokens.push({
        type: 'curly_open',
        value: "{"
      })
    }
    if (jsonStr[i] === "}") {
      tokens.push({
        type: 'curly_close',
        value: "}"
      })
    }

    if (jsonStr[i] === ",") {
      tokens.push({
        type: 'comma',
        value: ","
      })
    }
    if (jsonStr[i] === "[") {
      tokens.push({
        type: 'bracket_open',
        value: "["
      })
    }
    if (jsonStr[i] === "]") {
      tokens.push({
        type: 'bracket_close',
        value: "]"
      })
    }
    if (jsonStr[i] === ":") {
      tokens.push({
        type: 'colon',
        value: ":"
      })
    }


  }
  return tokens;
}


function parser(tokens, obj = {}) {

  if (!tokens.length) return obj;
  const current = tokens.shift();

  switch (current.type) {
    case "curly_open":
      if (Array.isArray(obj)) obj.push(parser(tokens))
      break;
    case "bracket_close":
    case "curly_close":
      return obj

    case "boolean":
      return current.value;
    case "string": 
      if (tokens[0].type === "colon"){
        const key = current.value; 
        tokens.shift(); 
        obj[key] = parser(tokens);
        return parser(tokens, obj)
      }
    case "number":
    case "null":
      if (Array.isArray(obj)) obj.push(current.value);
      else return current.value;
      break;
    case "bracket_open":
      return parser(tokens, []);

  } 
  return parser(tokens, obj)

}

let OBJ = {
  a: {
    bb: "str",
    b: {
      sea: [{
        x: { 7: 90 }
      }, 2, 3, 4, 5],
      d: {2:null,4:[1,2,3,{a:true}]},
      e: null,
      f: "some crazy \" \" gnarly string"
    }
  },
  g: 1,
  x: false,
  y: true
}

let myTokens = parse_json(JSON.stringify(OBJ));
let parsedObj = parser(myTokens)
console.log(JSON.stringify(parsedObj, null, 4));
const assert = require('assert');
assert.deepEqual(parsedObj,OBJ)
