import mongoose from 'mongoose';
import express from 'express';
import studentModel from './model/studentModel.js';

const app = express();

await mongoose.connect("mongodb://localhost:27017/College").then(() => {

    console.log("________Connected...........");
})

app.get("/", async (req, res) => {

    const studentData = await studentModel.find();

    console.log(studentData);

    res.send(studentData);

});

app.post("/save", async (req, resp) => {
    console.log(req.body);
    const { name, age, email } = req.body;
    if (!req.body || !name || !age || !email) {
        resp.send({
            message: "data not stored",
            success: false,
            storedInfo: null
        })
        return false
    }
    const studentData = await studentModel.create(req.body)

    resp.send({
        message: "data stored",
        success: true,
        storedInfo: studentData
    })

})

app.listen(3200);