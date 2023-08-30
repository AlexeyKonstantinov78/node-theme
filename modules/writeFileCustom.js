import fs from 'node:fs/promises';

export const write = async (pathFile, data) => {
  try {
    const rezult = await fs.writeFile(pathFile, data);
    return true;
  } catch (err) {
    console.error(err.message);
  }
};

