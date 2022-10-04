import User from "../models/user-schema.js";
import { createError } from "../client/scripts/server-errors.js";

export const createUser = async (req, res) => {
    const payload = req.body;
    try {
      const user = new User(payload);
      await user.save();
      res.send(user);
    } catch (err) {
        console.log(err);
      }
  };

export const checkUser = async (req, res) => {
    const payload = req.body;
    try {
    const userCompare = await User.findOne({ email: payload.email, password: payload.password });
      res.send(userCompare);
    } catch (err) {
        console.log(err);
        console.log("UrGay");
      }
  };