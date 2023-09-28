import crypto from 'node:crypto';
import { readFile } from 'node:fs/promises';

export const hashFile = async file => {

  const dataFile = await readFile(file);

  const hash = crypto.createHash('sha256').update(dataFile).digest('hex');

  return hash;
};
