const axios = require("axios");
require("dotenv").config();

exports.getCountry = async (req, res) => {
  try {
    const { country } = req.body;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric&lang=a`;
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
};
