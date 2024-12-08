import express from 'express';
import path from "path"
import http from "http"
let io = require("socket.io")
const iplocate = require("node-iplocate")
const publicIp = require("public-ip")
const LocalStorage = require("node-localstorage").LocalStorage
let localStorage = new LocalStorage("./scratch")


let app = express();
const PORT = 4000

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index.html")
})

// app.listen(PORT, () => console.log("Server started on the PORT", PORT))

let server = http.createServer(app).listen(PORT,
    () => console.log("Server started on the PORT", PORT))

io = require("socket.io").listen(server)

//handle socket connection

io.sockets.on("connection", (socket) => { //incoming socket connection
    var list = io.sockets.sockets; //access all connected sockets, list of sockets
    console.log(list)
    var users = Object.keys(list)
    console.log(users);

    //set nickname

    socket.on("nick", (nick) => {
        socket.set("nickText", nick)//saving the nickname
        socket.emit("userList", users)//emit the updated user list to client
    })

    //set chat

    socket.on('chat', (data) => {
        socket.get("nickText", (err, nick) => {
            //get public ip address
            publicIp.v4().then((ipaddress) => {
                iplocate(ipaddress).then((results) => {
                    console.log("Public Ip address", results)
                    let city = JSON.stringify(results.city);
                    localStorage.setItem("userLocal", city)
                })
            })

            let nickname = err ? "Anonymous" : nick

            let payload = {
                message: data.message,
                nick: nickname,
                location: localStorage.getItem("userLocal")
            }
            console.log(payload)

            socket.emit("chat", payload) //only the client
            socket.broadcast.emit("chat", payload) //all other connected client
        })
    })


})


