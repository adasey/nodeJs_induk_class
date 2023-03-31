const fs = require('fs');

const readStream = fs.createReadStream('./learn/ch3/3.6/readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);
