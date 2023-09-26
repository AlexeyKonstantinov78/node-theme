#!/usr/bin/env node

import process from 'node:process';
import { argsParse } from './util/argsParse.js';

const app = () => {
  const args = argsParse(process.argv);
  console.log('args: ', args);

  console.log(`
    -hexgzip <имя файла>  | хешировани и сжатие файла обязательно указать имя файла
    -gziphex <имя файла>  | распаковка файла и проверка целосности файла
  `);

  process.exit();
};

app();
