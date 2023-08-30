import { read } from './modules/read.js';
import { write } from './modules/writeFileCustom.js';

const app = async () => {
  try {
    const data = await read('./files/text.txt');
    console.log('data: ', data.toString('utf-8')); // toString('utf8') лучше указывать кодировку
    await write('./files/rezultWriteText.txt', data.toString('utf-8').toUpperCase());
    console.log('Запиь в файл записан');
  } catch (error) {
    console.error(error.message);
  }
};


app();
