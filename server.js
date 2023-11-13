const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send('Привет, это мой сервер');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту http://localhost:${port}`);
});