import fs from 'node:fs';
import readline from 'node:readline/promises';
import process from 'node:process';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ' > ',
});

const questions = JSON.parse(fs.readFileSync('./question.json'));
let currentQuestion = 0;
let countCorrect = 0;

const write = str => process.stdout.write(str);
const pos = (row, col) => write(`\x1b[${row};${col}H`);

const border = [
  chalk.magenta('┌'),
  chalk.magenta('┐'),
  chalk.magenta('─'),
  chalk.magenta('│'),
  chalk.magenta('┘'),
  chalk.magenta('└'),
  chalk.green('█'),
  chalk.red('█'),
];

const box = (row, col, height, width) => {

  const h = height - 2;
  const w = width - 2;

  pos(row, col);
  write(border[0] + border[2].repeat(w) + border[1]);
  for (let i = 1; i < h; i++) {
    pos(row + i, col);
    write(border[3] + ' '.repeat(w) + border[3]);
  }
  pos(row + h, col);
  write(border[5] + border[2].repeat(w) + border[4]);
};

const boxProgress = () => {
  box(11, 2, 7, 30);
  pos(12, 3);
  console.log(`Вопросов: ${countCorrect} из ${Object.keys(questions).length}`);
  box(13, 3, 4, 28);
  pos(14, 4);
  write(border[6]);
  pos(15, 2);
  console.log('\n');
};

console.log(chalk.blue('Приветствую на квиз. проверку на знания JavaScript\n'));

const kwiz = (i) => {
  console.log(chalk.green(`Вопрос ${i + 1}:` + questions[i].question) + '\n');
  questions[i].options.forEach((item, index) => {
    console.log(index + 1 + " " + item);
  });
  rl.prompt();
};

rl.on('line', line => {
  console.log(chalk.blue('Ваш ответ: ' + line));

  if (line == questions[currentQuestion].correctIndex) {

    console.log('Правильный ответ!\n');
    countCorrect += 1;
    currentQuestion += 1;
    boxProgress();
  } else {

    console.log('Не правильный ответ!\n');
    currentQuestion += 1;
    boxProgress();
  }

  if (currentQuestion === Object.keys(questions).length) {
    console.log('Количеств правильных ответов: ' + countCorrect);
    rl.close();
  }

  kwiz(currentQuestion);
});

rl.on('close', () => {
  console.log('Пока');
  process.exit();
});

kwiz(currentQuestion);
