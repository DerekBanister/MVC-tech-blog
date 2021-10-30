const router = require("express").Router();
const mainRoutes = require("./mainRoutes");


//route usage
router.use("/", mainRoutes);
module.exports = router;