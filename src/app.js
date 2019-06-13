const express = require("express");

const app = express();
const router = express.Router();

const indexRouter = require("./routes/index.route");

app.use("/", indexRouter);

module.exports = app;
