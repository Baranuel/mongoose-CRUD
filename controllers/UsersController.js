import User from "../models/user-schema.js";
import bcrypt from "bcrypt";
import { createToken } from "../jwt.js";

import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const payload = req.body;
  try {
    const user = new User(payload);
    await user.validate();
    await user.save();

    const token = createToken(user);

    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const payload = req.body;
  console.log(req.headers.authorization);
  try {
    //check if the user with the email is in the database
    const userExists = await User.findOne({ userEmail: payload.userEmail });
    if (!userExists) return res.json("User with provided email does not exist");
    console.log(userExists);
    //check if the email in DB is the same as the one, user is using for login after hashing
    const isValidPassword = await bcrypt.compare(
      payload.userPassword,
      userExists.userPassword
    );

    if (!isValidPassword) {
      return res.json("error, The passwords do not match");
    }
    //at this point user is in our database and he provided correct password.
    const token = createToken(userExists);
    res
      .cookie("token", token, { maxAge: 60 * 60 * 24 * 30 * 1000 })
      .send({ userExists, token });
  } catch (error) {
    console.log(error);
  }
};
