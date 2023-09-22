import 'dotenv/config';
import https from 'node:https';

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
  options.method = 'GET';

  options.path = `/v2/top-headlines?country=${option.lang}&category=${option.category}&q=${encodeURIComponent(option.query)}&pageSize=${option.pages}`;

  const req = https.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      console.log(JSON.parse(data));
    });

    res.on('error', err => {
      console.log(err);
    });
  });
  req.end();
};
