import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
app.set("view engine", "ejs");

const dbName = "College";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


client.connect().then(() => {

    app.get("/api", async (req, res) => {

        const db = client.db(dbName);
        const collection = db.collection("Student");

        const data = await collection.find().toArray();

        res.send(data);

    });
    app.get("/ui", async (req, res) => {

        const db = client.db(dbName);
        const collection = db.collection("Student");

        const data = await collection.find().toArray();

        res.render('data', { data });

    });

    app.get("/add", (req, res) => {

        res.send(`
                     
        <form method="post" action="add-student"> 
         
         <input type="text"  placeholder="Enter FirstName"  name="FirstName"  />
          <br/>
          <br/>

         <input type="text"  placeholder="Enter LastName"  name="LastName"  />
          <br/>
          <br/>

          <input type="text"  placeholder="Enter City"  name="City"  />
           <br/>
           <br/>

          <input type="text"  placeholder="Enter age"  name="age"  />
            <br/>
            <br/>

 
            <input type="text"  placeholder="Enter role"  name="role"  />
               <br/>
               <br/>

              <button>  Add Button  </button> 

        </form>
             
            `)

    });

    app.post("/add-student", async (req, res) => {
        //console.log(req.body);
        const db = client.db(dbName);
        const collection = db.collection("Student");
        const data = await collection.insertOne(req.body);

        console.log(data);

        // const data = await collection.find().toArray();
        res.send("DATA SAVED .....");

    });

    app.post("/add-student-api", async (req, res) => {

        // console.log(req.body);

        const { name, age, email } = req.body;

        if (!name || !age || !email) {
            res.send({ message: "Operation Failed", success: false })
            return false
        }
        const db = client.db(dbName);
        const collection = db.collection("Student");
        const data = await collection.insertOne(req.body);

        console.log(data);

        res.send({ message: "data stored ", success: true, data: data });

    })

    app.delete("/delete/:id", async (req, res) => {

        console.log(req.params.id);
        const db = client.db(dbName);
        const collection = db.collection("Student");
        const data = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

        console.log(data);

        if (data) {
            res.send({
                message: "Student data Deleted ",
                success: true
            })
        }

        else {
            res.send({
                message: "Student data not  Deleted try after some time .... ",
                success: false
            })
        }


    });


    app.get("/ui/delete/:id", async (req, res) => {

        console.log(req.params.id);
        const db = client.db(dbName);
        const collection = db.collection("Student");
        const data = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

        console.log(data);

        if (data) {
            res.send("<h1> Student record  deleted  </h1>")
        }

        else {
            res.send("<h1> Student record not  deleted  </h1>")
        }


    })

});

app.listen(4200);