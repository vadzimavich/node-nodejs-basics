import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const zipFilePath = 'zip/files/archive.gz';
  const unzipFilePath = 'zip/files/fileToCompress.txt';
  const readStream = createReadStream(zipFilePath);
  const writeStream = createWriteStream(unzipFilePath);
  const gunzip = createGunzip();

  pipeline(
    readStream,
    gunzip,
    writeStream,
    (err) => {
      if (err) {
        console.error('Error deompressing file:', err);
      } else {
        console.log('File decompressed successfully!');
      }
    }
  );
};

await decompress();