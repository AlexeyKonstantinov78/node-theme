import fs from 'node:fs/promises';
import { readText } from './modules/readText.js';
import { write } from './modules/writeFileCustom.js';


//эти методы являются синхоронными
//чтение файла
// const result = fs.readFileSync('./files/text.txt', 'utf8');
// // кодировка нужна толшько при работе в коде при записи кодировка не нужна
// console.log('result: ', result);

// // запись в файл
// fs.writeFileSync('./files/result.txt', result);

// // асинхронные методы
// fs.readFile('./files/text.txt', 'utf-8', (err, result) => {
//   if (err) throw err;

//   console.log(result);
//   fs.writeFile('./files/result1.txt', result, err => {
//     if (err) throw err;

//     console.log('Файл был записан');
//   });
// });

// //переименовывать или перемещать
// fs.rename('./files/text.txt', './files/result3.txt', err => {
//   if (err) throw err;
//   console.log('Файл переименован');
// });

// прочитать каталог
// fs.readdir('./files', (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });


// fs.readdir('./files', (err, files) => {
//   if (err) throw err;
//   console.log(files);

//   // создать папку
//   fs.mkdir('./newFolders', { recursive: true }, err => {
//     if (err) throw err;

//     console.log('Папка создана');

//     files.forEach(file => {
//       fs.copyFile(`./files/${file}`, `./newFolders/${file}`, err => {
//         if (err) throw err;
//         console.log(file, 'файл скопирован');
//       });
//     });
//   });
// });

// промисифицированные методы

const app = async () => {
  try {
    const text = await readText('./files/text.txt');
    console.log('text: ', text);
    await write('./newFolders/rezultWriteText.txt', text.toUpperCase());
    console.log('Запиь в файл записан');
  } catch (error) {
    console.error(error.message);
  }
};

console.log('App start');
app();
