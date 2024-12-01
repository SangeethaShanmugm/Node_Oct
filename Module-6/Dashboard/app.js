import express from "express";
const MongoClient = require("mongodb").MongoClient;
import bodyParser from "body-parser";
const app = express();
const PORT = 9000;
let db;
const mongourl = "mongodb://127.0.0.1:27017/";
const col_name = "userList";

// app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public")); //css
app.set("views", "./views"); //pages
app.set("view engine", "ejs"); //choosing ejs template

app.get("/", (req, res) => {
    db.collection(col_name)
        .find()
        .toArray((err, result) => {
            if (err) throw err;
            res.render("index.ejs", { data: result });
        });
});
//post data from UI
app.post("/addData", (req, res) => {
    db.collection(col_name).insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log(req.body);
        console.log("Data inserted successfully");
    });
    //in req.body we will receive data from form
    res.redirect("/");
});

//delete selected user

app.delete("/delete_user", (req, res) => {
    db.collection(col_name).findOneAndDelete(
        { name: req.body.name },
        (err, result) => {
            if (err) return res.send(500, err);
            res.send({ message: "success" });
        }
    );
});

//find user by name
app.post("/find_by_name", (req, res) => {
    let name = req.body.name;
    db.collection(col_name)
        .find({ name: name })
        .toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
});

//update user
app.put("/update_user", (req, res) => {
    db.collection(col_name).findOneAndUpdate(
        { name: req.body.name },
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
            },
        },
        {
            upsert: true,
        },
        (err, result) => {
            if (err) return res.send(err);
            res.send(result)
        }
    );
});

app.get("/addUser", (req, res) => {
    res.render("admin");
});

MongoClient.connect(mongourl, (err, client) => {
    if (err) throw err;
    db = client.db("node_nov");
    console.log("Mongodb is connected");
    app.listen(PORT, () => console.log("Started on PORT", PORT));
});
