const express = require("express");
const routes = require("./app/routes/note.routes");

function createServer() {
  const app = express();
  app.use(express.json());
  app.use("/api", routes);
  return app;
}

module.exports = createServer;
