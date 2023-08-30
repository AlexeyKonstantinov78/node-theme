import { read } from './modules/read.js';
import { write } from './modules/writeFileCustom.js';

const app = async () => {
  try {
    const data = await read('./files/gimn.mp3');
    console.log('data: ', data); // toString('utf8') лучше указывать кодировку
    await write('./files/rezul.mp3', data);
    console.log('Запиь в файл записан');
  } catch (error) {
    console.error(error.message);
  }
};

app();
