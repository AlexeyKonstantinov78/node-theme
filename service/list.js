import { read } from '../util/readWriteFile.js';

export const listTask = () => {
  const data = read();

  if (data !== undefined)
    data.forEach(item => console.log(item));
  else
    console.log('Список пуст');
};
