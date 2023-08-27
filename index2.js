import fs from 'node:fs/promises';

const checkFileStats = async path => {
  try {
    const stats = await fs.stat(path);

    console.log(stats);
  } catch (error) {
    console.error(error.message);
  }
};

checkFileStats('./files');
