#!/usr/bin/env node
const now = new Date().toISOString; 
const ip = process.env.REMOTE_ADDR || "unknown"; 
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/json"); 

const payload ={
    message : "Hello World", ip : ip,  time:now
}; 
console.log(JSON.stringify(payload)); 