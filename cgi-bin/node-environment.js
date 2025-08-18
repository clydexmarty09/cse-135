const { createServer } = require('node:http'); 
const hostname = '127.0.0.1'; 
const port = 3002;

const server = createServer((req, res)=> {

  res.setHeader('Content-Type', 'text/plain'); 

  const method = req.method;  // GET 
  const app = req.app; 
  const url = req.url;  
   
  res.write('ENVIRONMENT VARIABLES\n\n'); 
  res.write(`REQUEST_METHOD=${method}\n`); 
  res.write(`${app}\n`); 
  res.write(`URL=${url}\n`); 
  res.end();   

}); 


server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
   

});