import fs from 'node:fs';
import readline from 'node:readline/promises';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ' > ',
});

const questions = JSON.parse(fs.readFileSync('./question.json'));
let currentQuestion = 0;
let countCorrect = 0;

console.log('Приветствую на квиз. проверку на знания JavaScript');

const kwiz = (i) => {
  console.log(`Вопрос ${i + 1}:` + questions[i].question);
  questions[i].options.forEach((item, index) => {
    console.log(index + 1 + " " + item);
  });
  rl.prompt();
};

rl.on('line', line => {
  console.log('Ваш ответ: ' + line);

  if (line == questions[currentQuestion].correctIndex) {
    console.log('Правильный ответ!\n');
    countCorrect += 1;
    currentQuestion += 1;
  } else {
    console.log('Не правильный ответ!\n');
    currentQuestion += 1;
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
