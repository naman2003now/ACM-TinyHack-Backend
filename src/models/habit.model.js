const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: String,
});

module.exports = mongoose.model("Habit", HabitSchema);
