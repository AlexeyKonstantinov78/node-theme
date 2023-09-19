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

  res.setHeader('Access-Control-Allow-Origin', 'my-sity.com'); // разрешение сделать запросы с определенного сайта
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE'); // разрешение на методы
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // разрешение на получение заголовков

  // работа с куками
  res.setHeader(
    'Set-Cookie',
    ['sesionId=123456; Max-Age=3600; Secure; SameSite=None', 'userId=12345'],
  );

  // * - запрашивает все кого угодно что угодно

  const cookes = req.headers.cookie; // чтение куки
  console.log(cookes);

  res.end('hello! this http server');
});

server.listen(443, () => {
  console.log('Сервер запущен порт 443');
});
