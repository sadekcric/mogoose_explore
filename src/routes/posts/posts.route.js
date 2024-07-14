const express = require("express");
const { postsGet, createPosts, getPostById, updatePost } = require("../../controler/postsControlar/posts.controlar");

const route = express.Router();

route.get("/", postsGet);
route.post("/", createPosts);
route.get("/:id", getPostById);
route.put("/:id", updatePost);

module.exports = route;
