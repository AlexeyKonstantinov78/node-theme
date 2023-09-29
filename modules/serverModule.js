import { NOTFOUND } from 'node:dns';
import { readFile } from 'node:fs/promises';
import http from 'node:http';
import url from 'node:url';

const NOT_FOUND_MESSAGE = 'Нет такой ссылки';
const QUOTES_FILE = process.env.QUOTES_FILE;

const handleStepQuery = (res, quotesData, queryStep) => {
  const step = parseInt(queryStep);
  if (step && step > 0) {
    const lastValuesData = {};

    Object.keys(quotesData).forEach(ticker => {
      const values = quotesData[ticker];

      const slicedValue = values.slice(-step);
      lastValuesData[ticker] = step < values.length ? slicedValue : values;
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(lastValuesData));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(quotesData));
};

const handleCruptoRequest = async (res, query) => {
  try {
    const fileDate = await readFile(QUOTES_FILE, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const quotesData = JSON.parse(fileDate);

    if (query.tickers) {
      const tickers = query.tickers.toUpperCase().split(',');
      const filteredData = {};
      tickers.forEach(ticker => {
        if (Object.prototype.hasOwnProperty.call(quotesData, ticker)) {
          filteredData[ticker] = quotesData[ticker];
        }
      });

      return handleStepQuery(res, filteredData, query.step);
    }

    handleStepQuery(res, quotesData, query.step);

  } catch (error) {
    console.error(error.message);
  }
};

export const startServer = (tickers, validTickers) => {
  const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname.startsWith('/crypto') && req.method === 'GET') {
      handleCruptoRequest(res, query);
      return;
    }

    if (pathname.startsWith('/crypto') && req.method === 'POST') {
      return;
    }

    if (pathname.startsWith('/crypto') && req.method === 'DELETE') {
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: NOT_FOUND_MESSAGE }));
  });

  return server;
};
