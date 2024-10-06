import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const filePath = './src/hash/files/fileToCalculateHashFor.txt';
  const hash = createHash('sha256');
  const readStream = createReadStream(filePath);

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const hexHash = hash.digest('hex');
    console.log(hexHash);
  });
};

await calculateHash();