import { exec, execFile, spawn, fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// exec:
// This approach can freez your Application as it compute on main thread
// exec('ls -lh', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`error: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }

//   console.log(`stdout:\n${stdout}`);
// });

// execFile:
// This used when you want to run external script
// const fileProcessorPath = path.resolve(__dirname, 'execFileProcessor.js');
// execFile('node', [fileProcessorPath], (error, stdout, stderr) => {
//     if (error) {
//       console.error(`error: ${error.message}`);
//       return;
//     }

//     if (stderr) {
//       console.error(`stderr: ${stderr}`);
//       return;
//     }

//     console.log(`stdout:\n${stdout}`);
// });

// spawn:
// This is event-driven meaning asynchronus and send data in chunks. This is realy good webapi for big data like file upload.
// const spawnedChild = spawn('find', ['.']);
// spawnedChild.stdout.on('data', (data) => {
//   console.log(`stdout:\n${data}`);
// });

// spawnedChild.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// spawnedChild.on('error', (error) => {
//   console.error(`error: ${error.message}`);
// });

// spawnedChild.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// fork:
// This is also event-driven.
const forkProcessorPath = path.resolve(__dirname, "forkProcessor.js");
const forkedChild = fork(forkProcessorPath);
forkedChild.on("message", (msg) => {
  console.log("Message from data processor exchange", msg);
});

forkedChild.send({ hello: "world" });
