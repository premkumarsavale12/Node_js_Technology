
import { MongoClient } from "mongodb";

const url = "mongodb+srv://premsavale112:prem@cluster0.5vvteao.mongodb.net/?appName=Cluster0";
const database = "school";
const collection = "student";
const client = new MongoClient(url);

client.connect().then(() => {

    console.log("------------connected-------------");

})

async function dbConnection() {
    const db = client.db(database);
    const collectResult = db.collection(collection);
    const result = await collectResult.find().toArray();
    console.log(result);

}
dbConnection();

