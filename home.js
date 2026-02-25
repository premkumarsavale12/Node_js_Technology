
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");


app.get("", (req, res) => {


    res.render("addUser");

});

app.post("/submit-user", (req, res) => {
    console.log(req.body);
    res.render("submit", req.body)
})


app.listen(2300);
