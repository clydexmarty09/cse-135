#!/usr/bin/node
/*
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html");
console.log(""); 

console.log("<html><body><h1 align=center> POST Request Echo</h1>")
console.log("<hr />\n")

const length = Number(process.env.CONTENT_LENGTH || 0); 
if(length === 0) {
    console.log("<p> NO POST DATA FOUND </p>")
    console.log("</body></html>")
} else {
    let data = ""; 
    process.stdin.on('data', chunk=> { data += chunk;}); 
    process.stdin.on('end', ()=> {

        console.log("<p> POST body " + data + " </p>")

        //split into [k, v] pairs
        const params = new URLSearchParams(data); 
        for (const[k, v] of params) {
            console.log(`${k} = ${v}<br>`); 
        }

        console.log("</body></html>")
    }); 
} */ 

http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      res.writeHead(200, {
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/html'
      });
      res.end(
  `<html><head><title>POST Message Body</title></head>
  <body><h1 align="center">POST Message Body</h1>
  <hr/>
  Message Body: ${body || ''}<br/>
  </body></html>`
      );
    });
  }).listen(3004, '127.0.0.1');

