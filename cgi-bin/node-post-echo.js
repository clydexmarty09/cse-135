#!/usr/bin/node
console.log("Cache-Control: no-cache"); 
console.log("Content-Type: text/html");
console.log(""); 

console.log("<html><body><h1 align=center> POST Request Echo</h1>")
console.log("<hr />\n")

const length = Number(process.env.CONTENT_LENGTH || 0); 
if(length == 0) {
    console.log("<p> NO POST DATA FOUND </p>")
} else {
    let data = ""; 
    process.stdin.on('data', data=> { data += chunk;}); 
    process.stdin.on('end', ()=> {

        console.log("<p> POST body " + data + " </p>")

        //split into [k, v] pairs
        const params = new URLSearchParams(data); 
        for (const[k, v] of params) {
            console.log(`${key} = ${value}<br>`); 
        }

        console.log("</body></html>")
    }); 
}

