
const http = require('http');

http.createServer((req, res) => {


    res.write("<h1> This is Node js Technology.......</h1>")
    res.end();


}).listen(3200);
