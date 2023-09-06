import process from 'node:process';

// esc последодвательность

const write = str => process.stdout.write(str);

const read = cb => {
  process.stdin.on('data', chunk => {
    cb(chunk.toString('utf-8'));
  });
};

// очистка консоли
const clear = () => write('\x1Bc');

// функция положения курсора
const pos = (row, col) => write(`\x1b[${row};${col}H`);

// псевдографика
const box = (row, col, height, width) => {
  const border = ['┌', '┐', '─', '│', '┘', '└'];

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

clear();
// указываем положение курсора 10 строка 10 символ
//write(`\x1b[10;10H`);
box(4, 4, 10, 30);

pos(5, 5);

// вызов опроса
write('Имя: ');

// обработка ответа
read(str => {
  pos(12, 5);
  write(`\n Приввет, ${str.trim()}!\n`);
  process.exit();
});
