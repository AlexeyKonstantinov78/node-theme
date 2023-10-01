import { updateTaskById } from './todo.service.js';

export const statusTask = async task => {
  const idTask = task[0];
  try {
    task.shift();
  } catch (error) {
    console.log('Что-то забыли передать');
    return;
  }
  const statusTask = task.join(' ');

  if (!(statusTask === 'Выполнена' || statusTask === 'В работе')) {
    console.log('Нет такого статуса! "В работе" или Выполнена');
    return;
  }

  const bdTodo = await updateTaskById(idTask, { status: `[${statusTask}]` });
  console.log('Статус задачи с идентификатором ' + bdTodo + ' обновлен');
};
