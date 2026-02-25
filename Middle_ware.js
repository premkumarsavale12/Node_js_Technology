

import express from 'express';

const app = express();

function CheckRoute(req, res, next) {
    console.log("user is accessing ", req.url);

    next();

}

app.use(CheckRoute);


app.get("/", (req, res) => {

    res.send("<h1> Home Page   </h1>")
});


app.get("/users", (req, res) => {

    res.send("<h1> users  Page   </h1>")
});

app.get("/products", (req, res) => {

    res.send("<h1> products Page   </h1>")
});




app.listen(2300);
