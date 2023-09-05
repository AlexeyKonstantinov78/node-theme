import { createReadStream, createWriteStream } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';

const sourceDir = './filesdir';
const targetFile = './write.txt';

const readFileDir = async (sourceDir, targetFile) => {
  try {

    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);

      const wStream = createWriteStream(targetFile);
      wStream.setDefaultEncoding('utf-8');

      for await (const file of files) {
        console.log(file);
        const buffFile = Buffer.from(file);

        if (buffFile.includes('.txt')) {
          wStream.write(`[${file}]\n`);
          const stream = createReadStream(`${sourceDir}/${file}`);

          for await (const line of stream) {
            wStream.write(line);
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

readFileDir(sourceDir, targetFile);
