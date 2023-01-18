const mongoose = require("mongoose");

const UserSchemea = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
});

module.exports = mongoose.model("User", UserSchemea);
