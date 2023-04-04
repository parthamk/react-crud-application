const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  jobrole: {
    type: String,
    require: true,
  },
  addr: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
});

const users = new mongoose.model("users",userSchema);

module.exports = users;
