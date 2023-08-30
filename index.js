import { read } from './modules/read.js';
import { write } from './modules/writeFileCustom.js';

const app = async () => {
  try {
    // const data = await read('./files/text.txt');
    // работа с буфером буфер это абтрактное хранилище данных 16 ричном виде данных
    //console.log('data: ', data); // toString('utf8') лучше указывать кодировку

    // создаем буфер не безопасный
    const bufferUnsafe = Buffer.allocUnsafe(1024); // работает быстрее но не безопасно
    console.log('bufferUnsafe: ', bufferUnsafe);

    // безопасный буфер
    const bufferSafe = Buffer.alloc(1024, 'изучаем node');
    console.log('bufferSafe: ', bufferSafe);

    await write('./files/rezulBuff.txt', bufferSafe);
    console.log('Запиь в файл записан');
  } catch (error) {
    console.error(error.message);
  }
};

app();
