// const { odd : o, even : e} = require('./var');
const { odd : o, even : e, checkOddOrEven : checkNumber} = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return o;
  }
  return e;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
