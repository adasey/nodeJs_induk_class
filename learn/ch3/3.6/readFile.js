const fs = require('fs');

fs.readFile('./readme.md', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
