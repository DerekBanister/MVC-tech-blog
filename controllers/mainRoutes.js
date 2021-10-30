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
    //user and comment come with post
    try {
        const postData = await Post.findAll({
            attributes: ["id", "title", "body", "user_id"],
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["username"]
                },
                {
                    model: Comment,
                    as: "comments",
                    attributes: ["id", "comment_text", "user_id"]
                },
            ],
        })
        if (!postData) {
            res.status(400).json({ message: "No Posts Available" });
            return;
        }
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        //then render to homepage
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//will render to handlebars page later, route working though


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

router.get("/dashboard", (req, res) => {
    try {
        console.log("uve hit this route4")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//all routes working









module.exports = router;