import { read } from '../util/readFile.js';

export const listTask = () => {
  const data = read();

  data.forEach(item => console.log(item));
};
