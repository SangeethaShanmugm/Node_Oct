import mongoose, { model } from "mongoose";

// var Schema = mongoose.Schema;

var userModel = new mongoose.Schema(
    {
        name: String,
        age: Number,
        city: String
    }
)

export default model("users", userModel)