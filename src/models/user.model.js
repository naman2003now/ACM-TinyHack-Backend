const mongoose = require("mongoose");

const UserSchemea = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("User", UserSchemea);
