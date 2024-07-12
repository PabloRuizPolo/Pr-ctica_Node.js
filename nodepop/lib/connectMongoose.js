const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connection.on("error", (err) => {
  console.log("Connection error ", err);
});
mongoose.connection.once("open", () => {
  console.log("Conect to mongodb at ", mongoose.connection.name);
});
const mongodbHost = process.env.MONGODB_HOST;
const mongodbPort = process.env.MONGODB_PORT;
const mongodbDatabase = process.env.MONGODB_DATABASE;

mongoose.connect(`mongodb://${mongodbHost}:${mongodbPort}/${mongodbDatabase}`);

module.exports = mongoose.connection;
