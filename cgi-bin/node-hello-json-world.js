#!/usr/bin/node
/* 
const now = new Date().toISOString(); 

console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/json"); 
console.log(""); 


const ip = process.env.REMOTE_ADDR || "unknown"; 

const payload ={
    message : "Hello World", ip : ip,  time:now
}; 
console.log(JSON.stringify(payload)); */ 

const http = require('node:http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'});
  const now = new Date().toISOString();
  const ip = req.socket.remoteAddress;
  const payload= {
    message: "Hello World!", ip: ip, time:now 
  }; 

 

  res.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'});

  res.end( JSON.stringify(payload)); 
    
}).listen(3001, '127.0.0.1');