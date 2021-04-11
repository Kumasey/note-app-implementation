const express = require("express");
const routes = require("./routes/note.routes");
const cors = require('cors');

function createServer() {
  const app = express();
  app.use(express.json());
  app.use("/api", routes);
  app.use(cors());
  return app;
}

module.exports = createServer;
