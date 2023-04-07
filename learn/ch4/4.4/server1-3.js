const https = require('https');
const fs = require('fs');

https.createServer({
  cert: fs.readFileSync('./learn/cert/server.crt'),
  key: fs.readFileSync('./learn/cert/server.key'),
  ca: [
    fs.readFileSync('./learn/cert/rootCA.crt'),
    fs.readFileSync('./learn/cert/rootCA.key'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });
