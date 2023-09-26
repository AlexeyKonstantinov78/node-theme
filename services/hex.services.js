import crypto from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const hexfile = file => {

  const dataFile = await readFile(file);

  const hashFile = crypto.createHash('sha256').update(dataFile).digest('hex');

  const ver = crypto.createVerify('sha256');

};

