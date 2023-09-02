import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const inputPath = './image';
const outputPath = './imagenew';

const blurGreyscaleImage = async (inputPath, outputPath) => {

  try {
    if ((await stat(inputPath)).isDirectory()) {
      const files = await readdir(inputPath);

      files.forEach(async file => {
        const rStream = createReadStream(`${inputPath}/${file}`);
        const wStream = createWriteStream(`${outputPath}/${file + Date.now()}.jpeg`);
        const roundedCornerResizer = await sharp().blur(5).greyscale().jpeg();
        console.log(file);

        rStream.pipe(roundedCornerResizer).pipe(wStream);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const resizeImage = async (inputPath, outputPath) => {

  try {
    if ((await stat(inputPath)).isDirectory()) {
      const files = await readdir(inputPath);

      files.forEach(async file => {
        const rStream = createReadStream(`${inputPath}/${file}`);
        const wStream = createWriteStream(`${outputPath}/${file}.jpeg`);
        const roundedCornerResizer = sharp().resize(400, 400).jpeg();
        console.log(file);

        rStream.pipe(roundedCornerResizer).pipe(wStream);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

resizeImage(inputPath, outputPath);
blurGreyscaleImage(inputPath, outputPath);
