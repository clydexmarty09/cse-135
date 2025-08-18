#!/usr/bin/node
const now = new Date().toISOString; 
const ip = process.env.REMOTE_ADDR || "unknown"; 
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html"); 

console.log("<html><body>");
console.log("<h1>Hello World from Node CGI!</h1>");
console.log(`<p>Your IP is: ${ip}</p>`);
console.log(`<p>Current time: ${now}</p>`);
console.log("</body></html>");
