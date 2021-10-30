// https://mvc-tech-blog-ucb2021.herokuapp.com/
const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");


//from homepage i will need route for view post with id
//login route
//create post route
//route for user "profile" with posts
router.get("/", async (req, res) => {
    //find all
    try {
        console.log("uve hit this route 0")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})


router.get("/viewpost/:id", (req, res) => {

    try {
        console.log("uve hit this route 1")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get("/login", (req, res) => {
    try {
        console.log("uve hit this route 2")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})


router.get("/post", (req, res) => {
    try {
        console.log("uve hit this route 3")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//all routes working









module.exports = router;