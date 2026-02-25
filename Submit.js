const http = require('http');
const fs = require("fs");

http.createServer((req, res) => {

    fs.readFile("form.html", "utf-8", (err, data) => {

        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("Internal Server Error....");
            res.end();
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        // res.write(data);
        // res.end();

        if (req.url == "/") {

            res.write(data);

        }
        else if (req.url == "/submit") {
            res.write("<h1> Data Submitted </h1> ")
        }
    });

}).listen(2300);