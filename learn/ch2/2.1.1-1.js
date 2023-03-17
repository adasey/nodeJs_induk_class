if (true) {
  var x = 3;
}
console.log(x); // 3

if (true) {
  const y = 3;
  // console.log(y); if use normally
  let z = 3;
  // console.log(z); if use normally
}
// const y = 2 this is another const at 7 line
console.log(y); // Uncaught ReferenceError: y is not defined
console.log(z); // Uncaught ReferenceError: y is not defined
