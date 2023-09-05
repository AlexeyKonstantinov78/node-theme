import readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '# ', // приглашение
});

// вызываем прриглашение
rl.prompt();
// вопросы в консоли и ждет ответа присваевая результат в переменную
const answer = await rl.question('Привет, твое имя: ');

console.log(`Hello, ${answer}`);

rl.close(); // завершает readline
