import readline from 'node:readline/promises';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const getPasswordOptions = async () => {

  const length = parseInt(await rl.question('Длина пароля[8]: ')) || 8;

  const number =
    ((await rl.question('Включаем цифры? (y/n) [y]: ')).toLowerCase() ||
      'y') === 'y';

  const special =
    ((await rl.question('Включаем спецальные символы? (y/n) [y]: ')).toLowerCase() ||
      'y') === 'y';

  const uppercase =
    ((await rl.question('Включаем заглавные буквы? (y/n) [y]: ')).toLowerCase() ||
      'y') === 'y';

  return { length, number, special, uppercase };
};
