import { access, readFile } from 'fs/promises';
import { constants } from 'fs';

const read = async () => {
  const filePath = './src/fs/files/fileToRead.txt';

  try {
    await access(filePath, constants.f_OK);
    const data = await readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. File does not exist');
    } else {
      throw err;
    }
  }
};

await read();