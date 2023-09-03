import { createReadStream, createWriteStream } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';

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
    const wStream = createWriteStream(targetFile);
    wStream.setDefaultEncoding('utf-8');

    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);

      files.forEach(async file => {
        console.log(file);
        const buffFile = Buffer.from(file);

        if (buffFile.includes('.txt')) {
          const stream = createReadStream(`${sourceDir}/${file}`, 'utf-8');
          wStream.write(`[${file}]\n`);
          // if (!stream.isPaused) {
          //   console.log('pausa');
          //   wStream.cork();
          // }
          // //stream.pipe(wStream);
          // stream.pause();
          readStream(stream, wStream);
          // for await (const chunk of stream) {
          //   wStream.write(`${chunk}`);
          // }

          //stream.on('data', chunk => wStream.write(chunk.toString()));
          // stream.pipe(wStream);
          // for await (const chunk of stream) {
          //   // wStream.write(Buffer.from(`[${file}]\n`));
          //   wStream.write(`[${file}]\n`);
          //   wStream.write(`${chunk}`);
          // }
          // wStream.cork();

          // stream.pause();

          // stream.on('readable', () => {
          //   const buffer = stream.read();
          //   if (buffer) {
          //     wStream.write(buffer);
          //   }
          //   wStream.uncork();
          // });

          // stream.on('end', () => {
          //   console.log('END');
          //   stream.resume();
          // });
          // stream.on('data', chunk => {
          //   wStream.write(`[${file}]\n`);
          //   wStream.write(chunk);
          // });
        }
      });
    }
    wStream.on('finish', () => {
      console.log('finish');
    });
  } catch (error) {
    console.log(error);
  }
};

readFileDir(sourceDir, targetFile);
