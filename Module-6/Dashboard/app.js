import express from "express";

const app = express()
const PORT = 9000;

app.get("/", (req, res) => {
    res.send("Dashboard")
})

app.listen(PORT, () => console.log("Started on PORT", PORT))