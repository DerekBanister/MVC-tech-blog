const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            attributes: ["id", "title", "body", "user_id"],
            include: [
                {
                    model: Comment,
                    as: "comments",
                    attributes: ["id", "comment_text", "user_id"],
                },
            ],
        })
        res.json(allPosts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //get all posts
})

router.get("/:id", async (req, res) => {
    try {
        const onePost = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "title", "body", "user_id"],
            include: [
                {
                    model: Comment,
                    as: "comments",
                    attributes: ["id", "comment_text", "user_id"],
                },
            ],
        })
        if (!onePost) {
            res.status(404).json({ message: "No Post found with this id" });
            return;
        }
        res.json(onePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //post by id
})

router.post("/", async (req, res) => {
    try {
        const createPost = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        })
        res.json(createPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //Make new post, title body user
})

router.put("/:id", async (req, res) => {
    try {
        const updatePost = await Post.update(
            {
                title: req.body.title,
                body: req.body.body,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
        if (!dbPostData) {
            res.status(404).json({ message: "No Post found with this id" });
            return;
        }
        res.json(updatePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //update a post
})

router.delete("/:id", async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (!dbPostData) {
            res.status(404).json({ message: "No Post found with this id" });
            return;
        }
        res.json(deletePost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //comment by id test
})


module.exports = router;