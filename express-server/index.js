const express = require("express");
const statusMonitor = require("express-status-monitor")();
const fs = require("fs");
const zlib = require("zlib");

const app = express();
const port = 3000;

app.use(statusMonitor);

app.get("/", (req, res) => {
  // STREAMING FILE CONTENTS
  const stream = fs.createReadStream("./50mb.txt", "utf-8");
  stream.on("data", (chunk) => {
    // console.log("Chunk received:", chunk);
    res.write(chunk);
  });
  stream.on("end", () => {
    res.end();
  });
  stream.on("error", (err) => {
    console.error("Error reading file:", err);
    res.status(500).send("Error reading file");
  });

  // WRONG WAY TO READ FILE
  // fs.readFile("./50mb.txt", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json({ data });
  //   }
  // });
});

app.get("/zip", (req, res) => {
  // STREAMING FILE CONTENTS AS ZIP
  fs.createReadStream("./50mb.txt").pipe(
    zlib
      .createGzip()
      .pipe(fs.createWriteStream("./50mbtxt.zip"))
      .on("finish", () => {
        console.log("File compressed successfully");
        res.send("File compressed successfully");
      })
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
