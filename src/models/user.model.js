const mongoose = require("mongoose");

const UserSchemea = new mongoose.Schema({
  email: {
    type: mongoose.Types.String,
    unique: true,
  },
  name: mongoose.Types.String,
});

module.exports = mongoose.model("User", UserSchemea);
