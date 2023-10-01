import 'dotenv/config';
import pg from 'pg';
import { default as Knex } from 'knex';

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_DATABASE;
const PORT = process.env.DB_PORT;

const client = Knex({
  client: 'pg',
  connection: {
    host: HOST,
    port: PORT || 5432,
    database: DATABASE,
    user: USER,
    password: PASSWORD,
  },
});

export const getAllTodo = async () => {
  const listTodo = await client('todo');
  client.destroy();
  return listTodo;
};

export const addTodoTask = async (status, title) => {
  const task = await client('todo').insert({ status, title })
    .returning('*');
  client.destroy();

  task.forEach(item =>
    console.log(`Задача добавлена с идентификатором ${item.id}`));
};
