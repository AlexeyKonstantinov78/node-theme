import fs from 'node:fs';
//эти методы являются синхоронными
//чтение файла
const result = fs.readFileSync('./files/text.txt', 'utf8');
// кодировка нужна толшько при работе в коде при записи кодировка не нужна
console.log('result: ', result);

// запись в файл
fs.writeFileSync('./files/result.txt', result);

// асинхронные методы
fs.readFile('./files/text.txt', 'utf-8', (err, result) => {
  if (err) throw err;

  console.log(result);
  fs.writeFile('./files/result1.txt', result, err => {
    if (err) throw err;

    console.log('Файл был записан');
  });
});

//переименовывать или перемещать
fs.rename('./files/text.txt', './files/result3.txt', err => {
  if (err) throw err;
  console.log('Файл переименован');
});

// прочитать каталог
fs.readdir('./files', (err, files) => {
  if (err) throw err;
  console.log(files);
});

console.log('App start');
