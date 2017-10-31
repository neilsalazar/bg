/*jshint esversion: 6*/

const openBrack = ['(','{','[','<'];
const closeBrack = [')','}',']','>'];

const matchingBracketString = '({[<>]})';
const misMatchingString = '{()[{>)})';

bracketStringToCheck = (matchingBracketString) => {
  const bracketArray = matchingBracketString.split('');
  console.info(bracketArray);
  setUpBracketArray(bracketArray, checkBracket);
};

//set up bracket array to check
setUpBracketArray = (bracketArray, callback) => {
  let bracketIndexArr = [];
  for(let i = 0; i < bracketArray.length; i++) {
    let openBracketIndex = openBrack.indexOf(bracketArray[i]);
    let closeBracketIndex = closeBrack.indexOf(bracketArray[i]);
    if(openBracketIndex > -1) {
      // console.info(openBracketIndex);
      bracketIndexArr.push(openBracketIndex);
    }
    if (closeBracketIndex > -1) {
      // console.info(closeBracketIndex);
      bracketIndexArr.push(closeBracketIndex);
    }
  }
  // console.info(bracketIndexArr);
  callback(bracketIndexArr);
};

//check bracket array for errors
checkBracket = (bracketIndexArr) => {
  for(let j = 0; j < bracketIndexArr.length; j++) {
    if(bracketIndexArr[j] == bracketIndexArr[bracketIndexArr.length - 1 -j]) {
      console.info(`index: ${j} match`);
    } else {
      console.info(`index: ${j} error / no match`);
    }
  }
};

console.info(`matching stringssssss`);
bracketStringToCheck(matchingBracketString); // this will check a correctly matching bracket string

console.info('misssssmattching stringssss');
bracketStringToCheck(misMatchingString); // this is the mismatch string
