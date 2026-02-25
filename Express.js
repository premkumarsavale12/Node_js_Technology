
import express from 'express';

const app = express();

app.get("/", (req, res) => {

    res.send("<h1> This is Home Page.......... </h1> ")

});

app.get("/home", (req, res) => {

    res.send("<h1> This is Home page...</h1> ")

});
 
 app.get("/about", (req, res) => {

    res.send("<h1> This is about  page...</h1> ")

});
 
app.get("/contact", (req, res) => {

    res.send("<h1> This is contact page...</h1> ")

});
 
app.listen(9000);
 