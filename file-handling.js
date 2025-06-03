const fs = require("fs");
const os = require("os");

console.log(os.cpus().length); // Get CPU information

// It used to handle files in Node.js
// It can be used to read, write, append, and delete files synchronously or asynchronously

// SYNCRONUS FILE HANDLING
fs.writeFileSync("example.txt", "Hello, World!");

// sync reading return result
const result = fs.readFileSync("example.txt", "utf8");
console.log("Synchronous file content:", result);

// ASYNCHRONOUS FILE HANDLING
fs.writeFile("example2.txt", "Hello, World!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully");
  }
});

// It  does not return result, it uses callback
fs.readFile("example2.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});

// Appending to a file
fs.appendFileSync("example.txt", "\nAppended text.");
fs.appendFile("example2.txt", "\nAppended text.", (err) => {});

// Deleting a file
fs.unlinkSync("example.txt");
fs.unlink("example2.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully");
  }
});

// Checking if a file exists
fs.access("example.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.error("File does not exist");
  } else {
    console.log("File exists");
  }
});

// __dirname and __filename
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);
