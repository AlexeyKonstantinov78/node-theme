import { readFileSync } from 'node:fs';
import https from 'node:https';

const data = 'привет мир!';

const option = {
  key: readFileSync('server-key.pem'),
  cert: readFileSync('server-cert.pem'),
};

const server = https.createServer(option, (req, res) => {
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(data)); //перездает в загаловке объем передаваемого данных
  res.setHeader('Cache-Control', 'no-cache'); // отправка данных не кеширрованные
  // no-store полностью заприщает использование кеша
  // public -- разрешает кеширавание на серверах и в браузерах
  // private - разрешаем кешировнаие в браузерах но запрещаем на проксисерверах
  // max-age=60 - кеширует данные на 60 секунд по истечению запрашивает новые без кеширования
  // s-maxage=60 - кешурем в браузерах но в прокисерверах будит онраничение по времении
  res.setHeader('User-Agent', 'MetodApp');
  //перенаправление н адругой адресс
  // res.statusCode = 302;
  // res.setHeader('Location', 'https://google.ru');
  res.end('hello! this http server');
});

server.listen(443, () => {
  console.log('Сервер запущен порт 443');
});
