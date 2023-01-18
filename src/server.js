require("dotenv-safe").config();
const App = require("./app.js");
const User = require("./controllers/user/user.controller.js");
const Habit = require("./controllers/habit/habit.controller.js");

const app = new App([User, Habit]);
app.listen();

module.exports = app.app;
