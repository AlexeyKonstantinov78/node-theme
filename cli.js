#!/usr/bin/env node

import process from 'node:process';
import { generatePassword } from './service/generatePassword.service.js';
import { getPasswordOptions } from './service/getPasswordOptions.service.js';
import { argsParse } from './util/argsParse.js';
import { saveSetting, getSetting } from './service/setting.service.js';

const app = async () => {
  const args = argsParse(process.argv, ['ask', 'setting']);
  const options = {
    length: 10,
    number: false,
    special: false,
    uppercase: false,
  };

  if (!args.setting) {
    const setting = await getSetting();
    Object.assign(options, setting);
  }

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
      ask -a         | провести опрос (игнорит другие команды)
      setting        | сохраняет настройки из параметров -l -u-n -s
    `);

    process.exit();
  }

  if (args.l || args.length) {
    options.length = +(args.l || args.length);
  }

  if (args.u || args.uppercase) {
    options.uppercase = args.u || args.uppercase;
  }

  if (args.n || args.number) {
    options.number = args.n || args.number;
  }

  if (args.s || args.special) {
    options.special = args.s || args.special;
  }

  if (args.setting) {
    await saveSetting(options);
    process.exit();
  }

  const password = generatePassword(options);
  process.stdout.write(`Пароль: '${password}'\n`);
  process.exit();
};

app();
