import { addTodoTask } from './todo.service.js';

export const addTask = async task => {
  await addTodoTask('[В работе]', task.join(' '));
};
