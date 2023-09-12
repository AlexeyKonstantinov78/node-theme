import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { parse } from 'node:url';

const port = 3000;
const host = 'localhost';

const getUsers = async (req, res) => {
  try {
    const data = await readFile('users.json', 'utf8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(data);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Ошибка сервера');
  }
};

const server = createServer(async (req, res) => {
  const { method, url } = req;
  const parseUrl = parse(url, true);
  console.log('parseUrl: ', parseUrl);

  //получение запроса
  //console.log({ req });
  // более надежный способ получения url
  if (method === 'GET' && parseUrl.pathname === '/text') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('Привет node text');
  }

  if (method === 'GET' && parseUrl.pathname === '/users') {
    return await getUsers(req, res);
  }

  if (method === 'POST' && parseUrl.pathname === '/users') {
    if (req.headers['Content-Type'] !== 'application/json') {
      res.statusCode = 415;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      return res.end('Данные можно отправлять в формате json');
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const userData = JSON.parse(body);
        userData.id = Math.random().toString(36).substring(2, 10);
        const data = await readFile('users.json', 'utf8');
        // ! проверить данные пользователя

        const users = JSON.parse(data);
        users.push(userData);
        await writeFile('users.json', JSON.stringify(users));

        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(userData));
      } catch (error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Неверный формат данных');
      }
    });
    return;
  }

  if (method === 'DELETE' && parseUrl.pathname.startsWith('/users/')) {
    //const userID = parseUrl.pathname.substring(7);
    const userID = parseUrl.pathname.split('/')[2];
    try {
      const data = await readFile('users.json', 'utf8');
      const users = JSON.parse(data);
      //const updateUsers = users.filter(user => user.id !== userID);
      // ! проверка на наличие пользователя
      const index = users.findIndex(user => user.id === userID);
      if (index === -1) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.end('Страница не найдена');
      }
      users.splice(index, 1);
      await writeFile('users.json', JSON.stringify(users));

      res.statusCode = 204;
      res.setHeader('Content-Lenght', 0);
      res.end();
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Ошибка сервера');
    }
    return;
  }

  if (method === 'PUT' && parseUrl.pathname.startsWith('/users/')) {
    const userID = parseUrl.pathname.split('/')[2];
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const usersData = JSON.parse(body);
        const data = await readFile('users.json', 'utf8');
        const users = JSON.parse(data);
        const updatedUsers = users.map(user => {
          if (user.id === userID) {
            userID.id = user.id;
            return usersData;
          }
          return user;
        });

        await writeFile('users.json', JSON.stringify(updatedUsers));

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`Данные пользователя с идентификтором ${userID} успешно обновленны`);
      } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Ошибка сервера');
      }
    });
    return;
  }

  if (method === 'PATCH' && parseUrl.pathname.startsWith('/users/')) {
    const userID = parseUrl.pathname.split('/')[2];
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const usersData = JSON.parse(body);
        const data = await readFile('users.json', 'utf8');
        const users = JSON.parse(data);
        const updatedUsers = users.map(user => {
          if (user.id === userID) {
            return { ...user, ...usersData };
          }
          return user;
        });

        await writeFile('users.json', JSON.stringify(updatedUsers));

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(`Данные пользователя с идентификтором ${userID} успешно данные обновленны`);
      } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Ошибка сервера');
      }
    });
    return;
  }

  if (method === 'GET' && parseUrl.pathname === '/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(`
      <html>
        <head>
          <title>Привет HTML</title>
        </head>
        <body>
          <h1>Привет HTML</h1>
        </body>
      </html>
    `);
  }

  if (method === 'GET' && parseUrl.pathname === '/') {
    // отправка ответа
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('Hello world');
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Страница не найдена');
});

// запуск сревера прослушивание
server.listen(port, host, () => {
  console.log(`Сервер запущен на http://${host}:${port}`);
});
