import Users from "../models/Users.js";

export const getUsers = async (req, res) => {
  const users = await Users.find();
  return res.json(users);
};

export const getUser = async (req, res) => {
  const user = await Users.findOne(req.params.email);
  return res.json(user);
};

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await Users.findById(id);
  if (!updatedUser) {
    const error = new Error("User not found");
    return res.status(404).json({ msg: error.message });
  }
  updatedUser.username = req.body.username || updatedUser.username;
  updatedUser.email = req.body.email || updatedUser.email;
  try {
    const updatedUserSuccess = await updatedUser.save();
    res.status(204).json(updatedUserSuccess);
  } catch (error) {
    console.log(error);
  }
};
