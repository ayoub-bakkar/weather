const express = require("express");
const router = express.Router();
const path = require("path");

const { getCountry } = require(
  path.join(__dirname, "..", "controllers", "weatherControllers.js"),
);

const { validateWeatherInput  } = require(
  path.join(__dirname, "..", "middleware", "validateWeatherInput.js"),
);

router.post("/api/v1/weather", validateWeatherInput , getCountry);
module.exports = router;
