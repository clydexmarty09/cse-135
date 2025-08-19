#!/usr/bin/node
/* 
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html");
console.log(""); 


console.log("<html><body>"); 
console.log("<h1 align=center>GET Request Echo</h1>\n")
console.log("<hr />\n")

const qs = process.env.QUERY_STRING || "";  // read the query string 

console.log("<p> Raw Query String: " + qs + " </p>"); 

console.log("</body></html>"); */ 

const http =  require('node:http');  
http.createServer((req, res) => {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const rawQS = url.search ? url.search.slice(1) : ""; 
  
    res.writeHead(200, { 'Content-Type': 'text/html', 'Cache-Control': 'no-cache' });
    res.end(`
  <html>
    <body>
      <h1 align="center">GET Echo</h1>
      <hr>
      <pre>Raw Query String: ${rawQS}</pre>
    </body>
  </html>
    `);
  }).listen(3003, '127.0.0.1');