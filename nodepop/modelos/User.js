const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

userSchema.methods.comparePassword = function (password) {
  return password === this.password;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
