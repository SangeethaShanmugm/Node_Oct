const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const user = require("../Model/user")
// router.use(bodyParser.urlencoded({ extended: true }))
// router.use(bodyParser.json())

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const isEmailValid = user.findOne({ email })
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
    res.send("Login")
})

module.exports = router