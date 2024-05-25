const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

userSchema.statics.cryptPassword = function (passwordClear) {
  return bcrypt.hash(passwordClear, 10);
};

userSchema.methods.comparePassword = function (passwordClear) {
  return bcrypt.compare(passwordClear, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
