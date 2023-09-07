#!/usr/bin/env node

import { generatePassword } from './service/generatePassword.service.js';
import { argsParse } from './util/argsParse.js';

const app = () => {
  const args = argsParse(process.argv);
  const option = {
    length: 10,
    number: false,
    special: false,
    uppercase: false,
  };

  if (args.a || args.ask) {
    generatePassword(option);

    return;
  }

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

  if (args.l || args.length) {
    console.log(`Длина: ${args.l || args.length}`);
    option.length = args.l || args.length;
  }

  if (args.u || args.uppercase) {
    console.log('Строчные буквы');
    option.uppercase = args.u || args.uppercase;
  }

  if (args.n || args.number) {
    console.log('Цифры');
    option.number = args.n || args.number;
  }

  if (args.s || args.special) {
    console.log('Спецс символы');
    option.special = args.s || args.special;
  }

  console.log(option);
  generatePassword(option);
};

app();
