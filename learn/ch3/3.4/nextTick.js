setImmediate(() => {
  console.log('immediate'); // 4순위
});
process.nextTick(() => { // 1순위
  console.log('nextTick');
});
setTimeout(() => {
  console.log('timeout'); // 3순위
}, 0);
Promise.resolve().then(() => console.log('promise')); // 2순위
