const fs = require("fs")

// fs.open("./cool.txt", 'r', (err, file) => {
//     if (err) console.log(err)
//     console.log("File opened successfully")
// })

// fs.stat("./cool.txt", (err, stats) => {
//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
//     console.log(stats.isCharacterDevice())
// })

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) console.log("Error❌", err)
//     console.log("The content of the file", data)
// })


// const quote = "\nLive more, worry Less😀😀"

// fs.appendFile("./cool.txt", quote, () => {
//     console.log("Completed appending")
// })

// fs.unlink("./toRemove.txt", (err) => {
//     if (err) console.log(err)
//     console.log("Deleted Successfully")
// })

//Object  => { K : V}

const user = {
    name: "Jack",
    age: 20
}
console.log(user)

const userData = JSON.stringify(user)
console.log(userData)

const userData1 = JSON.parse(userData)
console.log(userData1)

const movie = {
    name: "Avengers",
    type: "Hollywood"
}

const movieData = JSON.stringify(movie)

console.log(movieData)//{"name":"Avengers","type":"Hollywood"}

fs.writeFile("movies.json", movieData, (err, moviesInfo) => {
    console.log("Writing JSON data successful")
})