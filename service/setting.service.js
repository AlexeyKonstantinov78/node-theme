import { writeFile, readFile } from 'node:fs/promises';
import process from 'node:process';
import os from 'node:os';
import path from 'node:path';

const filePath = path.join(os.homedir(), 'settings.genpass.json');

export const saveSetting = async option => {
  await writeFile(filePath, JSON.stringify(option), 'utf-8');
  process.stdout.write(`
  Настройки сохранены\n
  `);
};

export const getSetting = async () => {
  try {
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    process.stdout.write(`
    Отсутсвует или не доступен файл настроек
    Для сохранения настроек используйте команду setting.\n
    `);
  }
};
