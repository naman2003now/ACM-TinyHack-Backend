const UserModel = require("../../models/user.model.js");
const HabitModel = require("../../models/habit.model.js")

async function login(object) {
  let user  = await UserModel.find({object})
  if(!user){
   user = await UserModel.create(object);
  }
  return await HabitModel.find({username: user.username})
}

async function router(req, res) {
  try {
    const habits = await login(req.body);
    res.status(200).send(habits);
  } catch (err) {
    console.log(err);
    res.send(500).send({
      message: "An Unknown Error Occured",
      error: err,
    });
  }
}

module.exports = {
  login,
  router,
};
