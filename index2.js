// ? Stream

// ! Writable
// работает в fs, http, net, resposn у сервера, request на сторне клиента, zlib для архивации файлов,
// proccess, cripto, tsp socet

import { createReadStream, createWriteStream } from 'node:fs';

const wStream = createWriteStream('./write.txt'); // запись файл ,elbn cjplfy
const rStream = createReadStream('./files/text.txt'); // чтение файла

wStream.on('pipe', () => {
  console.log('PIPE - подключение к readeable стриму');
});

wStream.on('unpipe', () => {
  console.log('UNPIPE - отключение от readeable стриму');
});

wStream.on('finish', () => {
  console.log('FINISH - запись ЗАВЕРШИЛОСЬ');
});

// срабатывает когда буфер заполнился и освободился
wStream.on('drain', () => {
  console.log('DRAIN - освободился буфер у writable');
});

wStream.on('error', (err) => {
  console.log('ERROR - ' + err);
});

wStream.on('close', () => {
  console.log('CLOSE - стрим закрыт');
});

// wStream.write('Запись данных1\n', 'utf-8', () => {
//   console.log('Запись данных');
// });
// const buffer = Buffer.from('Буфер\n');
// wStream.write(buffer);
// wStream.write(buffer);
// wStream.write(buffer);
// wStream.write(buffer);
// wStream.write(buffer);

// wStream.end('Закрываем стрим'); // можно передавать можно не писать

// wStream.destroy('Наша ошибка'); // грубое закрытие стрима но приэтом не записываются и выводим ошибку

// wStream.cork(); // закупорить стрим

// setTimeout(() => {
//   wStream.uncork(); // раскупорить стрим
// }, 2000);

wStream.setDefaultEncoding('utf-8'); // при работе с текстом
console.log('writableCorked: ', wStream.writableCorked); // указывает количество закупорок
console.log('errored: ', wStream.errored); // сколько было ошибок
console.log('writableLength', wStream.writableLength); // байт ав байтах
console.log('writableHighWaterMark', wStream.writableHighWaterMark); // занимаемое буфером память

// ! Readable

rStream.pipe(wStream); // чтение -> запись в файл

// ! Duplex

// !Transform
