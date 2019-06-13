const express = require("express");

const app = express();
const router = express.Router();

const indexRouter = require("./routes/index.route");

app.use("/giphys", indexRouter);
app.use("/", (req, resp) => {
    return resp
    .status(200)
    .send({
        title: "Contador de requisição!",
        version: "v.0.0.1"
    })
});


module.exports = app;
