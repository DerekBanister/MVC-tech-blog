const { User, Post, Comment } = require("../models");
const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");
const sequelize = require("../config/connection");


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData);
    await Post.bulkCreate(postData);

    process.exit(0);
};

seedDatabase();