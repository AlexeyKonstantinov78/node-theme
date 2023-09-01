import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { readdir, mkdir, stat } from 'node:fs/promises';

const sourceDir = './files';
const targetFile = './write.txt';

const copyFiles = async (path, nameFile) => {
  try {
    await pipeline(
      createReadStream(path),

      // либо еще операции

      createWriteStream(nameFile),
    );

    console.log('ready');
  } catch (error) {
    console.error(error);
  }
};

//copyFiles('./filesdir', './write.txt');

const copyAllDir = async (sourceDir, targetDir, targetFile) => {
  try {
    if ((await stat(sourceDir)).isDirectory()) {
      const files = await readdir(sourceDir);
      mkdir(targetDir, { recursive: true });
      console.log(`dir ${sourceDir}`);
      files.forEach(async file => {
        await copyAllDir(`${sourceDir}/${file}`, `${targetDir}/${file}`);
      });
    } else if ((await stat(sourceDir)).isFile()) {
      await copyFiles(sourceDir, targetFile);
      console.log('file', sourceDir);
    }
  } catch (error) {
    console.log(error);
  }
};

copyAllDir(sourceDir, './newFolders', targetFile);
