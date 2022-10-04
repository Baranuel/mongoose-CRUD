import User from "../models/user-scheme.js";

export const createUser = async (req, res) => {
  const payload = req.body;
  try {
    const user = new User(payload);
    await user.save();
    await user.validate();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const payload = req.body;
    const user = await User.findOne({
      userEmail: payload.userEmail,
      userPassword: payload.userPassword,
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
