import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

const dbName = "company";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("employees"); // corrected name
        
        const result = await collection.find().toArray();
        
        console.log(result);

        res.render("student", { employees: result });

    } catch (error) {
        console.log(error);
        res.send("Error fetching data");
    }
});

app.listen(2300, () => {
    console.log("Server running on port 2300");
});