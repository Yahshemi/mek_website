// Dependencies
const http = require('http');

const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
})

server.listen(3000, hostname, () =>{
    console.log(`Server is listening on http://${hostname}:${PORT}`)
})




