const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.send('로그인');
});

app.get('/user', (req, res) => {
  res.send('사용자');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
