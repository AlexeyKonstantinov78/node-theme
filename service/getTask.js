import { read } from '../util/readWriteFile.js';

export const getTask = id => {
  const getTask = id[0];
  let taskId = true;
  const data = read();
  if (getTask > data.length) {
    console.log('Нет такой задачи');
    return;
  }

  for (const task of data) {
    if (task.indexOf('.') !== -1) {
      const idTask = task.substring(0, task.indexOf('.'));

      if (getTask === idTask) {
        console.log('Задача с идентификатором ' + idTask + ':');
        console.log('Название: ' + task.substring(task.indexOf('] ') + 2));
        console.log('Статуc: ' + task.substring(task.indexOf(' [') + 2, task.indexOf(']')));
        taskId = false;
      }
    }
  }

  if (taskId)
    console.log('Нет такой задачи');
};
