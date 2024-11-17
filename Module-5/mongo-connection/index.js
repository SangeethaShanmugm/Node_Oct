// const express = require('express');
// const { MongoClient } = require('mongodb');
import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from 'body-parser';
import { moviesRouter } from "./routes/moviesRouter.js"
const app = express()
const PORT = 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(express.json()) //Interpreter 
// req => what we send to server
// res => what we receive from server

app.get('/', (req, res) => {
    res.send('Initiate Mongodb Connection');
})


//Connection URL
const mongourl = 'mongodb://127.0.0.1:27017'

// 'mongodb://localhost:27017';

//mongodb connection
// MongoClient.connect(mongourl, (err, client) => {
//     if (err) throw err;
//     const db = client.db("node_nov");
//     console.log("Connected successfully to mongodb")
//     app.listen(PORT, () => console.log("The server started on the port", PORT))
// })


function connection() {
    const client = new MongoClient(mongourl);
    client.connect();
    console.log("Mongodb is connected")
    return client;
}

export const client = connection()


app.use("/movies", moviesRouter);

app.listen(PORT, () => console.log("The server started on the port", PORT))