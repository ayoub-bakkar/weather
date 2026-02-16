const express = require("express");
const router = express.Router();
const path = require("path");

const { getCountry } = require(
  path.join(__dirname, "..", "controllers", "weatherControllers.js"),
);

router.post("/", getCountry);
module.exports = router;
