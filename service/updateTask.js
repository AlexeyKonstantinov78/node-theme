import { read, write } from '../util/readWriteFile.js';

export const updateTask = task => {
  const data = read();
  const idTask = task[0];
  try {
    task.shift();
  } catch (error) {
    console.log('Что-то забыли передать');
    return;
  }

  const statusTask = task.join(' ');
  const array = [];

  for (const item of data) {
    if (item.substring(0, item.indexOf('.')) === idTask) {
      array.push(item.substring(0, item.indexOf(']') + 2) + statusTask);
    } else {
      array.push(item);
    }
  }

  write(array);
  console.log('Статус  задачи с идентификатором ' + idTask + ' обновлен');
};
