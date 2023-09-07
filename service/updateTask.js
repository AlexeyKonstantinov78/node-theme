import { read } from '../util/readFile.js';
import { write } from '../util/writeFile.js';

export const updateTask = task => {
  const data = read();
  const arr = task.split(' ');
  const idTask = arr[0];
  const statusTask = arr[1];
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
