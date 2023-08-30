import { createReadStream, createWriteStream } from 'node:fs';

//const wStream = createWriteStream('./write.txt'); // запись файл ,elbn cjplfy
//const rStream = createReadStream('./files/text.txt'); // чтение файла

const readStream = async path => {
  const stream = createReadStream(path);

  for await (const chunk of stream) {
    console.log('chunk: ', chunk);
  }
};

readStream('./files/text.txt');
