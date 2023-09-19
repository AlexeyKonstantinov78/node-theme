import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('hello! this http server');
});

server.listen(3000, () => {
  console.log('Сервер запущен порт 3000');
});
