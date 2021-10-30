const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
        console.log("uve hit this route 0")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
    //comment by id test
})

router.post("/", async (req, res) => {
    //post comment
    try {
        console.log("uve hit this route 1")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

})

router.put("/", async (req, res) => {
    //update comment
    try {
        console.log("uve hit this route 3")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

})

router.delete("/:id", async (req, res) => {
    //delete comment
    try {
        console.log("uve hit this route 4")
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

})

module.exports = router;

