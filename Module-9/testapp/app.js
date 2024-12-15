import fs from 'fs';
import express from 'express';
const app = express();
const port = 6500;

const getMovies = () => {
    const data = fs.readFileSync('./db.json', 'utf-8')
    return JSON.parse(data)
}

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Testing api</h1>')
});

app.get('/movies', (req, res) => {
    fs.readFile('db.json', (err, result) => {
        if (err) throw err;
        res.send(JSON.parse(result));
    })
})

//movies by id
app.get('/movies/:id', (req, res) => {
    const movieId = req.params.id
    console.log(movieId)
    const movies = getMovies()
    const movie = movies.find(mov => mov._id === movieId)
    res.send(movie)
})


app.get('/mytext', (req, res) => {
    fs.readFile('myText.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/content', (req, res) => {
    fs.appendFile('./mytext2.txt', 'My text read file\n', (err) => {
        if (err) throw err;
        else {
            fs.readFile('./mytext2.txt', 'utf-8', (err, data) => {
                if (err) throw err;
                res.send(data)
            })
        }
    })
})

app.listen(port, (err) => {
    console.log(`Server is running on port ${port}`)
})