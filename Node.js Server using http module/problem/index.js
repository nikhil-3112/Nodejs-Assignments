const http = require("http");

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'Text/plain')
  
  res.end("I am a Ninja");
  // res.send(resMessage);
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});

module.exports = server;
