#!/usr/bin/node
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html");
console.log(""); 


console.log("<html><body>"); 
console.log("<h1 align=center>GET Request Echo</h1>\n")
console.log("<hr />\n")

const qs = process.env.QUERY_STRING || "";  // read the query string 

console.log("<p> Raw Query String: " + qs + " </p>"); 

console.log("</body></html>"); 