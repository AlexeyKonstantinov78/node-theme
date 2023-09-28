import { createWriteStream, createReadStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import path from 'node:path';
import { access } from 'node:fs/promises';
import { hashFile } from '../util/hashFile.js';

export const gziphex = async file => {
  const __dirname = path.dirname(file);
  const namefile = path.basename(file);

  const inputFilePath = path.join(__dirname, namefile);

  const outputFilePath = path.join(__dirname, namefile.split('.')[0] + '.' + namefile.split('.')[1]);

  try {
    await access(inputFilePath);

    const input = createReadStream(inputFilePath);
    const output = createWriteStream(outputFilePath);

    input.pipe(createGunzip()).pipe(output);
    console.log('Данные успешно распакованны в файл: ', outputFilePath);
  } catch (error) {
    console.log('Нет файла для распаковки: ' + inputFilePath);
    return false;
  }

  const hash = hashFile(outputFilePath);
  console.log('hash: ', hash);
};
