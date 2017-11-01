/*jshint esversion: 6*/

const openBrack = ['(','{','[','<'];
const closeBrack = [')','}',']','>'];

const matchingBracketString = '({[<>]})';
const misMatchingString = '{()[{>)})';
const newStr = '([[][][[[]]]]{{}})()';

bracketStringToCheck = (matchingBracketString) => {
  const bracketArray = matchingBracketString.split('');
  console.info(bracketArray);
  // setUpBracketArray(bracketArray, checkBracket);
  checkBracketV2(bracketArray);
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
  console.info(bracketIndexArr);
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

//check bracket version 2
checkBracketV2 = (bracketIndexArr) => {
  for(let k = 0; k < bracketIndexArr.length; k++) {
    if(openBrack.indexOf(bracketIndexArr[k]) > -1) {
      let openIndex = openBrack.indexOf(bracketIndexArr[k]);
      // console.info(openIndex);
      if(openIndex == closeBrack.indexOf(bracketIndexArr[k+1])) {
        console.info(`I. index: ${k} / ${bracketIndexArr.length-1} is closed @ ${k+1}`);
      } else {
        if(openIndex == closeBrack.indexOf(bracketIndexArr[bracketIndexArr.length -1])) {
          console.info(`II. index: ${k} / ${bracketIndexArr.length-1} is closed  @ ${bracketIndexArr.length -1}`);
        } else {
          let l = bracketIndexArr.length;
          checkDeeper = () => {
            if(openIndex !== closeBrack.indexOf(bracketIndexArr[l])) {
              l--;
              checkDeeper();
            } else if (openIndex == closeBrack.indexOf(bracketIndexArr[l])) {
              console.info(`III. index: ${k} / ${bracketIndexArr.length-1} is closed @ ${l}`);
            } else {
              console.info(`no match`);
            }
          };
          checkDeeper();
        }
        // console.info('still looking for close bracket');
      }
    }
  }
};

// console.info(`matching stringssssss`);
// bracketStringToCheck(matchingBracketString); // this will check a correctly matching bracket string

// console.info('misssssmattching stringssss');
// bracketStringToCheck(misMatchingString); // this is the mismatch string

bracketStringToCheck(newStr); // this is the mismatch string
