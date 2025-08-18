#!/usr/bin/node
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html");
console.log(""); 

console.log("<html><head><title>Environment Variables</title></head>");
console.log("<body><h1 align=center>Environment Variables</h1><hr/>");

for (const [key, value] of Object.entries(process.env)) {
  console.log(`${key}=${value}</br>`); 
}

console.log("</body></html>")