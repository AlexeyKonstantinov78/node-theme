import { read, write } from '../util/readWriteFile.js';

export const addTask = task => {
  let data = read();
  let count = 0;

  if (data !== undefined) {
    if (data.length > 0) {
      count = data[data.length - 1].substring(0, data[data.length - 1].indexOf('.'));
    }
  } else {
    data = [];
  }

  const id = parseInt(count) + 1;
  data.push(`${id}. [В работе] ${task.join(' ')}`);
  write(data);
  console.log('Задача добавлена с идентификатором ' + id);
};
