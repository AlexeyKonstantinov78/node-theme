import fs from 'node:fs';
import { stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const filePath = path.join(os.homedir(), 'to-do', 'todolist.txt');

export const read = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n').filter(n => n);
  } catch (error) {
    //console.log('Список to-do пуст');
  }
};

export const write = data => {
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath));
  }
  fs.writeFileSync(filePath, data.join('\n'));
};
