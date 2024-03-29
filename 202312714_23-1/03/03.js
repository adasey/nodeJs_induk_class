const ANSWER = '모듈 2가지 방식 중 첫번째 방식은 CommonJS 모듈입니다. 이 모듈은 표준 이전에도 사용되던 방식이었으며 모듈을 만들 때 모듈이 될 파일과 모듈을 불러와서 사용할 파일이 필요합니다.'
+ '예) var.js 파일입니다.\nconst odd = \'홀수\';\nmodule.exports = {\n  odd,\n}; \n그리고 이를 참조하는 func.js 파일입니다. \n'
+ 'const { odd } = require(\'./var\')\n function checkOddOrEven(num) { \n  if (num % 2) { \n    return odd;\n  }\n}\nmodule.exports = checkOddOrEven;\n'
+ 'require 함수에 불러올 모듈 경로를 적습니다. func.js에서는 var.js 파일의 변수를 사용합니다. 이 func.js를 index.js 내부에서 사용하기 위해 모듈을 불러옵니다.\n'
+ 'const { odd } = require(\'./var\');\n'
+ 'const checkNumber = require(\'./func\');\n'
+ 'function checkStringOddOrEven(str) {'
+ ' if (str.length % 2) { \n'
+ '   return odd;\n'
+ ' }\n'
+'}\n'
+ 'console.log(checkNumber(9));\n'
+ 'console.log(checkStringOddOrEven(\'hello\'));\n\n'
+ '이런 방식으로 모듈을 불러올 수 있습니다. \n두번째 방식은 ECMAScript 모듈로 공식적인 자바스크립트 모듈 형식입니다. \n 예) \n'
+ '먼저 var.mjs입니다. \n export const odd = "홀수";\n'
+ '그리고 func.mjs입니다. \n'
+ 'import {odd} from \'./var.mjs\';\n'
+ 'function checkOddOrEven(num) {\n'
+ '  if (num % 2) {\n'
+ '     return odd;\n'
+ '  }\n'
+ '}\n'
+ 'export default checkOddOrEven;\n\n'
+ '마지막으로 index.mjs입니다.\n'
+ 'import {odd} from \'./var.mjs\';\n'
+ 'import checkNumber from \'./func.mjs\';\n'
+ 'function checkStringOddOrEven(str) {\n'
+ '  if (str.length % 2) {\n'
+ '    return odd;\n'
+ '  }\n'
+ '  return even;\n'
+ '}\n'
+ 'console.log(checkNumber(9));\n'
+ 'console.log(checkStringOddOrEven(\'hello\'));\n\n'
+ 'require, exports, module.exports가 import, export, export default로 바뀌었고 mjs를 활용해 모듈을 나타내도록 바뀌었습니다.';

console.log(ANSWER);