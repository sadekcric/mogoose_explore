const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["pending", "approve", "reject"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", usersSchema);

module.exports = user;
