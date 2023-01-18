const HabitModel = require("../../models/habit.model.js");

async function tagHabit(object) {
  const habits = await HabitModel.findOne(object);
  const today = Math.floor(Date.now()/(3600*24*1000))
  habits.tags.push(today)
  await habits.save()
  return habits;
}

async function router(req, res) {
  try {
    const stats = await tagHabit(req.params);
    res.status(201).send(stats);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "An Unknown Error Occured",
      error: err,
    });
  }
}

module.exports = {
  tagHabit,
  router,
};
