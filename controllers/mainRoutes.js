// https://mvc-tech-blog-ucb2021.herokuapp.com/
const router = require("express").Router();
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
        // console.log(posts);
        //then render to homepage
        res.render("home", { posts, loggedIn: req.session.loggedIn })
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
                    include: [
                        {
                            model: User,
                            as: "user",
                            attributes: ["username"],
                        },
                    ],
                },
            ]
        })
        if (!viewPost) {
            res.status(404).json({ message: "No Posts Available" });
            return;
        }
        const post = viewPost.get({ plain: true }); // serialize all the posts
        //console.log(post);
        //then render a view single post page I have to make, check if logged in on every render
        const myPost = post.user_id == req.session.user_id;
        //check if loggedin/which user/what post
        res.render("onePost", {
            post, loggedIn: req.session.loggedIn, currentUser: myPost,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})
router.get("/login", async (req, res) => {
    try {
        //just render login page
        res.render("login", { loggedIn: req.session.loggedIn })

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //check if loggedIn, render login page.
})


router.get("/post", async (req, res) => {
    try {
        res.render("createPost", { loggedIn: req.session.loggedIn })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //render create post page.

})

router.get("/dashboard", async (req, res) => {
    try {
        // console.log(req.session, "This = session id")
        const allPosts = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
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
                    include: [
                        {
                            model: User,
                            as: "user",
                            attributes: ["username"],
                        },
                    ],
                },
            ],
        })
        if (!allPosts) {
            res.status(404).json({ message: "No Posts Available" });
            return;
        }
        const posts = allPosts.map((post) => post.get({ plain: true })); // serialize all the posts
        // console.log(posts);
        res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//all routes working
module.exports = router;