import { readdir, mkdir, copyFile, stat } from 'node:fs/promises';

const sourceDir = './files';
const targetDir = './newFolder';

const callback = (err) => {
  if (err !== null) console.log(err);
};

const copyAllDir = async (sourceDir, targetDir, callback) => {
  try {
    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);
      mkdir(targetDir, { recursive: true });
      files.forEach(async file => {
        await copyAllDir(`${sourceDir}/${file}`, `${targetDir}/${file}`);
      });
    } else if ((await stat(sourceDir)).isFile()) {
      await copyFile(sourceDir, targetDir);
    }
  } catch (error) {
    callback(error.message);
  }
};

copyAllDir(sourceDir, targetDir, callback);
