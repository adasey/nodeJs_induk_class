const ANSWER = '3000번 포트로의 Hello World 문구를 지닌 plain text 형식의 서버를 엽니다. localhost:3000으로 접속하며 Hello World라는 문장 밖에 없는 응답입니다.\n'
+ '기존에는 text/plain 응답에서 text/html로 적용되어 응답하는 모습입니다.';

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('04.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain;' });
    res.end(err.message);
  }
}).listen(3000);

console.log(ANSWER);