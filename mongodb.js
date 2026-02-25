
import express from 'express';

const app = express();

import { MongoClient } from 'mongodb';

const dbName = "company";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

 async function dbCollection() {

   await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("employess");
    const result = await collection.find().toArray();
    console.log(result);

}

dbCollection();

app.listen(2300);

