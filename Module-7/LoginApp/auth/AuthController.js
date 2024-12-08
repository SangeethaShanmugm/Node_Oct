const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const user = require("../Model/user")
const jwt = require("jsonwebtoken")
const config = require("../config")
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("../scratch")

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const isEmailValid = await user.findOne({ email })
        if (isEmailValid) {
            return res.send(400).json({ message: "Invalid credentials" })
        }
        console.log(req.body)

        const hashedPassword = await bcrypt.hashSync(req.body.password, 8)
        console.log(hashedPassword)

        // store data in db
        const registeredUser = user.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        res.redirect("/")
    } catch (err) {
        res.send({ error: "Internal server error" })
    }

})

router.post("/login", (req, res) => {
    user.findOne({ email: req.body.email }, async (err, user) => {
        if (err) return res.send("server error")
        console.log(user)
        if (!user) {
            return res.send({ auth: false, token: null, msg: "Invalid credentials" })
        }
        const storedDbPassword = user.password
        console.log(storedDbPassword)
        const isPasswordMatch = await bcrypt.compare(req.body.password, storedDbPassword)
        console.log(isPasswordMatch)
        if (!isPasswordMatch) {
            return res.send({ auth: false, token: null, msg: "Invalid credentials" })
        }
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400
        })
        localStorage.setItem("authToken", token)
        res.redirect("/users/profile")
    })
})

module.exports = router