import { createWriteStream, createReadStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const outputFilePath = 'lorem-decomp.txt';
const inputFilePath = 'lorem.gz';

const input = createReadStream(inputFilePath);
const output = createWriteStream(outputFilePath);

//распаковка в архив
input.pipe(createGunzip()).pipe(output);

console.log('Данные успешно распакованны');

