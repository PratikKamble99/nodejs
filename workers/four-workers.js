const { parentPort, workerData } = require("node:worker_threads");

let count = 0;

for (let i = 0; i < 20_000_000_000 / workerData.thread_count; i++) {
  count++;
}

parentPort.postMessage(count);
