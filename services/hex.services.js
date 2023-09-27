import crypto from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const hexfile = async file => {

  const __dirname = path.dirname(file);
  const namefile = path.basename(file);
  //const extname = path.extname(file);

  const writeNameFile = path.join(__dirname, namefile.replace('.', '_') + '.sha256');

  const dataFile = await readFile(file);

  const hashFile = crypto.createHash('sha256').update(dataFile).digest('hex');
  //console.log('hashFile: ', hashFile);
  await writeFile(writeNameFile, hashFile);
};
