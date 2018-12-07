const { EventEmitter } = require('events');
async function* streamify(emitter,eventName) {
  const q = [];
  emitter.on(eventName,v=>q.push(v));
  while (true){
    await new Promise(rs=>emitter.once(eventName,rs));
    while (q.length > 0) {
      yield Promise.resolve(q.shift());
    }
  }
}



const mye = new EventEmitter();
(async ()=>{
  let values = [];
  setInterval(()=>console.log('1'),1000);
  setInterval(()=>mye.emit('e',{ one: new Date() }),1000);
  setInterval(()=>mye.emit('e',{ two: new Date() }),1000);
  setInterval(()=>mye.emit('e',{ three: new Date() }),1000);
  setInterval(()=>mye.emit('e',{ four: new Date() }),1000);
  setInterval(()=>mye.emit('e',{ five: new Date() }),1000);
  let max = 0;
  for await (const value of streamify(mye,'e')) {
    console.log(value);
    max++;
  }

})();
