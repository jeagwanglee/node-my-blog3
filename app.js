const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('정상 연결');
});

app.listen(port, () => {
  console.log(port, '포트로 서버 열림!');
});
