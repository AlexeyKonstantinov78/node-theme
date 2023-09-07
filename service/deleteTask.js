import { read } from '../util/readFile.js';
import { write } from '../util/writeFile.js';

export const deleteTask = task => {
  const arr = task.split(' ');
  const deleteTask = arr[0];
  let del = true;

  const data = read();

  data.forEach(item => {
    if (item.includes(deleteTask)) {
      del = false;
    }
  });

  if (del) {
    console.log('Такой задачи нет ' + deleteTask);
    return;
  }

  const array = data.filter(item => !item.includes(deleteTask));
  write(array);
  console.log('Задача с идентификаторам ' + deleteTask + ' удалена');
};
