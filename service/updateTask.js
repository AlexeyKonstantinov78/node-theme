import { updateTitleById } from './todo.service.js';

export const updateTask = async task => {
  const idTask = task[0];
  try {
    task.shift();
  } catch (error) {
    console.log('Что-то забыли передать');
    return;
  }

  const statusTask = task.join(' ');

  const bdTodo = await updateTitleById(idTask, { title: statusTask });
  console.log('Название задачи с идентификатором ' + bdTodo + ' обновлен');
};
