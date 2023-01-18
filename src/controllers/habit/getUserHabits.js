const UserModel = require("../../models/user.model.js");
const HabitModel = require("../../models/habit.model.js");

async function getUserHabits(object) {
  const habits = await HabitModel.find(object);
  return habits;
}

async function router(req, res) {
  try {
    const habits = await getUserHabits(req.params);
    res.status(201).send(habits);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "An Unknown Error Occured",
      error: err,
    });
  }
}

module.exports = {
  getUserHabits,
  router,
};
