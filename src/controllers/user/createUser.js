const UserModel = require("../../models/user.model.js");

async function createUser(object) {
  const user = await UserModel.create(object);
  return user;
}

async function router(req, res) {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (err) {
    console.log(err)
    res.send(500).send({
      message: "An Unknown Error Occured",
      error: err,
    });
  }
}

module.exports = {
  createUser,
  router,
};
