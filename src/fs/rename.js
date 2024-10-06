import { promises } from 'fs';
import { constants } from 'fs';

const rename = async () => {
  const oldFile = 'fs/files/wrongFilename.txt';
  const newFile = 'fs/files/properFilename.md';

  // src file check
  try {
  await promises.access(oldFile, constants.F_OK); 
  } catch (err) {
    if (err.code === 'ENOENT') {
    throw new Error('FS operation failed. Source file does not exist');
    } else {
      throw err;
    }
  }

  // target file check
  try {
    await promises.access(newFile, constants.F_OK);
    throw new Error('FS operation failed. Target file already exists');
  } catch (err) {
    if (err.code !== 'ENOENT') {
    throw err;
    }
  }

  // rename the file
  try {
    await promises.rename(oldFile, newFile);
    console.log('File renamed successfully');
  } catch (err) {
    throw new Error('FS operation failed.');
  }
};

await rename();