import http from 'node:http';

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  //получение запроса
  //console.log({ req });
  if (req.url === '/text') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Привет мир text');
  } else {
    // отправка ответа
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Привет мир');
  }
});

// запуск сревера прослушивание
server.listen(port, host, () => {
  console.log(`Сервер запущен на http://${host}:${port}`);
});
