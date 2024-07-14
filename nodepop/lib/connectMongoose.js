const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connection.on("error", (err) => {
  console.log("Connection error ", err);
});
mongoose.connection.once("open", () => {
  console.log("Conect to mongodb at ", mongoose.connection.name);
});
const mongodbURL = process.env.MONGODB_URL;

mongoose.connect(
  `mongodb://${mongodbURL}` || "mongodb://127.0.0.1:27017/Nodepop"
);

module.exports = mongoose.connection;
