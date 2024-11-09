const express = require('express')
const fs = require('fs')
const app = express()

// req => what we send to server
// res => what we receive from server

app.get('/', (req, res) => {
    res.send('Hello Everyone')
})


app.get('/movies', (req, res) => {
    fs.readFile("./movies.json", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(JSON.parse(result))
        }
    })

})




app.listen(5000)