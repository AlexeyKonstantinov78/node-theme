import fs from 'fs';

export const read = () => {
  const path = './file/todolist.txt';
  const data = fs.readFileSync(path, 'utf8');

  return data.split('\n').filter(n => n);
};
