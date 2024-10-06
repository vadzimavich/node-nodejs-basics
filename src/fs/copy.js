import { access, cp } from 'fs/promises';
import { constants } from 'fs';

const copy = async () => {
  const srcFolder = 'fs/files';
  const destFolder = 'fs/files_copy';

  try {
    await access(srcFolder, constants.F_OK);
    await access(destFolder, constants.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await cp(srcFolder, destFolder, { recursive: true });
      console.log('Folder copied successfully');
    } else {
      throw err;
    }
  }
};

await copy();
