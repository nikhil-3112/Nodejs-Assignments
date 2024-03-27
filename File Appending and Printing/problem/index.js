import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const requestBody = JSON.parse(body);
        console.log(requestBody);

        // Write to file
        fs.appendFileSync("data.txt", JSON.stringify(requestBody));

        // Read file and log contents
        console.log(fs.readFileSync("data.txt", "utf-8"));
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  }

  res.end("data received");
});

server.listen(3100);
console.log("Server is running on Port 3100.");

export default server;