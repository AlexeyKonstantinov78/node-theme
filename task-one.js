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

const copyAllDir = async (sourceDir, targetDir, callbac) => {
  try {
    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);
      mkdir(targetDir, { recursive: true });
      console.log(`dir ${sourceDir}`);
      files.forEach(async file => {
        await copyAllDir(`${sourceDir}/${file}`, `${targetDir}/${file}`);
      });
    } else if ((await stat(sourceDir)).isFile()) {
      await copyFile(sourceDir, targetDir);
      console.log('филе', sourceDir);
    }
  } catch (error) {
    callbac(error);
  }
};

copyAllDir(sourceDir, targetDir, callback);
