const express = require("express");
const { Worker } = require("node:worker_threads");

const app = express();

const THREAD_COUNT = 4;

function createWorkers() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./four-workers.js", {
      workerData: {
        thread_count: THREAD_COUNT,
      },
    });

    worker.on("message", (data) => {
      resolve(data);
    });

    worker.on("error", (err) => {
      reject(err);
    });
  });
}

app.get("/non-blocking", (req, res) => {
  res.send("non-blocking working fine " + new Date().getMilliseconds());
});

// app.get("/blocking", (req, res) => {
//   // This create new worker thread and listen to its events
//   const worker = new Worker("./worker.js");

//   worker.on("message", (data) => {
//     res.status(200).send(`result is ${data}`);
//   });

//   worker.on("error", (err) => {
//     res.status(404).send(`An error occured ${err}`);
//   });

//   // Blocking Example
//   //   let count = 0;

//   //   for (let i = 0; i < 20_000_000_000; i++) {
//   //     count++;
//   //   }
// });

// OPTIMIZED ONE EXAMPLE
app.get("/blocking", async (req, res) => {
  const workerThreads = [];
  for (let i = 0; i < THREAD_COUNT; i++) {
    workerThreads.push(createWorkers());
  }

  const result = await Promise.all(workerThreads);
  const total = result.reduce((acc, curr) => curr + acc, 0);

  res.status(200).send(`result is ${total}`);
});

app.listen(3000, () => {
  console.log("server running on 3000");
});
