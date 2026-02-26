import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
// app.set("view engine", "ejs");

const dbName = "College";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client.connect().then(() => {

    app.get("/api", async (req, res) => {

        const db = client.db(dbName);
        const collection = db.collection("Student");

        const data = await collection.find().toArray();

        res.send(data);


        res.status(500).send("Database Error");

    });

});

app.listen(4200);