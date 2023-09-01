import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const copyFiles = async (path, nameFile) => {
  try {
    await pipeline(
      createReadStream(path),

      // либо еще операции

      createWriteStream(nameFile),
    );

    console.log('ready');
  } catch (error) {
    console.error(error);
  }
};

copyFiles('./filesdir', './write.txt');
