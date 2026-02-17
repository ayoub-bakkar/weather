const express = require("express");
const router = express.Router();
const path = require("path");

const { getCountry } = require(
  path.join(__dirname, "..", "controllers", "weatherControllers.js"),
);

const { notFound } = require(
  path.join(__dirname, "..", "middleware", "notFound.js"),
);

router.post("/", notFound, getCountry);
module.exports = router;
