import https from 'https';
import http from 'http';
import url from 'url';

const urlString = 'https://js.methed.ru/react/';

const printLink = arr => {
  let count = 0;

  console.log('Список ссылок');

  arr.forEach(item => {
    let str = item.match(/>[\d+\w+\W+\s+]*</ig);
    let strHref = item.match(/href="#?[a-z://._-\d+]+"\s?/ig);

    if (str[0].length > 2) {
      count += 1;
      console.log(count + ' ' +
        str[0].substring(1, str[0].length - 1) +
        ' (' + strHref[0].match(/#?[a-z://._-\d+]+/ig)[1] + ')');
    }
  });
};

const print = arr => {
  let count = 0;

  arr.forEach(item => {
    let str = item.match(/>[\d+\w+\W+\s+]*</ig);
    let strHref = item.match(/href="#?[a-z://._-\d+]+"\s?/ig);

    if (str[0].length > 2) {
      count += 1;
      console.log(count + ' ' + str[0].substring(1, str[0].length - 1));
    }
  });
};

const parseHTML = data => {
  const arrTagH = [];
  const arrTagA = [];

  // //const regx = /<\/?[a-z][a-z0-9]*>/gi;
  // const regx = /<\/?[h][1-9]*>/gi;
  // const regxh = /<[h][0-9][\d+\s+\w+%&',;=?$\x22_-]*>[\d+\w+\s+%&',;=?$\x22_-—]*<\/[h][0-9]>/gi;
  const regxh2 = /<[h][2][\d+\s+\w+%&',;=?$\x22_-]*>[<>\d+\w+\s+%&',;=?$\x22_-—/+\n+\r+ +]*<\/[h][2]>/gi;
  const regxh1 = /<[h][1][\d+\s+\w+%&',;=?$\x22_-]*>[\w+\W+\s+\S+]*<\/[h][1]>/gi;
  const regxh3 = /<[h][3][\d+\s+\w+%&',;=?$\x22_-]*>[<>\d+\w+\s+%&',;=?$\x22_-—/+\n+\r+ +]*<\/[h][3]>/gi;
  const regxh4 = /<[h][4][\d+\s+\w+%&',;=?$\x22_-]*>[<>\d+\w+\s+%&',;=?$\x22_-—/+\n+\r+ +]*<\/[h][4]>/gi;
  const regxh5 = /<[h][5][\d+\s+\w+%&',;=?$\x22_-]*>[<>\d+\w+\s+%&',;=?$\x22_-—/+\n+\r+ +]*<\/[h][5]>/gi;
  const regxh6 = /<[h][6][\d+\s+\w+%&',;=?$\x22_-]*>[<>\d+\w+\s+%&',;=?$\x22_-—/+\n+\r+ +]*<\/[h][6]>/gi;
  const regxhA = /<a[\W+\D+].+>[а-яё-\w+\s+]+<\/a>/gi;

  if (data.match(regxh1) !== null) {
    data.match(regxh1).forEach(item => arrTagH.push(item));
  }

  if (data.match(regxh2) !== null) {
    data.match(regxh2).forEach(item => arrTagH.push(item));
  }

  if (data.match(regxh3) !== null) {
    data.match(regxh3).forEach(item => arrTagH.push(item));
  }
  if (data.match(regxh4) !== null) {
    data.match(regxh4).forEach(item => arrTagH.push(item));
  }
  if (data.match(regxh5) !== null) {
    data.match(regxh5).forEach(item => arrTagH.push(item));
  }
  if (data.match(regxh5) !== null) {
    data.match(regxh6).forEach(item => arrTagH.push(item));
  }

  if (data.match(regxhA)) {
    data.match(regxhA).forEach(item => arrTagA.push(item));
  }

  //console.log(data.match(regxhA));

  // print(arrTagH);
  printLink(arrTagA);
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
