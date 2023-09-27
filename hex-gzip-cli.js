#!/usr/bin/env node

import process from 'node:process';
import { argsParse } from './util/argsParse.js';
import { hexfile } from './services/hex.services.js';

const app = () => {
  const args = argsParse(process.argv);
  console.log('args: ', args);

  if (args.hexgzip) {
    if (args.hexgzip === true) {
      console.log('Укажите имя файла');
      process.exit();
    }
    console.log();
    hexfile(args.hexgzip);
  }

  if (args.gziphex) {
    if (args.gziphex === true) {
      console.log('Укажите имя файла');
      process.exit();
    }
  }

  console.log(`
    -hexgzip <имя файла>  | хешировани и сжатие файла обязательно указать имя файла
    -gziphex <имя файла>  | распаковка файла и проверка целосности файла
  `);

  process.exit();
};

app();
