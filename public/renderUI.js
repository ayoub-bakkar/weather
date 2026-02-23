const cityNameEl = document.querySelector(".city");
const countryLabelEl = document.querySelector(".country");
const temperatureEl = document.querySelector(".temp");
const weatherIconEl = document.querySelector(".image");
const detailElements = document.querySelectorAll("[data-key]");
const weatherDescriptionEl = document.querySelector(".description");
const localTimeEl = document.getElementById("time");

const units = {
  humidity: "%",
  speedWind: "km/h",
  feels_like: "°C",
  visibility: "km",
  clouds: "%",
};

const updateWeatherUI = (data) => {
  renderLocation(data);
  renderMainWeather(data);
  renderAdditionalMetrics(data);
  renderTime(data);
  renderWeatherIcon(data);
};
const renderTime = (timeِAPI) => {
  const localTimeMs = (timeِAPI.dt + timeِAPI.timezone) * 1000;
  const date = new Date(localTimeMs);
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
  localTimeEl.textContent = timeString;
};

const renderMainWeather = (main) => {
  if (main.temp !== undefined) {
    temperatureEl.innerHTML = `${Math.floor(main.temp)}<sup class="unit">c</sup>`;
  }
  if (main.description !== undefined) {
    weatherDescriptionEl.textContent = main.description;
  }
};
const renderLocation = (CountryCity) => {
  if (CountryCity.country !== undefined) {
    countryLabelEl.textContent = CountryCity.country;
  }
  if (CountryCity.country !== undefined) {
    cityNameEl.textContent = CountryCity.city;
  }
};
const renderAdditionalMetrics = (extraInfo) => {
  detailElements.forEach((el) => {
    const key = el.dataset.key;
    if (extraInfo[key] !== undefined) {
      el.textContent = extraInfo[key];
      el.textContent += `${units[key]}`;
    }
  });
};

const renderWeatherIcon = (weatherConditionCodes) => {
  const id = weatherConditionCodes.id;
  switch (true) {
    case id >= 200 && id <= 232:
      weatherIconEl.src = "image/thunderstorm.png";
      break;
    case id >= 300 && id <= 321:
    case id >= 500 && id <= 531:
      weatherIconEl.src = "image/rain.png";
      break;
    case id >= 600 && id <= 622:
      image.src = "image/snow.png";
      break;
    case id >= 701 && id <= 781:
      weatherIconEl.src = "image/mist.png";
      break;
    case id == 800:
      weatherIconEl.src = "image/clear-sky.png";
      break;
    case id == 801:
      weatherIconEl.src = "image/few-clouds.png";
      break;
    case id == 802:
      weatherIconEl.src = "image/scattered-clouds.png";
      break;
    case id == 803:
    case id == 804:
      weatherIconEl.src = "image/broken-clouds.png";
      break;
    default:
      weatherIconEl.src = "image/weather.png";
  }
};
const errorHandler = (messageErr) => {
  cityNameEl.textContent = messageErr.message;
  countryLabelEl.textContent = "";
  localTimeEl.textContent = "";
  weatherDescriptionEl.textContent = "0";
  temperatureEl.textContent = "0";
  detailElements.forEach((el) => {
    el.textContent = 0;
  });
  weatherIconEl.src = "image/error.png";
};
export { updateWeatherUI, errorHandler };
