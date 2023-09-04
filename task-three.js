import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';


const inputPath = './image';
const outputPath = './imagenew';

const resizeImage = async (inputPath, outputPath) =>
  await pipeline(
    createReadStream(inputPath),
    sharp().resize(400, 400).jpeg(),
    createWriteStream(outputPath),
  );

const blurImage = async (inputPath, outputPath, value = 0) =>
  await pipeline(
    createReadStream(inputPath),
    sharp().blur(value).jpeg(),
    createWriteStream(outputPath),
  );

const greyscaleImage = async (inputPath, outputPath) =>
  await pipeline(
    createReadStream(inputPath),
    sharp().greyscale().jpeg(),
    createWriteStream(outputPath),
  );

const Image = async (inputPath, outputPath) => {

  try {
    if ((await stat(inputPath)).isDirectory()) {
      const files = await readdir(inputPath);

      files.forEach(async file => {
        console.log(file);
        resizeImage(
          `${inputPath}/${file}`,
          `${outputPath}/${file + Date.now()}.jpeg`,
        );

        blurImage(
          `${inputPath}/${file}`,
          `${outputPath}/${file + Date.now()}.jpeg`,
          5
        );
        greyscaleImage(
          `${inputPath}/${file}`,
          `${outputPath}/${file + Date.now()}.jpeg`,
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
};

Image(inputPath, outputPath);
