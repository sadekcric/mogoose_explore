const express = require("express");
const { postsGet } = require("../../controler/postsControlar/posts.controlar");

const route = express.Router();

route.get("/", postsGet);

module.exports = route;
