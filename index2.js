import fs from 'node:fs/promises';

const checkFileStats = async path => {
  try {
    const stats = await fs.stat(path);

    console.log(stats);

    // проверка на тип файл или каатлог
    if (stats.isFile()) {
      console.log('Файл');
    } else if (stats.isDirectory()) {
      console.log('Директория');
    } else {
      console.log('Это неизвестный тип');
    }

  } catch (error) {
    console.error(error.message);
  }
};

checkFileStats('./files/text.txt');

// дописываем в файл

const appendToFile = async (filePath, data) => {
  try {
    await fs.appendFile(filePath, data);
    console.log('Запись дописана');
  } catch (error) {
    console.error(error.message);
  }
};

appendToFile(
  './files/text.txt',
  `${new Date().toISOString()}: Допишем текст 1\n`);
