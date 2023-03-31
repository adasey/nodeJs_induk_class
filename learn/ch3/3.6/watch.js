const fs = require('fs');

fs.watch('./learn/ch3/3.6/target.txt', (eventType, filename) => {
  console.log(eventType, filename);
});

