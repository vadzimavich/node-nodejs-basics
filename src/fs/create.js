import { access, writeFile } from 'fs/promises'; 
import { constants } from 'fs'; 

const create = async () => {
  const filePath = 'fs/files/fresh.txt';

  try {
    await access(filePath, constants.F_OK);
    throw new Error('FS operation failed'); 
  } catch (err) {
    if (err.code === 'ENOENT') {
        await writeFile(filePath, 'I am fresh and young');
        console.log('File created successfully');
      } else {
        throw err;
      }
    }
};

await create();