const express = require("express");
const { postsGet, createPosts, getPostById } = require("../../controler/postsControlar/posts.controlar");

const route = express.Router();

route.get("/", postsGet);
route.post("/", createPosts);
route.get("/:id", getPostById);

module.exports = route;
