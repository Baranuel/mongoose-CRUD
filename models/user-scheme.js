import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: [true, "Email is required"],
  },
  userPassword: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("User", user_schema, "users");

export default User;
