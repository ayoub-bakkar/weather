const axios = require("axios");
require("dotenv").config();

exports.fetchWeatherByLocation = async (req, res) => {
  try {
    const { locationQuery } = req.body;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=${apiKey}&units=metric&lang=en`;
    const response = await axios.get(url);

    res.status(200).json({
      // Location info
      city: response.data.name,
      country: response.data.sys.country,

      // Temperature info
      temp: response.data.main.temp,
      feels_like: response.data.main.feels_like,

      // Weather info
      id: response.data.weather[0].id,
      description: response.data.weather[0].description,

      // time info
      dt: response.data.dt,
      timezone: response.data.timezone,
      
      // Additional info
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
      visibility: response.data.visibility,
      speedWind: response.data.wind.speed,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
