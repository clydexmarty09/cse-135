const { createServer } = require('node:http'); 
const hostname = '127.0.0.1'; 
const port = 3000; 
 

const server = createServer((req, res)=> {


    //const for date
    const now = new Date();
    console.log(req.headers);   
    res.statusCode = 200; 
    res.setHeader('Content-Type','text/plain'); 
   
   
    res.write('Hello World\n');  
    res.end('printed at ' + now.toISOString()); 

    

}); 

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
   

}); 