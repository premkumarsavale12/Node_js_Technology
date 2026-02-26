


import express from 'express';

import { MongoClient } from 'mongodb';

const app = express();

app.set("view engine" , "ejs");
 
const dbName = "College";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

app.get("/", async (req, res) => {

    await client.connect();

    const db = client.db(dbName);

    const collection = db.collection("Student");

    const result = await collection.find().toArray();

    // console.log(result);


    res.render("data", { Student: result });

});
 
 app.listen(4200);
  




