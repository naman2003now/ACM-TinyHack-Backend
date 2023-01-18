require("dotenv-safe").config();
const App = require("./app.js");
const User = require("./controllers/user/user.controller.js");

const app = new App([User]);
app.listen();

module.exports = app.app;
