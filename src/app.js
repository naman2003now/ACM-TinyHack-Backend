const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;

class App {
  app = express();
  constructor(controllers) {
    this.useMiddlewares();
    this.initilizeHomeRoute();
    this.initilizeControllers(controllers);
  }

  useMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  initilizeHomeRoute() {
    this.app.get("/", (req, res) => {
      res.send("Welcome to Habit Tracker");
    });
  }

  initilizeControllers(controllers) {
    controllers.forEach((Controller) => {
      const controller = new Controller();
      if (controller.validate()) {
        this.app.use(controller.path, controller.router);
      }
    });
  }

  async connectToDB(force = false) {
    await mongoose.connect(process.env.MONGODB_URL);
  }

  async listen() {
    await this.connectToDB();
    this.app.listen(PORT, () => {
      console.log(`Listening to PORT ${PORT}`);
    });
  }
}

module.exports = App;
