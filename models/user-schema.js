import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    unique: true,
    required: true,
  },
});

const User = mongoose.model("User", user_schema, "users");

export default User;