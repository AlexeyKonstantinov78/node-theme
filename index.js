import { read } from './modules/read.js';
import { write } from './modules/writeFileCustom.js';

const app = async () => {
  try {
    // const data = await read('./files/text.txt');
    // работа с буфером буфер это абтрактное хранилище данных 16 ричном виде данных
    //console.log('data: ', data); // toString('utf8') лучше указывать кодировку

    // создаем буфер не безопасный
    // const bufferUnsafe = Buffer.allocUnsafe(1024); // работает быстрее но не безопасно
    // console.log('bufferUnsafe: ', bufferUnsafe);

    // // безопасный буфер
    // const bufferSafe = Buffer.alloc(1024, 'изучаем node');
    // console.log('bufferSafe: ', bufferSafe);

    const buffer = Buffer.allocUnsafe(5);
    buffer.write('!!!'); // запись в буфер
    console.log('buffer: ', buffer);
    await write('./files/rezulBuff2.txt', buffer); // заполнит весь файл полностью этм текстом

    const buffer1 = Buffer.alloc(5, '!'); // запись всех мест восклицательными знаками 16 вид
    console.log('buffer1: ', buffer1);
    await write('./files/rezulBuff1.txt', buffer1); // заполнит весь файл полностью этм текстом

    // создание буфера
    const bufferArr1 = Buffer.from('изучаем буфер'); // создает буфер но приеэтом выделено памяти столько сколько текст
    console.log('bufferArr1: ', bufferArr1.toString('utf-8'));

    const bufferArr2 = Buffer.from([10, 15, 20, 35]); // массивы 10 ричной разряд
    console.log('bufferArr2: ', bufferArr2);
    const bufferArr3 = Buffer.from([11, 12, 30, 55]);
    console.log('bufferArr3: ', bufferArr3);

    const bufferArr4 = Buffer.concat([bufferArr2, bufferArr3]); // обединение масивов в буфире
    console.log('bufferArr4: ', bufferArr4);
    console.log('bufferArr4: ', bufferArr4.toString('utf-8'));
    console.log(Array.from(bufferArr4)); // массив из буфера.

    // сравнение буферов

    const bufferStr1 = Buffer.from('изучаем node');
    const bufferStr2 = Buffer.from('изучаем node.');

    console.log(bufferStr1.equals(bufferStr2)); // сравнение двух буферов. вывод boolean

    console.log(bufferStr1.toString('utf-8', 15, 19)); // взять определенный байт
    console.log(bufferStr1.indexOf('node')); // посмотреть где находится строка в буфере
    console.log(bufferStr1.toString('utf-8', bufferStr1.indexOf('node'))); // выводим все с node и до конца

    console.log(bufferStr1.includes('nod')); // проверка содержится или не содержится

    console.log(bufferStr1.subarray(15));
    console.log(bufferStr1.subarray(15).toString('utf-8')); // вывод с обпределенного байта
    console.log(bufferStr1.toJSON()); // получение буфера в json

    console.log(Buffer.isBuffer(bufferStr1)); // проверка является ли буфером

    console.log('Запиь в файл записан');
  } catch (error) {
    console.error(error.message);
  }
};

app();
