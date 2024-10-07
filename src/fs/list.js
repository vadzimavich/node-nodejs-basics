import { access, readdir } from 'fs/promises';
import { constants } from 'fs';

const list = async () => {
  const folderPath = 'fs/files';
  
  try {
    await access(folderPath, constants.R_OK);
    const files = await readdir(folderPath);
    console.log('Files in the folder:', files);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. Folder does not exist');
    } else {
      throw err;
    }
  }
};

await list();