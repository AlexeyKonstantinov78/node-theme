import { read, write } from '../util/readWriteFile.js';
import { deleteId } from './todo.service.js';

export const deleteTask = async task => {
  const deleteTask = task[0];

  if (task[0] === undefined) {
    console.log('Что-то забыли передать');
    return;
  }

  const bdDeleteTask = await deleteId(deleteTask);

  if (bdDeleteTask.length === 0) {
    console.log('Такой задачи нет');
    return;
  }
  console.log('Задача с идентификаторам ' + bdDeleteTask[0].id + ' удалена');
};
