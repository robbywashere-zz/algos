/*




Write an algorithm to justify text. Given a sequence of words and an integer

line length k, return a list of strings which represents each line, fully

justified.



More specifically, you should have as many words as possible in each line. There

should be at least one space between each word. Pad extra spaces when necessary

so that each line has exactly length k. Spaces should be distributed as equally

as possible, with the extra spaces, if any, distributed starting from the left.



If you can only fit one word on a line, then you should pad the right-hand side

with spaces.



Each word is guaranteed not to be longer than k.



For example, given the list of words ["the", "quick", "brown", "fox", "jumps",

"over", "the", "lazy", "dog"] and k = 16, you should return the following:



["the  quick brown", # 1 extra space on the left

"fox  jumps  over", # 2 extra spaces distributed evenly

"the   lazy   dog"] # 4 extra spaces distributed evenly





*/

const lol2 = `More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.`.split(' ')


const lol = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

function pad(a,k) {
  let chunks = [];
  let chunk = [];
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    let word = a[i];
    chunk.push(word);
    count += word.length+1;
    if (count > k) {
      chunk.pop();
      chunks.push(chunk);
      chunk = [];
      count = 0;
      i--;
    }
  }
  chunks.push(chunk);

  for (let line of chunks) {
    let padding = k - line.reduce((p,n)=>p+n.length,0);
    let i = 0;
    while(padding--) line[i++%(line.length-1)] += " ";
    console.log(line.join(''))
  }

}


pad(lol2,16);
