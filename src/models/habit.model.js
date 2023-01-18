const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  username: { type: String, required: true },
  serial: { type: String, reqiured: true, unique: true },
  name: String,
  tags: { type: [ Number ], default: []}
});

module.exports = mongoose.model("Habit", HabitSchema);
