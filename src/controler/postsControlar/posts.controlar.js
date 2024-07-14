const Posts = require("../../models/posts");

// Get Posts
const postsGet = async (req, res) => {
  try {
    const allPosts = await Posts.find();

    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// createPosts
const createPosts = async (req, res) => {
  try {
    const posts = await Posts.create(req.body);

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// Get post By Id
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const getPost = await Posts.findById(id).populate("author");
    res.status(200).json(getPost);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// update Post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Posts.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedPost) {
      res.status(404).json({ message: "Post not Found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = { postsGet, createPosts, getPostById, updatePost };
