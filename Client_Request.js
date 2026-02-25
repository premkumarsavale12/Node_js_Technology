
const http = require("http");

http.createServer((req, res) => {


    // console.log(" this is Url ", req.url);

    console.log(" this is req Header host  ======> ", req.headers.host);


    res.end();

}).listen(2300);



http.createServer((req, res) => {


    if (req.url == "/") {
        res.write("<h1> This is Home Page   <h1>")
    }
    else if (req.url == "/login") {

        res.write("<h1>This is Login Page     </h1>")
    }

    else if (req.url == "/home") {

        res.write("<h1> This is Home Page  </h1>")
    }
    else {
        res.write("<h1>   Other page  </h1>")
    }
    res.end();

}).listen(3200);