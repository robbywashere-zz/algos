const { $$asyncIterator } = require('iterall');
const { EventEmitter } = require('events');

function eeAsync(eventEmitter, eventsNames) {
  const pullQueue = [];
  const pushQueue = [];
  const eventsArray = typeof eventsNames === 'string' ? [eventsNames] : eventsNames;
  let listening = true;
  let addedListeners = false;

  const pushValue = event => {
    if (pullQueue.length !== 0) {
      pullQueue.shift()({ value: event, done: false });
    } else {
      pushQueue.push(event);
    }
  };

  const pullValue = () => {
    return new Promise(resolve => {
      if (pushQueue.length !== 0) {
        resolve({ value: pushQueue.shift(), done: false });
      } else {
        pullQueue.push(resolve);
      }
    });
  };

  const emptyQueue = () => {
    if (listening) {
      listening = false;
      if (addedListeners) { removeEventListeners(); }
      pullQueue.forEach(resolve => resolve({ value: undefined, done: true }));
      pullQueue.length = 0;
      pushQueue.length = 0;
    }
  };

  const addEventListeners = () => {
    for (const eventName of eventsArray) {
      eventEmitter.addListener(eventName, pushValue);
    }
  };

  const removeEventListeners = () => {
    for (const eventName of eventsArray) {
      eventEmitter.removeListener(eventName, pushValue);
    }
  };

  return {
    next() {
      if (!listening) { return this.return(); }
      if (!addedListeners) {
        addEventListeners();
        addedListeners = true;
      }
      return pullValue();
    },
    return() {
      emptyQueue();
      return Promise.resolve({ value: undefined, done: true });
    },
    throw(error) {
      emptyQueue();
      return Promise.reject(error);
    },
    [$$asyncIterator]() {
      return this;
    },
  };
}

function* streamify(emitter,eventName) {
  while (true) {
    yield new Promise(rs => emitter.once(eventName,rs));
  }
}

(async function(){

  let myEE = new EventEmitter();

  setInterval(()=>myEE.emit('oneSecond','1'),1000);
  setInterval(()=>myEE.emit('oneSecond','2'),1000);
  setInterval(()=>myEE.emit('oneSecond','3'),1000);
  setInterval(()=>myEE.emit('oneSecond','4'),1000);
  setInterval(()=>myEE.emit('oneSecond','5'),1000);

  for await (let x of streamify(myEE, 'oneSecond')){
    console.log(x)
  }

})();
