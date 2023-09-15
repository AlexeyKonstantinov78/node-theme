import https from 'https';
import http from 'http';
import url from 'url';

const urlString = 'https://js.methed.ru/react/';

const tag = (arrTag, data) => {
  let count = 0;
  let strData = data;

  //const body = strData.substring(strData.indexOf(`<body`), strData.indexOf(`</body>`) + 7);

  //const regx = /<\/?[a-z][a-z0-9]*>/gi;
  const regx = /<\/?[h][1-9]*>/gi;
  const regxh = /<[h][1-9][\d+\s+\w+\W+]*>[\d+\w+\s+\W+]*<\/[h][1-9]>/gi;

  //<h3 id="max-leskin" class="you-reach-success__content-subtitle">Преподаватель — Максим Лескин</h3

  //console.log(strData.match(regxh));

  //'<h3 id="max-leskin" class="you-reach-success__content-subtitle">Преподаватель — Максим Лескин</h3>'.match(regxh);
  console.log('<h3 id="max-leskin" class="you-reach-success__content-subtitle">Преподаватель — Максим Лескин</h3>'.match(regxh));
  //console.log('<h1>Привет! мир</h1>'.match(/<[h][0-9]>[а-яА-Я!\w+\s]*<\/[h][0-9]*>/gi));
  // let h1 = body.matchAll(regx);
  // let arr = Array.from(h1);
  // console.log(arr[1]);

  // for (let index = 0; index < arrTag.length; index++) {
  //   do {
  //     if (strData.indexOf(`<${arrTag[index]}`) === -1) {
  //       continue;
  //     }
  //     count += 1;
  //     const str = strData.substring(strData.indexOf(`<${arrTag[index]}`), strData.indexOf(`</${arrTag[index].trim()}`) + 5);
  //     console.log(count + ': ' + str);

  //     strData = strData.replace(str, '');
  //   } while (strData.indexOf(`<${arrTag[index]}`) !== -1);
  // }
};

const parseHTML = str => {
  const hTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const ahref = ['a'];

  tag(hTags, str);
  //tag(ahref, str);
};

const fetchData = urlStr => {

  const parsedUrl = url.parse(urlStr);

  const options = {
    hostname: parsedUrl.hostname,
    headers: {
      'Content-type': 'text/html; charset=utf-8',
    },
  };
  const httpModule = parsedUrl.protocol === 'https:' ? https : http;
  const req = httpModule.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      parseHTML(data);
    });

    res.on('error', err => {
      console.log(err.message);
    });
  });

  req.end();
};

fetchData(urlString);
