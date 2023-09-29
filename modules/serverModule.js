import { NOTFOUND } from 'node:dns';
import http from 'node:http';
import url from 'node:url';

const NOT_FOUND_MESSAGE = 'Нет такой ссылки';

export const startServer = (tickers, validTickers) => {
  const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname.startsWith('/crypto') && req.method === 'GET') {
      return;
    }

    if (pathname.startsWith('/crypto') && req.method === 'POST') {
      return;
    }

    if (pathname.startsWith('/crypto') && req.method === 'DELETE') {
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: NOT_FOUND_MESSAGE }));
  });

  return server;
};
