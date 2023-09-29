import { readFile, writeFile } from 'node:fs/promises';
import http from 'node:http';
import url from 'node:url';

const NOT_FOUND_MESSAGE = 'Нет такой ссылки';
const SERVER_ERROR_MESSAGE = 'Ошибка сервера';
const SUCCES_MESSAGE = 'Валюта успешно добавлена';
const INVALID_REQUEST_MESSAGE = 'нечего добавлять';
const QUOTES_FILE = process.env.QUOTES_FILE;
const TICKERS_FILE = process.env.TICKERS_FILE;

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
    console.error(`Ошибка при чтении файла: ${error.message}`);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: SERVER_ERROR_MESSAGE }));
  }
};

const handleAddTickers = (req, res, tickers, validTickers) => {
  const lengthTickers = tickers.length;
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', async () => {
    const userTickers = [];

    const data = JSON.parse(body.toUpperCase());
    if (typeof data === 'string') {
      userTickers.push(data);
    }
    if(Array.isArray(data)) {
      userTickers.push(...data);
    }

    userTickers.forEach(ticker => {
      if (validTickers.includes(ticker) && !tickers.includes(ticker)) {
        tickers.push(ticker);
      }
    });

    if (tickers.length !== lengthTickers) {
      try {
        await writeFile(TICKERS_FILE, JSON.stringify(tickers));
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: SUCCES_MESSAGE }));
      } catch (error) {
        console.error(`Ошибка записи в файл: ${error.message}`);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: SERVER_ERROR_MESSAGE }));
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: INVALID_REQUEST_MESSAGE }));
    }

  });
};

export const startServer = (tickers, validTickers) => {
  const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname.startsWith('/crypto') && req.method === 'GET') {
      handleCruptoRequest(res, query);
      return;
    }

    if (pathname.startsWith('/crypto') && req.method === 'POST') {
      handleAddTickers(req, res, tickers, validTickers);
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
