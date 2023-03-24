console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';
exports = 'this';

require('./var');

console.log(this);
console.log(module.exports);
console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);
