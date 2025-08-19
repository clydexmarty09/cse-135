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
res.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'});
const qs = process.env.QUERY_STRING || ""; 
 
res.write(`
 
  <html><body><h1 align=center> GET Echo </h1><hr><pre> 
 
 `);

 res.write('<p> Raw Query String:' + qs + ' </p>'); 

 res.write(`</pre></body></html>`); 
 res.end(); 
    
}).listen(3003,  '127.0.0.1');