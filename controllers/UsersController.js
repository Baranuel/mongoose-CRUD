import User from "../models/user-schema.js";

import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const payload = req.body;
  try {
    const user = new User(payload);
    await user.validate();
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const payload = req.body;
  try {
    const user = await User.findOne({
      userEmail: payload.userEmail,
      userPassword: payload.userPassword,
    });
    const token = jwt.sign({ _id: user.id }, "SamuelIsGay");

    res.send(token);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};