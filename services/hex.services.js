import crypto from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';

export const hexfile = async file => {

  const __dirname = path.dirname(file);
  const namefile = path.basename(file);

  const writeNameFile = path.join(__dirname, namefile.replace('.', '_') + '.sha256');

  const dataFile = await readFile(file);

  const hashFile = crypto.createHash('sha256').update(dataFile).digest('hex');
  await writeFile(writeNameFile, hashFile);

  const outputFilePath = path.join(__dirname, namefile.split('.')[0] + '.gz');

  const input = createReadStream(file);
  const output = createWriteStream(outputFilePath);
  input.pipe(createGzip()).pipe(output);

  console.log('Данные успешно упакованны');
};
