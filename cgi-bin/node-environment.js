#!/usr/bin/node
/*
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html");
console.log(""); 

console.log("<html><head><title>Environment Variables</title></head>");
console.log("<body><h1 align=center>Environment Variables</h1><hr/>");

for (const [key, value] of Object.entries(process.env)) {
  console.log(`${key}=${value}</br>`); 
}

console.log("</body></html>")*/
const http =  require('node:http');  
http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'});
  //const now = new Date().toISOString();
  //const ip = req.socket.remoteAddress;
 res.write(`
 
  <html><body><h1 align=center> ENVIRONMENT VARIABLES </h1><hr><pre> 
 
 `);

 for (const [key, value] of Object.entries(process.env)) {
  res.write(`${key} = ${value}\n`);
}

res.write(`</pre></body></html>`); 
res.end(); 
 
    
}).listen(3002,  '127.0.0.1');