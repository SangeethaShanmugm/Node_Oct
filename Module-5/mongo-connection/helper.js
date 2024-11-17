import { client } from "./index.js";

export function getMovies() {
    return client.db("node_nov").collection("movies").find().toArray();
}
export function getMovieById(movieid) {
    return client.db("node_nov").collection("movies").findOne({ id: movieid });
}
export function addMovie(newMovie) {
    return client.db("node_nov").collection("movies").insertOne(newMovie);
}
export function deleteMovieById(movieid) {
    return client.db("node_nov").collection("movies").deleteOne({ id: movieid });
}
export function updateMovieById(movieid, updatedMovie) {
    return client.db("node_nov").collection("movies").updateOne(
        { id: movieid }, { $set: updatedMovie });
}
