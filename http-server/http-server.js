const http = require("http");
const { handler, someOtherData } = require("./routes");

console.log(someOtherData);

// While using express, we can pass "app" directly to the createServer ( app = express() )
const server = http.createServer(handler);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
