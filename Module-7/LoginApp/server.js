const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

//ejs
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/', (req, res) => {
  res.render('index', {
    error: req.query.valid ? req.query.valid : '',
    msg: req.query.msg ? req.query.msg : ''
  })
})

app.get('/signup', (req, res) => {
  res.render('signup')
})


//generate password
async function genPassword(password) {
  const salt = await bcrypt.genSalt(10)//bcrypt.genSalt(no. of rounds)
  console.log(salt);
  return salt;
}
// genPassword("password@123");
//$2a$10$5f/dzMitEe1UkILSdDT7Vu
//$2a$10$16TeyQ5Cjs1MelkNFPPKl.
//$2a$10$l6fg0d7IDa/X9jiZesHwKO

mongoose.connect("mongodb://127.0.0.1:27017/node_nov", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.log("Failed to connect to mongoDB", err)
  } else {
    console.log("MongoDB is connected successfully")
  }
})

const AuthController = require("./auth/AuthController")
app.use("/api/auth", AuthController)

const userController = require("./user/UserController")
app.use("/users", userController)

app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});