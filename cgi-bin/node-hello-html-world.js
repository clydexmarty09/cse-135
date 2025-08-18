
/*
const now = new Date().toISOString(); 

//REQUIRED HEADERS 
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html"); 
console.log("");  

const ip = process.env.REMOTE_ADDR || "unknown"; 

console.log("<html><body>");
console.log("<h1>Hello World from Node CGI!</h1>");
console.log(`<p>Your IP is: ${ip}</p>`);
console.log(`<p>Current time: ${now}</p>`);
console.log("</body></html>");
*/ 

const http = require('node:http');

http.createServer((req, res) => {
  const now = new Date().toISOString();
  const ip = req.socket.remoteAddress;

  res.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'});
  res.end(`
    <html><body>
      <h1>Hello World from Node Server!</h1>
      <p>Your IP is: ${ip}</p>
      <p>Current time: ${now}</p>
    </body></html>
  `);
}).listen(3000, '127.0.0.1');