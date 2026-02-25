
import express from 'express';
import { handleUser } from './controller/usercontroller.js';

const app = express();

app.set("view engine", "ejs");


app.get("/users", handleUser);


app.listen(3200);

