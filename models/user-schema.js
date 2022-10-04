import mongoose from "mongoose";

const user_data = new mongoose.Schema({
    email: {
      type: String
    },
    password: {
      type: String
    }
  });

  const User = mongoose.model(
    "User",
    user_data,
    "user_information"
  );
  
  export default User;