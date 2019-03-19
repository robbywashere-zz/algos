
function reverseString(str){


  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    newstr += str[str.length-i-1];
  }
  console.log(newstr);

  let result = "";
  //eulb si yks eht
  for (let i = 0; i <= newstr.length; i++){
    if (newstr[i] === " " || i === newstr.length) {
      let tmp = i-1;
      while (tmp >= 0 && newstr[tmp] !== " "){
        result += newstr[tmp--]
      }
      if(newstr[i]) result += newstr[i];
    }
  }
  console.log(result);

}

//(Math.floor(len/2)-1)

reverseString("the sky is blue");
//the sky is blue
//lue         the
//the sky is blue
//blue is sky the

//three one
//one   three
