import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs';
import { parse } from 'node:url';

const port = 3000;
const host = 'localhost';

const server = createServer((req, res) => {
  const { method, url } = req;
  const parseUrl = parse(url, true);
  console.log('parseUrl: ', parseUrl);

  //получение запроса
  //console.log({ req });
  // более надежный способ получения url
  if (method === 'GET' && parseUrl.pathname === '/text') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('Привет node text');
  }

  if (method === 'GET' && parseUrl.pathname === '/html') {
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

  if (method === 'GET' && parseUrl.pathname === '/') {
    // отправка ответа
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('Hello world');
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Страница не найдена');
});

// запуск сревера прослушивание
server.listen(port, host, () => {
  console.log(`Сервер запущен на http://${host}:${port}`);
});
