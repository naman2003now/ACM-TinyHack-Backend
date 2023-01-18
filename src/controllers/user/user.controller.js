const Controller = require("../../interfaces/controller.interface.js");

class User extends Controller {
  path = "/user";
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", async (req, res) => {
      res.send("User Home Route");
    });
    this.router.get("/all", require("./getAllUsers.js").router);
    this.router.post("/create", require("./createUser.js").router);
  }
}

module.exports = User;
