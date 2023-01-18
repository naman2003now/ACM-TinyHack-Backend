const HabitModel = require("../../models/habit.model.js");

async function getHabitStats(object) {
  const habits = await HabitModel.find(object);
  const today = Math.floor(Date.now()/(3600*24*1000))
  let card = [] 
  const n = 100
  for(let i = 0; i < n; i++){
    card.push(habits[0].tags.includes(today - i))
  }
  let streak = 0
  for(let i = 0; i < n; i++){
    if(card[i]){ 
      streak ++
    }else{
      break
    }
  }
  return {card, streak};
}

async function router(req, res) {
  try {
    const stats = await getHabitStats(req.params);
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
  getHabitStats,
  router,
};
