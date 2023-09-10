import { read } from '../util/readFile.js';
import { write } from '../util/writeFile.js';

export const addTask = task => {
  const data = read();
  let count = 0;
  if (data.length > 0) {
    count = data[data.length - 1].substring(0, data[data.length - 1].indexOf('.'));
  }

  const id = parseInt(count) + 1;
  data.push(`${id}. [В работе] ${task.join(' ')}`);
  write(data);
  console.log('Задача добавлена с идентификатором ' + id);
};
