import { updateTaskById } from './todo.service.js';

export const updateTask = async task => {
  const idTask = task[0];
  try {
    task.shift();
  } catch (error) {
    console.log('Что-то забыли передать');
    return;
  }

  const statusTask = task.join(' ');

  const bdTodo = await updateTaskById(idTask, { title: statusTask });
  if (bdTodo.length === 0) {
    console.log('Такой задачи нет');
    return;
  }
  console.log(
    'Название задачи с идентификатором ' + bdTodo[0].id + ' обновлен'
  );
};
