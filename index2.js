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
