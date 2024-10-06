import { createWriteStream } from 'fs';
import { pipeline } from 'stream';

const write = async () => {
  const filePath = 'streams/files/fileToWrite.txt';
  const writeStream = createWriteStream(filePath, { flags: 'a' });

  pipeline(process.stdin, writeStream, (err) => {
    if (err) console.error('File reading failed:', err);
  });
};

await write();