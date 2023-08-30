import fs from 'node:fs/promises';

export const read = async (pathFile) => {
  try {
    const rezult = await fs.readFile(pathFile);
    return rezult;
  } catch (err) {
    console.error(err.message);
  }
};

