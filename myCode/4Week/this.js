console.log(this);
console.log(this === module.exports);
console.log(this === exports);

(() => {
    console.log('func', this === exports, this === global);
})();