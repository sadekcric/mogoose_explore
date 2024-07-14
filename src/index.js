const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const booksRoute = require("./routes/books/books.routes.js");
const usersRoute = require("./routes/users/users.routes.js");
const postsRoute = require("./routes/posts/posts.route.js");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/books", booksRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/posts", postsRoute);

app.get("/", (req, res) => {
  res.send({ message: "Port is Running" });
});

app.get("/health", (req, res) => {
  res.status(200).send({ health: "health is Good" });
});

// mongoose Setup
let connectionUrl = process.env.URI;
connectionUrl = connectionUrl.replace("<username>", process.env.USER_NAME);
connectionUrl = connectionUrl.replace("<password>", process.env.PASSWORD);

connectionUrl = `${connectionUrl}/${process.env.STORED_DATA_NAME}?${process.env.QUERY_STRING}`;

// Mongoose Connection
const main = async () => {
  try {
    await mongoose.connect(connectionUrl);

    app.listen(port, () => {
      console.log(`port is Running at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
