const { createServer } = require('node:http'); 
const hostname = '127.0.0.1'; 
const port = 3001; 
 

const server = createServer((req, res)=> {


    //const for date
    const now = new Date();
    console.log(req.headers);   
    res.statusCode = 200; 
    res.setHeader('Content-Type','application/json'); 
   
    //grab user's id 
    const ip= req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const payload = {

        message: "Hellow World", 
        ip: ip,
        printedAt: now.toISOString()
    }; 

    res.end(JSON.stringify(payload)); 
    

}); 

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
   

});