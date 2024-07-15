const express = require("express");
const route = express.Router();
const { getAllComment } = require("");

route.get("/", getAllComment);

module.exports = route;
