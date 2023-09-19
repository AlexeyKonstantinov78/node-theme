import { readFileSync } from 'node:fs';
import https from 'node:https';

const option = {
  key: readFileSync('server-key.pem'),
  cert: readFileSync('server-cert.pem'),
};

const server = https.createServer(option, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('hello! this http server');
});

server.listen(443, () => {
  console.log('Сервер запущен порт 443');
});
