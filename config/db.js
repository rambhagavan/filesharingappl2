const mongoose = require("mongoose");
require("dotenv/config");

function connectDB() {
  mongoose
    .connect(process.env.mongo_connection_url, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to the database");
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = connectDB();
