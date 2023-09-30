import 'dotenv/config';
//import pg from 'pg';
import knex, { default as Knex } from 'knex';

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

// await client.connect();

// try {
//   const str = process.argv[2];
//   //const res = await client.query('SELECT * FROM users WHERE id = 1');
//   const res = await client.query('SELECT * FROM users WHERE name = $1', [str]);
//   console.log('res: ', res.rows);
// } catch (error) {
//   console.error(error.message);
// }

// client.end();

const addUser = async (name, phone, email, age) => {
  await client('users').insert({ name, phone, email, age });
  console.log('Пользователь успешно добавлен');
};

const getAllUsers = async () => {
  const users = await client('users');
  return users;
};

const init = async ( ) => {
  await addUser('Vovan', '89002225544', 'vovan@vovan.ru', 55);
  console.log(await getAllUsers());

  client.destroy(); // закрываем соединение
};

init();
