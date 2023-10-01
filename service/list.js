import { getAllTodo } from './todo.service.js';

export const listTask = async () => {
  const allTodo = await getAllTodo();

  if (allTodo.length > 0)
    allTodo.forEach(todo =>
      console.log(`${todo.id}. ${todo.status} ${todo.title}`));
  else {
    console.log('Бд список пуст');
  }
};
