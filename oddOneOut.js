/*jshint esversion: 6*/

console.info(`running brainGames "Odd One Out" v0`);

let unknownArray = [];

const getRandomInt = (min, max) => {
  let randomNumb = Math.random() * (max - min) + min;
  return Math.round(randomNumb);
};

const pushRandomsToArray = () => {
  let a = getRandomInt(1,10);
  if(unknownArray.length == 1 && a == unknownArray[0]){
    a = getRandomInt(1,10);
  }
  if(unknownArray.length > 1) {
    a = unknownArray[0];
  }
  unknownArray.push(a);
};

for(let i = 0; i < 5; i++) {
  pushRandomsToArray();
}

console.info(unknownArray);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
shuffledArray = shuffle(unknownArray);
console.info(shuffledArray);


const findTheCulprit_Linear = (array) => {
  for(let j = 0; j < array.length; j++) {
    if(array[j] == array[0] && j === 0) {
      console.info(1);
    }
    if(j > 0 && array[j] !== array[0]) {
      console.info(array.indexOf(array[j]) +1);
    }
    // if(array[0] == array[j] && array[j] < 1) {
    //   console.info(1);
    // }
  }
};

findTheCulprit_Linear(shuffledArray);
