import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { fetchValidTickers } from './modules/dataModule.js';

const PORT = process.env.PORT || 8080;
const TICKERS_FILE = process.env.TICKERS_FILE;

try {
  const validTickers = await fetchValidTickers();
  console.log('validTickers: ', validTickers);

  const fileData = await readFile(TICKERS_FILE, 'utf-8');
  const tickers = JSON.parse(fileData);

  const server = startServer(tickers, validTickers);
} catch (error) {
  console.error('Ошибка при чтении данных: ', error.message);
}
