const Controller = require("../../interfaces/controller.interface.js");

class Habit extends Controller {
  path = "/habit";
  constructor() {
    super();
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.get("/", async (req, res) => {
      res.send("Habit Controller Home Route");
    });
    this.router.post("/create", require("./createHabit.js").router);
    this.router.get("/:username", require("./getUserHabits.js").router);
  }
}

module.exports = Habit;
