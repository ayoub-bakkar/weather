const express = require("express");
const router = express.Router();
const path = require("path");

const { fetchWeatherByLocation } = require(
  path.join(__dirname, "..", "controllers", "weatherControllers.js"),
);

const { validateLocationInput  } = require(
  path.join(__dirname, "..", "middleware", "validateLocationInput.js"),
);

router.post("/api/v1/weather", validateLocationInput , fetchWeatherByLocation);
module.exports = router;
