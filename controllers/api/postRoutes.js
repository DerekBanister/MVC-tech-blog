const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
        console.log("uve hit this route 0")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //get all posts
})

router.get("/:id", async (req, res) => {
    try {
        console.log("uve hit this route 1")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //post by id
})

router.post("/", async (req, res) => {
    try {
        console.log("uve hit this route 2")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //Make new post, title body user
})

router.put("/:id", async (req, res) => {
    try {
        console.log("uve hit this route 3")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //update a post
})

router.delete("/:id", async (req, res) => {
    try {
        console.log("uve hit this route 4")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //comment by id test
})


module.exports = router;