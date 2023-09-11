// модуль URL
import { URL, parse, format, resolve } from 'node:url';
import { stringify, parse as parseQueryString } from 'node:querystring';

const url = 'https://nasosyvodoly.ru/path/file.html?user=maks&pass=123#order';

const parseUrl = parse(url, true);
console.log('parseUrl: ', parseUrl);
console.log(parseUrl.query);

const urlClass = new URL(url);
console.log('urlClass: ', urlClass);

const urlParam = {
  protocol: 'https:',
  host: 'nasosyvodoly.ru',
  hostname: 'nasosyvodoly.ru',
  hash: '#order',
  search: '?user=maks&pass=123',
  pathname: '/path/file.html',
};

//собираем url
const formatetUrl = format(urlParam);
console.log('formatetUrl: ', formatetUrl);

const baseUrl = 'https://nasosyvodoly.ru';
const urlPath = '/path/file.html';

const resolveUrl = resolve(baseUrl, urlPath);
console.log('resolveUrl: ', resolveUrl);

// работа с query параметрами stringdefay из обекта превращает в строку
console.log(stringify(parseUrl.query));

const queryParam = {
  user: 'maxim',
  pass: '0000',
};
//собираем в строку
console.log(stringify(queryParam));
// из строки query создает объект
console.log(parseQueryString(stringify(queryParam)));

// динамически собираем адреса

const myQueryString = stringify(queryParam);
console.log('myQueryString: ', myQueryString);

const myUrl = format({
  pathname: resolveUrl,
  search: `?${myQueryString}`,
  hash: 'good',
});

console.log({ myUrl });
