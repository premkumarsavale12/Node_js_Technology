
import express from 'express';

const app = express();

app.get("", (req, res) => {

    res.send(`
         
        <form action="/submit"  method="post" />   
        
           <input type="text" placeholder="Enter Name"  name="name" />
          
            <br/>
            <br/>

           <input type="email" placeholder="Enter email"  name="email" />

           <br/>
           <br/>

         <input type="age" placeholder="Enter age"  name="age" />
            
           <br/>
           <br/>

         <button>  Submit   </button>

        </form>

         `)



})


app.post("/submit", (req, res) => {

    if (req.url == "/submit") {
        res.send("<h1> Data Submitted SuccessFully......</h1>")
    }

})


app.listen(2300);
