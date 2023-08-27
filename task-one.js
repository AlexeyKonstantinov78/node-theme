import { readdir, mkdir, copyFile, stat } from 'node:fs/promises';

const sourceDir = './files';
const targetDir = './newFolder';

const callback = (err) => {
  if (err !== null) {
    console.log(err);
  } else {
    console.log('Завершено');
  }
};

const copyAllDir = async (sourceDir, targetDir, callback = () => {}) => {
  try {
    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);
      mkdir(targetDir, { recursive: true });
      files.forEach(async file => {
        await copyAllDir(`${sourceDir}/${file}`, `${targetDir}/${file}`, callback(null));
      });
    } else if ((await stat(sourceDir)).isFile()) {
      await copyFile(sourceDir, targetDir);
    }
    if (callback !== null) callback(null);
  } catch (error) {
    callback(error.message);
  }
};

copyAllDir(sourceDir, targetDir, callback);
