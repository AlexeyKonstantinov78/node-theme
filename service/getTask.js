import { read } from '../util/readWriteFile.js';
import { getTodoById } from './todo.service.js';

export const getTask = async id => {
  const getTask = id[0];

  const bdTaskId = await getTodoById(getTask);
  if (bdTaskId.length > 0) {
    console.log('Задача с идентификатором ' + bdTaskId[0].id + ':');
    console.log('Название: ' + bdTaskId[0].title);
    console.log('Статуc: ' + bdTaskId[0].status);
  } else {
    console.log('Нет такой задачи');
  }
};
