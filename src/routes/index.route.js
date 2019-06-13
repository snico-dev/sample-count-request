const express = require("express");
const router = express.Router();

const controller = require("../controllers/index.controller");

router.get("/", controller.get);
router.get("/:term", controller.get);

module.exports = router;
