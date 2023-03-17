var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject[es] = oldObject.sayJS();
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
oldObject.ES // JS
console.log(oldObject.ES6); // Fantastic
