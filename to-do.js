#!/usr/bin/env node

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
  }

  if (args.list) {
    console.log('list');
    listTask();
  }

  if (args.get) {
    getTask(args.get);
  }

  if (args.update) {
    console.log('update');
    updateTask(args.update);
  }

  if (args.status) {
    console.log('status');
    statusTask(args.status);
  }

  if (args.delete) {
    console.log('delete');
    deleteTask(args.delete);
  }

  //console.log(`
  //   add <название>          | добавить новую задачу
  //   list                    | вывести список задачь
  //   get <id>                | вывести информацию с указанным идентификатором
  //   update <id> <newTask>   | обновить задачу с указанным идентификатором
  //   status <id> <newStatus> | : обновить статус задачи с указанным идентификатором.
  //   delete <id>             |  удалить задачу с указанным идентификатором.
  // `);

  return;
};

app();
