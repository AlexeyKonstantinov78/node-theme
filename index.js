import readline from 'node:readline/promises';
import process from 'node:process';

const rl = readline.createInterface({
  input: process.stdin, // забираем
  output: process.stdout, // вводим в консоль
  prompt: '# ', // приглашение
});

console.log('Напишите команду: ');
// вызываем прриглашение
rl.prompt();

const comands = {
  help() {
    console.log('help', 'time', 'date', 'exit');
    rl.prompt();
  },
  time() {
    const currentTime = new Date();
    console.log(
      currentTime.getHours() +
      ':' +
      currentTime.getMinutes() +
      ':' +
      currentTime.getSeconds(),
    );
  },
  date() {
    const currentDate = new Date();
    const dateString = currentDate.toISOString().split('T')[0];
    console.log(dateString);
  },
  exit() {
    console.log('выход');
    rl.close();
  },
};

// вопросы в консоли и ждет ответа присваевая результат в переменную
//const answer = await rl.question('Привет, твое имя: ');

rl.on('line', line => {
  const command = comands[line];
  //console.log(`Hello, ${answer}`);
  //rl.close();
  if (command) {
    command();
  } else {
    console.log('Неверная команда');
  }
  rl.prompt();
});

// закрытие самомго process
rl.on('close', () => {
  console.log('See');
  process.exit();
});

//rl.close(); // завершает readline
//console.dir({ process });
