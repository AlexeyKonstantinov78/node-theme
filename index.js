import readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '# ', // приглашение
});

console.log('Привет, твое имя: ');
// вызываем прриглашение
rl.prompt();
// вопросы в консоли и ждет ответа присваевая результат в переменную
//const answer = await rl.question('Привет, твое имя: ');

rl.on('line', answer => {
  console.log(`Hello, ${answer}`);
  rl.prompt();
});

//rl.close(); // завершает readline
