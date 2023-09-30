const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("index", {
        title: "NewJeans"
    })
})

router.get("/members", (req, res) => {
    res.render("index", {
        title: "Members"
    })
})

router.get("/discography", (req, res) => {
    res.render("index", {
        title: "Discography"
    })
})

router.get("/awards", (req, res) => {
    res.render("index", {
        title: "Awards and Nominations",
    })
})

router.get("/performances", (req, res) => {
    res.render("index", {
        title: "Performances",
    })
})

router.get("/gallery", (req, res) => {
    res.render("index", {
        title: "NewJeans",
    })
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    })
})

module.exports = router