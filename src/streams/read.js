import { createReadStream } from 'fs';
import { pipeline } from 'stream';

const read = async () => {
  const filePath = 'streams/files/fileToRead.txt';
  const readStream = createReadStream(filePath, { encoding: 'utf-8' });

  pipeline(readStream, process.stdout, (err) => {
    if (err) console.error('File reading failed:', err);
  });
};

await read();