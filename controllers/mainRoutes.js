// https://mvc-tech-blog-ucb2021.herokuapp.com/
const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");


//from homepage i will need route for view post with id
//login route
//create post route
//route for user "profile" with posts
router.get("/", async (req, res) => {
    try {
        console.log("uve hit this route")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})
//hitting route

module.exports = router;