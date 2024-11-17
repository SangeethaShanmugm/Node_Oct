import express from "express";

import { getMovies, getMovieById, addMovie, deleteMovieById, updateMovieById } from "../helper.js";

const router = express.Router();

//get all movies
router.get('/', async (req, res) => {
    const movies = await getMovies();
    res.send(movies)
})

//get particular id
router.get('/:movieid', async (req, res) => {
    const { movieid } = req.params
    console.log(movieid, req.params)
    const movies = await getMovieById(movieid);
    res.send(movies)
})


//add movie
router.post('/', async (req, res) => {
    const newMovie = req.body
    console.log(newMovie)
    const result = await addMovie(newMovie);
    res.send(result)
})

//delete movie
router.delete('/:movieid', async (req, res) => {
    const { movieid } = req.params
    console.log(movieid, req.params)
    const movies = await deleteMovieById(movieid);
    res.send(movies)
})

//update movie
router.put('/:movieid', async (req, res) => {
    const { movieid } = req.params
    const updatedMovie = req.body
    console.log(updatedMovie)
    const result = await updateMovieById(movieid, updatedMovie);
    res.send(result)
})


export const moviesRouter = router;