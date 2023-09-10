import fs from 'fs';

export const write = data => {
  const path = './file/todolist.txt';

  fs.writeFileSync(path, data.join('\n'));
};
