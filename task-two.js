import e from 'express';
import { createReadStream, createWriteStream } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';
//import { pipeline } from 'node:stream/promises';

const sourceDir = './filesdir';
const targetFile = './write.txt';

const readStream = async (rStream, wStream) => {
  //const stream = createReadStream(path);

  for await (const chunk of rStream) {
    wStream.write(`${chunk}`);
  }
};

const readFileDir = async (sourceDir, targetFile) => {
  try {

    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);

      const wStream = createWriteStream(targetFile);
      wStream.setDefaultEncoding('utf-8');

      files.forEach(async file => {
        console.log(file);
        const buffFile = Buffer.from(file);

        if (buffFile.includes('.txt')) {
          const stream = createReadStream(`${sourceDir}/${file}`);
          wStream.write(`[${file}]\n`);

          new Promise((resolve, reject) => {
            resolve(stream);
          }).then(async (data) => {
            for await (const chunk of data) {
              wStream.write(`${chunk}`);
            }
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

readFileDir(sourceDir, targetFile);
