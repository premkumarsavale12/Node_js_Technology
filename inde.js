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

})

app.listen(3200);