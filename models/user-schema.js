import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

user_schema.pre("save", async function (next) {
  if (!this.isModified("userPassword")) return next();

  const hash = await bcrypt.hash(this.userPassword, 10);
  this.userPassword = hash;
  next();
});

// user_schema.methods.comparePassword = async function (password, cb) {
//   return bcrypt.compare(password, this.userPassword, function (err, isMatch) {
//     if (err) return err;
//     cb(null, isMatch);
//   });
// };

const User = mongoose.model("User", user_schema, "users");

export default User;
