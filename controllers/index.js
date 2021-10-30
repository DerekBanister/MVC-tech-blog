const router = require("express").Router();
const mainRoutes = require("./mainRoutes");
const commentRoutes = require("./api/commentRoutes");
const userRoutes = require("./api/userRoutes");
const postRoutes = require("./api/postRoutes");


//route usage
router.use("/", mainRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/users", userRoutes);
router.use("/api/posts", postRoutes);

module.exports = router;