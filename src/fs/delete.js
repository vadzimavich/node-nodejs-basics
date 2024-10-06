import { access, rm } from 'fs/promises';
import { constants } from 'fs';

const remove = async () => {
  const filePath = 'fs/files/fileToRemove.txt';

  try {
    await access(filePath, constants.F_OK);
    await rm(filePath);
    console.log('File removed successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. File does not exist');
    } else {
      throw err;
    }
  }
};

await remove();