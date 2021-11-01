const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            attributes: ["id", "comment_text", "user_id", "post_id"],
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["username"],
                },
            ],
        })
        res.json(allComments);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //comment by id test
})

router.get("/:id", async (req, res) => {
    try {
        const oneComment = await Comment.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "comment_text", "user_id", "post_id"],
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["username"],
                },
            ],
        })
        if (!oneComment) {
            res.status(404).json({ message: "No Comment found with this id" });
            return;
        }
        res.json(oneComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    //post comment
    try {
        const createComment = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
        res.json(createComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

})

router.put("/", (req, res) => {
    //update comment
    res.send(`update comment`);

})

router.delete("/:id", async (req, res) => {
    //delete comment
    try {
        const deleteComment = await Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (!deleteComment) {
            res.status(404).json({ message: "No Comment found with this id" });
            return;
        }
        res.json(deleteComment)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

})

module.exports = router;

