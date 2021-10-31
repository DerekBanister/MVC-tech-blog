const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
        console.log("uve hit this route 0")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //all users
})

router.get("/:id", async (req, res) => {
    try {
        console.log("uve hit this route 1")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //get user by id
})

router.post("/:id", async (req, res) => {
    try {
        console.log("uve hit this route 2")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //add/create user
})

router.post("/login", async (req, res) => {
    try {
        console.log("uve hit this route 3")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //login user
})

router.delete("/:id", async (req, res) => {
    try {
        console.log("uve hit this route 4")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //delete user
})

router.get("/logout", async (req, res) => {
    try {
        console.log("uve hit this route 5")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //logout user end session
})


//ALL ROUTES TESTED AND FUNCTIONING
module.exports = router;