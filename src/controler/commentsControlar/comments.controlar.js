const Comments = require("../../models/comments");

// Get All Comment
const getAllComment = async (req, res) => {
  try {
    const comment = await Comments.find();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Comment
const CreateComment = async (req, res) => {
  try {
    const create = await Comments.create(req.body);
    res.status(200).json(create);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Comment
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const updateComment = await Comments.findByIdAndUpdate(id, req.body, { new: true });

    if (!updateComment) {
      res.status(404).json({ message: "Update Not Found." });
    }

    res.status(200).json(updateComment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete Comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    await Comments.findByIdAndDelete(id);

    res.status(200).json({ message: "Successfully Deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllComment, CreateComment, updateComment, deleteComment };
