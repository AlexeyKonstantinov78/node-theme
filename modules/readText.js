import fs from 'node:fs/promises';

export const readText = async (pathFile) => {
  try {
    const rezult = await fs.readFile(pathFile, 'utf8');
    return rezult;
  } catch (err) {
    console.error(err.message);
  }
};

