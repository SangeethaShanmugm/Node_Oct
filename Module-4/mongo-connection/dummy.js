// const express = require('express');
// const { MongoClient } = require('mongodb');
import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from 'body-parser';
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

//get all movies
app.get('/movies', async (req, res) => {
    const movies = await client.db("node_nov").collection("movies").find().toArray();
    res.send(movies)
})

//get particular id
app.get('/movies/:movieid', async (req, res) => {
    const { movieid } = req.params
    console.log(movieid, req.params)
    const movies = await client.db("node_nov").collection("movies").findOne({ id: movieid });
    res.send(movies)
})


//add movie
app.post('/movies', async (req, res) => {
    const newMovie = req.body
    console.log(newMovie)
    const result = await client.db("node_nov").collection("movies").insertOne(newMovie);
    res.send(result)
})

//delete movie
app.delete('/movies/:movieid', async (req, res) => {
    const { movieid } = req.params
    console.log(movieid, req.params)
    const movies = await client.db("node_nov").collection("movies").deleteOne({ id: movieid });
    res.send(movies)
})

//update movie
app.put('/movies/:movieid', async (req, res) => {
    const { movieid } = req.params
    const updatedMovie = req.body
    console.log(updatedMovie)
    const result = await client.db("node_nov").collection("movies").updateOne({ id: movieid }, { $set: updatedMovie });
    res.send(result)
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

const client = connection()

app.listen(PORT, () => console.log("The server started on the port", PORT))