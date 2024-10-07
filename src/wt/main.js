import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const coresNum = os.cpus().length;
  const results = [];
    
  const createWorker = (index) => {
    return new Promise((resolve) => {
      const worker = new Worker('./src/wt/worker.js');

      worker.postMessage(10 + index);

      worker.on('message', (result) => {
        resolve({ status: 'resolved', data: result });
      });
      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
    });
  };

  for (let i = 0; i < coresNum; i++) {
    results.push(createWorker(i));
  }

  const finalResults = await Promise.all(results);  
  console.log(finalResults);
}

await performCalculations();
