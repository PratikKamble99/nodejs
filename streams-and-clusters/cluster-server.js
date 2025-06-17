/* 
    In Node.js, the cluster module allows you to take advantage 
    of multi-core systems by creating multiple worker processes 
    that share the same server port.
*/

/* 
    Why Use Clustering?
    Node.js runs in a single thread by default.
    On multi-core CPUs, only one core is used.
    cluster lets you fork child processes, enabling each to handle part of the load.
*/

const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers and replace them
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker processes share the TCP connection
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}\n`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
