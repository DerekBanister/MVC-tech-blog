// https://mvc-tech-blog-ucb2021.herokuapp.com/
const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");
//time to start thinking about other routes, 
//comment route, post route, and user/dashboard route.
//want to start with homepage, get that up and running with handlebars
//will soon start rendering data/creating html

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
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    as: "comments",
                    attributes: ["id", "comment_text", "user_id"],
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


router.get("/viewpost/:id", async (req, res) => {

    try {
        const viewPost = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "title", "body", "user_id"],
            // include: [
            //     {
            //         model: User,
            //         as: "user",
            //         attributes: ["username"],
            //     },
            //     {
            //         model: Comment,
            //         as: "comments",
            //         attributes: ["id", "comment_text", "user_id"],
            //         include: [
            //             {
            //                 model: User,
            //                 as: "user",
            //                 attributes: ["username"],
            //             },
            //         ],
            //     },
            // ]
        })
        if (!viewPost) {
            res.status(404).json({ message: "No Posts Available" });
            return;
        }
        const post = viewPost.get({ plain: true }); // serialize all the posts
        console.log(post);
        //then render
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})
router.get("/login", async (req, res) => {
    try {
        console.log("uve hit this route 2")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //check if loggedIn, render login page.
})


router.get("/post", async (req, res) => {
    try {
        console.log("uve hit this route 3")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //render create post page.
})

router.get("/dashboard", async (req, res) => {
    try {
        console.log("uve hit this route4")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//all routes working









module.exports = router;