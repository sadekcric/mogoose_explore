const express = require("express");
const route = express.Router();
const { getAllUser, createUsers, updateUsers, deleteUser } = require("../../controler/usersControler/users.controler");

route.get("/", getAllUser);
route.post("/", createUsers);
route.put("/:id", updateUsers);
route.delete("/:id", deleteUser);

module.exports = route;
