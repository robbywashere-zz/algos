



function stringify(obj){
  if (typeof obj === "string") return `"${obj.replace(/"/g,'\\"')}"`;
  if (typeof obj === "number") return `${obj}`;
  if (obj === null) return `null`;
  if (Array.isArray(obj)) return `[${obj.map(v=>stringify(v)).join(',')}]`;
  const stack = [];
  for (let [key, val] of Object.entries(obj)){
    stack.push(`"${key}":${stringify(val)}`)
  }
  return `{${stack.join(',')}}`;
}

const myObj =  {
  a: {
    b: 12,
    c: {
      e: 13
    },
    f: ["a","b","c","d"],
    g: null
  },
  c: "crazy \" \" strings can do some Cr😃zy things"
}

console.log(JSON.parse(stringify(myObj)))


function tokenize(str){

  const stack = [];

  for (let i = 0; i < str.length; i++){
    if (str[i] === '"'){
      i++;
      let value = '';
      while(str[i] !== '"') {
        if (str[i] === `\\`) {
          value += '\\' + str[++i];
        } else {
          value += str[i];
        }
        i++;
      }
      stack.push({ type: "string", value })
    }

    if (str[i] === "{") stack.push({ type: 'curly_open', value: '{' })
    if (str[i] === "}") stack.push({ type: 'curly_close', value: '}' })
    if (str[i] === "[") stack.push({ type: 'bracket_open', value: '[' })
    if (str[i] === "]") stack.push({ type: 'bracket_close', value: ']' })
    if (str[i] === ":") stack.push({ type: 'colon', value: ':' })
    if (str[i] === ",") stack.push({ type: 'comma', value: ',' })
    if (/[0-9]/.test(str[i])){
      value = '';
      while(/[0-9]/.test(str[i])) value += str[i++];
      value = parseFloat(value);
      stack.push({ type: 'number', value });
      i--
    }
    if (str[i] === "n" && str.substr(i,4) === "null") stack.push({ type: 'null', value: null });
  }
  return stack;
}



//let myTokens = tokenize(JSON.stringify({ a: 1, "f\f": null, b: "RAWR\"", c: { d: [1,2,{a: 2, c: [1,2,3]}] }  }));
//console.log('>>',JSON.stringify(parse(myTokens),null,4))

function parse(tokens, obj = {}) {
  if (!tokens.length) return obj;
  const current = tokens.shift();
  if (current.type == "string" && tokens[0] && tokens[0].type === "colon"){
    obj[current.value] = parse(tokens);
    return parse(tokens, obj);
  }
  switch (current.type) {
    case 'curly_open':
      if (Array.isArray(obj)) obj.push(parse(tokens, {}))
      else return parse(tokens, {});
    case 'curly_close':
      return obj;
    case 'bracket_open':
      return parse(tokens, [])
    case 'bracket_close':
      return obj;
    case 'string':
    case 'number':
    case 'null':
      if (Array.isArray(obj)) obj.push(current.value)
      else return current.value
  }
  return parse(tokens, obj);
}



function walkObject(visitor){
  return function walk(obj, key, parent) {
    if (typeof obj !== "object") return visitor({ parent, key, value: parent[key] });
    for (let [ key, value ] of Object.entries(obj)) walk(value, key, obj)
    return obj;
  }
}




const myO = { a: { b:  [0,2,3,{c: 9999 },5] } };

const objectWalker = walkObject(({ parent, key, value })=>{
  if (typeof value === "number") parent[key] = value+1
})


console.log(objectWalker(myO));

//console.log(JSON.stringify(myO,null,4))



function perm(rest, str = "", stack = []){
  if (rest.length === 0) stack.push(str);
  for (let i = 0; i<rest.length;i++){
    x = rest[i];
    y = rest.substr(0,i) + rest.substr(i+1);
    perm(y, str + x, stack)
  }
  return stack;
}


console.log(perm("abc"));
