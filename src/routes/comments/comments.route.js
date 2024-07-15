const express = require("express");
const route = express.Router();
const {
  getAllComment,
  CreateComment,
  updateComment,
  deleteComment,
  getCommentById,
} = require("../../controler/commentsControlar/comments.controlar");

route.get("/", getAllComment);
route.get("/:id", getCommentById);
route.post("/", CreateComment);
route.put("/:id", updateComment);
route.delete("/:id", deleteComment);

module.exports = route;
