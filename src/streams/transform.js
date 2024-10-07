import { Transform, pipeline } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
    }
  });

  pipeline(process.stdin, reverseStream, process.stdout, (err) => {
    console.error(err);
  });
}

await transform();