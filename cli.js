#!/usr/bin/env node

import process from 'node:process';
import { generatePassword } from './service/generatePassword.service.js';
import { getPasswordOptions } from './service/getPasswordOptions.service.js';
import { argsParse } from './util/argsParse.js';

const app = async () => {
  const args = argsParse(process.argv);
  const options = {
    length: 10,
    number: false,
    special: false,
    uppercase: false,
  };

  if (args.a || args.ask) {
    console.log('Ответье на вопросы');
    const options = await getPasswordOptions();
    const password = generatePassword(options);
    process.stdout.write(`Пароль: '${password}'\n`);
    process.exit();
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

    process.exit();
  }

  if (args.l || args.length) {
    console.log(`Длина: ${args.l || args.length}`);
    options.length = args.l || args.length;
  }

  if (args.u || args.uppercase) {
    console.log('Строчные буквы');
    options.uppercase = args.u || args.uppercase;
  }

  if (args.n || args.number) {
    console.log('Цифры');
    options.number = args.n || args.number;
  }

  if (args.s || args.special) {
    console.log('Спецс символы');
    options.special = args.s || args.special;
  }

  const password = generatePassword(options);
  process.stdout.write(`Пароль: '${password}'\n`);
  process.exit();
};

app();
