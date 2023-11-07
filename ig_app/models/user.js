const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String
  },
  father_name: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  phone_no: {
    type: Number
  },
  gender: {
    type: String
  },
  age: Number,
  state: {
    type: String
  },
  city: {
    type: String
  }
});

module.exports = mongoose.model("User", UserSchema);