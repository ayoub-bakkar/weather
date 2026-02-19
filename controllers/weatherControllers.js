const axios = require("axios");
require("dotenv").config();

exports.getCountry = async (req, res) => {
  try {
    const { country } = req.body;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric&lang=a`;
    const response = await axios.get(url);

    res.status(200).json({
      city: response.data.name,
      country: response.data.sys.country,
      id: response.data.weather[0].id,
      temp: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      visibility: response.data.visibility,
      humidity: response.data.main.humidity,
      speedWind: response.data.wind.speed,
      clouds :response.data.clouds.all
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
