import https from 'node:https';

const API_URL = process.env.API_URL;
const TICKERS_URL = 'data/all/coinlist?summary=true';

export const fetchUrlAsync = async url =>
  new Promise((resolve, reject) => {
    https.get(url, response => {
      let data = '';

      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(data);
      });
      response.on('error', err => {
        reject(err);
      });
    });
  });

export const fetchValidTickers = async () => {
  try {
    const url = `${API_URL}${TICKERS_URL}`;
    const data = await fetchUrlAsync(url);
    const validTIckers = Object.keys(JSON.parse(data).Data);
    return validTIckers;
  } catch (error) {
    console.error(`Ошиюка при получении даннных ${error.message}`);
  }
};
