const sayNode = function() {
  console.log('Node');
};

var es = "ES";
const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};
newObject[es + 2015] = "ES2015"
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
console.log(newObject.ES2015); // ES2015

newObject.ES6 = "not Fantastic"
console.log(newObject.ES6);
