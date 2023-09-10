import readline from 'node:readline/promises';
import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

fileDir.forEach(file => {
  const filePath = path.join(data.findDir, file);
  if (path.extname(filePath) === '.txt') {

  }
});

process.exit();
