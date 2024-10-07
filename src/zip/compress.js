import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
  const srcFilePath = 'zip/files/fileToCompress.txt';
  const zipFilePath = 'zip/files/archive.gz';
  const readStream = createReadStream(srcFilePath);
  const writeStream = createWriteStream(zipFilePath);
  const gzip = createGzip();

  pipeline(
    readStream,
    gzip,
    writeStream,
    (err) => {
      if (err) {
        console.error('Error compressing file:', err);
      } else {
        console.log('File compressed successfully!');
      }
    }
  );
};

await compress();