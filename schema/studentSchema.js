
import mongoose from "mongoose";

const studentSchema = mongoose.Schema({

    FirstName: String,
    LastName: String,
    City: String,
    age: Number,
    role: String


})

export default studentSchema;
