import https from 'https';
import http from 'http';
import url from 'url';

const urlString = 'https://vz.ru/';

const parsedUrl = url.parse(urlString);

const options = {
  hostname: parsedUrl.hostname,
  headers: {
    'Content-type': 'text/html; charset=utf-8',
  },
};


const tag = (arrTag, data) => {
  let count = 0;
  let strData = data;

  for (let index = 0; index < arrTag.length; index++) {
    do {
      if (strData.indexOf(`<${arrTag[index]}`) === -1) {
        continue;
      }
      count += 1;
      const str = strData.substring(strData.indexOf(`<${arrTag[index]}`), strData.indexOf(`</${arrTag[index].trim()}`) + 5);
      console.log(count + ': ' + str);

      strData = strData.replace(str, '');
    } while (strData.indexOf(`<${arrTag[index]}`) !== -1);
  }
};

const parseHTML = str => {
  const hTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const ahref = ['a '];

  tag(hTags, str);
  tag(ahref, str);
};

const fetchData = () => {
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


fetchData();
