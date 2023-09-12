import http from 'node:http';

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  //получение запроса
  //console.log({ req });
  if (req.url === '/text') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('Привет node text');
  }

  if (req.url === '/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(`
      <html>
        <head>
          <title>Привет HTML</title>
        </head>
        <body>
          <h1>Привет HTML</h1>
        </body>
      </html>
    `);
  }

  if (req.url === '/') {
    // отправка ответа
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('Hello world');
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>Страница не найдена</h1>');
});

// запуск сревера прослушивание
server.listen(port, host, () => {
  console.log(`Сервер запущен на http://${host}:${port}`);
});
