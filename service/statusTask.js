import { read } from '../util/readFile.js';
import { write } from '../util/writeFile.js';

export const statusTask = task => {
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

  if (!(statusTask === 'Выполнена' || statusTask === 'В работе')) {
    console.log('Нет такого статуса! "В работе" или Выполнена');
    return;
  }

  for (const item of data) {
    if (item.substring(0, item.indexOf('.')) === idTask) {
      array.push(item.substring(0, item.indexOf('[') + 1) + statusTask + item.substring(item.indexOf(']')));
    } else {
      array.push(item);
    }
  }

  write(array);
  console.log('Статус  задачи с идентификатором ' + idTask + ' обновлен');
};
