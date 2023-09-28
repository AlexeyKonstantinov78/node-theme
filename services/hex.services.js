import { writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { hashFile } from '../util/hashFile.js';

export const hexfile = async file => {

  const __dirname = path.dirname(file);
  const namefile = path.basename(file);

  const writeNameFile = path.join(__dirname, namefile.replace('.', '_') + '.sha256');

  try {
    await access(file);
  } catch (error) {
    console.log('Нет файла для упаковки');
    return false;
  }

  const hash = await hashFile(file);

  await writeFile(writeNameFile, hash);

  const outputFilePath = path.join(__dirname, namefile + '.gz');

  const input = createReadStream(file);
  const output = createWriteStream(outputFilePath);
  input.pipe(createGzip()).pipe(output);

  console.log('Данные успешно упакованны');
};
