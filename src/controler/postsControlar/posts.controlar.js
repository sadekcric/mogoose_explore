const postsGet = (req, res) => {
  res.status(200).json({ message: "Posts Get Connected" });
};

module.exports = { postsGet };
