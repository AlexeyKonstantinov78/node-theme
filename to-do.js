#!/usr/bin/env node
import process from 'node:process';
import { addTask } from './service/addTask.js';
import { deleteTask } from './service/deleteTask.js';
import { getTask } from './service/getTask.js';
import { listTask } from './service/list.js';
import { statusTask } from './service/statusTask.js';
import { updateTask } from './service/updateTask.js';
import { argsParseToDo } from './util/argsParseToDo.js';

const app = () => {
  const args = argsParseToDo(process.argv);

  if (args.add) {
    addTask(args.add);
    process.exit();
  }

  if (args.list) {
    console.log('list');
    listTask();
    process.exit();
  }

  if (args.get) {
    getTask(args.get);
    process.exit();
  }

  if (args.update) {
    console.log('update');
    updateTask(args.update);
    process.exit();
  }

  if (args.status) {
    console.log('status');
    statusTask(args.status);
    process.exit();
  }

  if (args.delete) {
    console.log('delete');
    deleteTask(args.delete);
    process.exit();
  }

  console.log('Неверная команда');

  console.log(`
    HELP:
    add <название>          | добавить новую задачу
    list                    | вывести список задачь
    get <id>                | вывести информацию с указанным идентификатором
    update <id> <newTask>   | обновить задачу с указанным идентификатором
    status <id> <newStatus> | : обновить статус задачи с указанным идентификатором.
    delete <id>             |  удалить задачу с указанным идентификатором.
  `);

  process.exit();
};

app();
