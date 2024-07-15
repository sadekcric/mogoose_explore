const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    status: {
      type: String,
      enum: ["public", "private"],
      default: "private",
    },
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
