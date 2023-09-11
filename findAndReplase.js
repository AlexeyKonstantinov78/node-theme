import readline from 'node:readline/promises';
import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const read = patch => {
  try {
    const data = fs.readFileSync(patch, 'utf8');
    return data;
    // return data.split('\n').filter(n => n);
  } catch (error) {
    console.log(error);
  }
};

const write = (data, patch) => {
  if (!fs.existsSync(path.dirname(patch))) {
    fs.mkdirSync(path.dirname(patch));
  }
  fs.writeFileSync(patch, data);
};

const quest = async () => {
  const findDir = await rl.question('Введите путь к директории: ');
  const search = await rl.question('Введите строка поиска: ');
  const replace = await rl.question('Введите строка замены: ');
  return { findDir, search, replace };
}

const data = await quest();

if (!fs.existsSync(data.findDir)) {
  console.log(`Нет такой директории: ${data.findDir}`);
  process.exit();
}

const fileDir = fs.readdirSync(data.findDir);

const replaseData = (data, search, replase) => {
  let newdata = data;
  do {
    newdata = newdata.replace(search, replase);
  } while (newdata.indexOf(search) !== -1);

  return newdata;
};

fileDir.forEach(file => {
  const filePath = path.join(data.findDir, file);
  if (path.extname(filePath) === '.txt') {
    const dataFile = read(filePath);
    const newData = replaseData(dataFile, data.search, data.replace);
    write(newData, filePath);
  }
});

process.exit();
