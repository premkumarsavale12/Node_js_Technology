
import express from 'express';

const app = express();

app.set("view engine", "ejs");
 

app.get("/", (req, res) => {


    res.render("home", {
        name: "Premkumar",
        sname: "Savale",
        age: 24
    })
})


app.listen(6700);