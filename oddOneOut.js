/*jshint esversion: 6*/

console.info(`running brainGames "Odd One Out" v0`);

/*
Setting up the array
*/
let unknownArray = [];

const getRandomInt = (min, max) => {
  let randomNumb = Math.random() * (max - min) + min;
  return Math.round(randomNumb);
};

const pushRandomsToArray = () => {
  let a = getRandomInt(1,100);
  if(unknownArray.length == 1 && a == unknownArray[0]){
    a = getRandomInt(1,10);
    if(a >= unknownArray[0]) {
      a = a++;
    }
  }
  if(unknownArray.length > 1) {
    a = unknownArray[0];
  }
  unknownArray.push(a);
};

for(let i = 0; i < 7; i++) {
  pushRandomsToArray();
}

// console.info(unknownArray);

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


/*
  Actual function to 'solve the problem' of the odd one out.
    I created a couple functions to see which one was faster, I added timers to see which function was faster. console logged times to see which was faster.

    Loop [linear] vs no_loop [non-linear]

    [1] the first 'findTheCulprit_Loop' one was easiest to write and create

    [2] the second function 'culprit_noLoop' was a pain in the ass to create, trying to make it more optimal, was racking my brain to figure out what was wrong, and am still not even sure it is the most optimal way. It is faster than the first function, but not by much. I'll see if I can optimize it even more.
*/

//function just to log and check answers
const logTheCulprit = (array, arrayPos) => {
  console.info(`odd number out is ${arrayPos} and is in position ${array.indexOf(arrayPos)+1} of the array`);
};

//  [1] first function with loop, less lines, longer run. loops
const findTheCulprit_Loop = (array) => {
  for(let j = 0; j < array.length; j++) {
    if(j < 5 && array[j] !== array[j+1] && array[j] !== array[j+2]) {
      logTheCulprit(array, array[j]);
    } else if (j >= 5 && array[j] !== array[j-1] && array[j] !== array[j-2]){
      logTheCulprit(array, array[j]);
    }
  }
};

// console.time(findTheCulprit_Loop);
// findTheCulprit_Loop(shuffledArray);
// console.timeEnd(findTheCulprit_Loop);


// [2] second function, longer code, more lines, but faster, no loop
const culprit_noLoop = (array) => {
  const a = array[0];
  const b = array[1];
  const c = array[2];
  const d = array[3];
  const e = array[4];
  const f = array[5];
  const g = array[6];
  if(a + b + c == d + e + f) {
    logTheCulprit(array, g);
  } else {
    if(a + b + g == d + e + f) {
      logTheCulprit(array, c);
    } else {
      if(a == b && b == g) {
        if(d == e) {
          logTheCulprit(array, f);
        } else {
          if(a == e) {
            logTheCulprit(array, d);
          } else {
            logTheCulprit(array, e);
          }
        }
      } else {
        if(a == f) {
          logTheCulprit(array, b);
        } else {
          logTheCulprit(array, a);
        }
      }
    }
  }
};

//running functions and logging times

// running [1]
console.time(findTheCulprit_Loop);
findTheCulprit_Loop(shuffledArray);
console.timeEnd(findTheCulprit_Loop);

// running [2]
console.time(culprit_noLoop);
culprit_noLoop(shuffledArray);
console.timeEnd(culprit_noLoop);
