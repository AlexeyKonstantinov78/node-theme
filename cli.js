#!/usr/bin/env node

import { argsParse } from './util/argsParse.js';

const app = () => {
  const args = argsParse(process.argv);

  if (args.h || args.help) {
    console.log(`
      -h --help      | помощь - список команд
      -l --length    | длина пароля
      -u --uppercase | заглавные буквы
      -n --number    | числа
      -s --special   | спецсимвол
      -a -- ask      | провести опрос
    `);

    return;
  }
};

app();
