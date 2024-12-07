const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get("/profile", (req, res) => {
    res.send("profile")
})

module.exports = router