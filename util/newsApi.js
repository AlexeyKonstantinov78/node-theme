import 'dotenv/config';
import https from 'node:https';
//import url from 'url';

const API_KEY = process.env.API_KEY;

const options = {
  hostname: 'newsapi.org',
  path: '/v2/everything',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac)',
    'x-api-key': API_KEY,
  },
};

export const newsApi = option => {
  console.log(option);
  options.method = 'GET';

  options.path = `/v2/top-headlines?country=${option.lang}&category=${option.category}&q=${encodeURIComponent(option.query)}&pageSize=${option.pages}`;
  // const strUrl = `https://${options.hostname}${options.path}?${options.query}`;
  // console.log(url.parse(strUrl));

  const req = https.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response data for GET request');
      console.log(JSON.parse(data));
    });

    res.on('error', err => {
      console.log(err);
    });
  });
  console.log(req);
  req.end();
};
