import { createReadStream, createWriteStream } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';

const sourceDir = './filesdir';
const targetFile = './write.txt';

const readFileDir = async (sourceDir, targetFile) => {
  try {
    const wStream = createWriteStream(targetFile);
    wStream.setDefaultEncoding('utf-8');

    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);

      files.forEach(async file => {
        console.log(file);
        const buffFile = Buffer.from(file);
        const stream = createReadStream(`${sourceDir}/${file}`);
        if (buffFile.includes('.txt')) {
          // wStream.write(`[${file}]\n`);
          // stream.pipe(wStream);
          for await (const chunk of stream) {
            wStream.write(Buffer.from(`[${file}]\n`));
            wStream.write(`${chunk}`);
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

readFileDir(sourceDir, targetFile);
