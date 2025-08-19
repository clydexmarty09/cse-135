#!/usr/bin/node
/*
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html");
console.log(""); 


console.log("<html><body><h1 align=center> GENERAL Echo</h1>")
console.log("<hr />\n")

const protocol = process.env.SERVER_PROTOCOL || ""; 
const method = process.env.REQUEST_METHOD || ""; 
const qs = process.env.QUERY_STRING || "";
const ctype    = process.env.CONTENT_TYPE   || "";
const clen     = Number(process.env.CONTENT_LENGTH || 0);

console.log("<p><b>HTTP Protocol:</b> " + protocol + "</p>");
console.log("<p><b>HTTP Method:</b> " + method + "</p>");
console.log("<p><b>Query String:</b> " + qs + "</p>");
console.log("<p><b>Content-Type:</b> " + ctype + "</p>");
console.log("<p><b>Content-Length:</b> " + clen + "</p>");

if(clen === 0) {
    console.log("<p> NO MESSAGE DATA FOUND </p>");
    console.log("</body></html>");
}
 else {

    let data = ""; 
    process.stdin.on('data', chunk=> { data += chunk;}); 
    process.stdin.on('end', ()=> {

        console.log("<p> Message body " + data + " </p>");
        console.log("</body></html>"); 
         
    }); 
   
} */ 
const http = require('node:http'); 
http.createServer((req, res) => {
   
    let body = ''; 
    req.on('data', chunk=> body += chunk); 
    req.on('end', ()=>{
        res.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'}); 

        res.end(
            `<html><body><h1 align=center> General Request Echo </h1><hr>
             <p> Protocol: HTTP/ ${req.httpVersion}</p>
             <p> Method: ${req.method}</p>
             <p> Message Body: ${body || ''} </p></bodyy></html> `

        ); 
    
    }); 
  }).listen(3005, '127.0.0.1');




