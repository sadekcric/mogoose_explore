const user = require("../../models/users");
// Get Users
const getAllUser = async (req, res) => {
  try {
    const allUser = await user.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create Users
const createUsers = async (req, res) => {
  try {
    const data = await user(req.body);

    if (!data) {
      res.status(404).json({ error: "data has not Found." });
    }
    await data.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

// Update Users
const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await user.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedData) {
      res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    res.status(404).json(err.message);
  }
};

// delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successfully!" });
  } catch (error) {
    res.status("404").json(error.message);
  }
};

module.exports = { getAllUser, createUsers, updateUsers, deleteUser };
