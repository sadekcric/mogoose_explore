const Comments = require("../../models/comments");

const getAllComment = async (req, res) => {
  try {
    const comment = await Comments.find();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const CreateComment = async (req, res) => {};

module.exports = { getAllComment, CreateComment };
