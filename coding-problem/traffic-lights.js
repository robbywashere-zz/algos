
const assert = require('assert');

function trafficLights(...lights){

  let red = 0;

  for (let light of lights) {

    const { name, green, yellow } = light;

    light.sequence = [
      ...Array(red).fill('R'),
      ...Array(green).fill('G'),
      ...Array(yellow).fill('Y'),
    ];

    red += green+yellow + 1;
  } 

  let longest = lights[lights.length-1].sequence.length

  for (let light of lights) {

    light.sequence = [...light.sequence, ...Array(longest - light.sequence.length).fill('R')]

  }

  return lights;

}

function * numTicks(lights, n){


  let totalLength = lights[0].sequence.length //first is fine;


  for (let i = 0; i < n; i++) {

    let index = i % totalLength;

    yield lights.reduce((p,{ name, sequence }) => ({ ...p, [name]: sequence[index] }),{});

  }

}

const tl = trafficLights({ name:'EW', green: 20, yellow: 2 },
  { name:'NS', green: 16, yellow: 8 },
  { name:'XX', green: 3, yellow: 2 },
  { name:'XY', green: 3, yellow: 2 }
);



console.log([...numTicks(tl, 300) ]);

assert(([...numTicks(tl, 30) ]).some(lts=>Object.values(lts).filter(c=>c==='G').length === 1))

console.log(([...numTicks(tl, 30) ]).map(lts=>Object.values(lts)))

