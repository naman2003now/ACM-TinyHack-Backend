const UserModel = require("../../models/user.model.js");
async function getAllUsers() {
  return await UserModel.find({});
}

async function router(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "An Unknown Error Occured",
      error: err,
    });
  }
}

module.exports = {
  getAllUsers,
  router,
};
