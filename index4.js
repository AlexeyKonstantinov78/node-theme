// pipeline
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';


const copy = async (from, to) => {
  try {
    await pipeline(
      createReadStream(from),
      // либо еще операции
      createWriteStream(to),
    );

    console.log('ready');
  } catch (error) {
    console.error(error);
  }
};

copy('./files/gimn.mp3', './write.txt');
