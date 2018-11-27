const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;