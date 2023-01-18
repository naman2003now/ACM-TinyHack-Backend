const HabitModel = require("../../models/habit.model.js");

async function createHabit(object) {
  const habit = await HabitModel.create(object);
  return habit;
}

async function router(req, res) {
  try {
    const habit = await createHabit(req.body);
    res.status(201).send(habit);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "An Unknown Error Occured",
      error: err,
    });
  }
}

module.exports = {
  createHabit,
  router,
};
