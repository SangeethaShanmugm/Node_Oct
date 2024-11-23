import express from 'express'
import mongoose from "mongoose"
import userModel from "./model/userModel.js"
const app = express()
const PORT = 8000;

app.use(express.json())//Inbuilt Middleware

const MONGO_URL = 'mongodb://127.0.0.1:27017/node_nov';

mongoose.connect(MONGO_URL)
console.log("Mongodb is connected");

app.get('/', (req, res) => {
    res.send('Welcome to User Management')
})

//add new user

app.post('/addUser', (req, res) => {
    userModel.create(req.body).then(() => {
        res.send("User added successfully")
    })
})


//get user
app.get('/getUser', (req, res) => {
    userModel.find().then((result) => {
        res.send(result)
    })
})


//delete user
app.delete('/deleteUser', (req, res) => {
    userModel.findOneAndDelete({ name: req.body.name }).then((result) => {
        res.send("User deleted successfully")
    })
})

//update user

app.put('/updateUser', (req, res) => {
    userModel.findOneAndUpdate(
        { name: req.body.name },
        {
            $set: {
                name: req.body.name,
                age: req.body.age,
                city: req.body.city
            }
        }
    ).then((result) => {
        res.send("User updated successfully")
    })
})



app.listen(PORT, () => console.log("Server started on the PORT", PORT))