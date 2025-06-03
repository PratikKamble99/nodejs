const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req);
  const log =
    `Headers: ${JSON.stringify(req.headers)}\n` +
    `Method: ${req.method}\n` +
    `URL: ${req.url}\n` +
    `Timestamp: ${new Date().toISOString()}
    \n
    ----------------------------------
    \n`;

  fs.appendFile("requestlogs.txt", log, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    }
    return res.end("Log written to server.txt");
  });

  // ROUTE HANDLING

  // if (req.url == "/") {
  // res.setHeader("Content-type", "text/html");

  // res.write("<html>");
  // res.write("<body>");
  // res.write(
  //   "<form action='/message' method='POST'><input name='message'/><button type='submit'>Submit</button></form>"
  // );
  // res.write("<p>This is a test</p>");
  // res.write("</body>");
  // res.write("</html>");
  // return res.end();
  // }
  // if (req.url == "/message") {
  //   const body = [];
  //   req.on("data", (chunk) => {
  //     body.push(chunk);
  //   });

  //   req.on("end", () => {
  //     const parsedBody = Buffer.concat(body).toString();
  //     const message = parsedBody.split("=")[1];
  //     // fs.writeFileSync("message.txt", message); // Code line runs synchronously, So after this line code will not execute till this code executed completely
  //     fs.writeFile("message.txt", message, (err) => {
  //       // this runs async
  //       res.statusCode = 302;
  //       res.setHeader("Location", "/");
  //       return res.end();
  //     });
  //   });
  // }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Server running</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end(); // You cant change res once response id sent.
};

// Ways to export module
// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someOtherData: "Other Data"
// };
// module.exports.handler = requestHandler;
exports.handler = requestHandler;
exports.someOtherData = "Other data";
