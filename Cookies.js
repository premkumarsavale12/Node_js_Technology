import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());

app.get("/login", (req, res) => {


    res.render("login");

});

app.post("/profile", (req, res) => {

    res.cookie("login", true);

    res.cookie("name", req.body.name);

    res.render("profile");
});

app.get("/", (req, res) => {

    console.log(req.cookies.name);


    res.render("hom", { name: req.cookies.name });

});

app.listen(3200);