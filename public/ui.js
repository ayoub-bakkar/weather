const city = document.querySelector(".city");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const image = document.querySelector(".image");
const infoWeather = document.querySelectorAll("[data-key]");
const description = document.querySelector(".description");
const time = document.getElementById("time");

const units = {
  humidity: "%",
  speedWind: "km/h",
  feels_like: "°C",
  visibility: "km",
  clouds: "%",
};

const updateWeatherUI = (data) => {
  renderCountryCity(data);
  renderMainWeather(data);
  displayExtraInfo(data);
  renderTime(data);
  renderWeatherImage(data);
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
  time.textContent = timeString;
};

const renderMainWeather = (main) => {
  if (main.temp !== undefined) {
    temp.innerHTML = `${Math.floor(main.temp)}<sup class="unit">c</sup>`;
  }
  if (main.description !== undefined) {
    description.textContent = main.description;
  }
};
const renderCountryCity = (CountryCity) => {
  if (CountryCity.country !== undefined) {
    country.textContent = CountryCity.country;
  }
  if (CountryCity.country !== undefined) {
    city.textContent = CountryCity.city;
  }
};
const displayExtraInfo = (extraInfo) => {
  infoWeather.forEach((el) => {
    const key = el.dataset.key;
    if (extraInfo[key] !== undefined) {
      el.textContent = extraInfo[key];
      el.textContent += `${units[key]}`;
    }
  });
};

const renderWeatherImage = (weatherConditionCodes) => {
  const id = weatherConditionCodes.id;
  switch (true) {
    case id >= 200 && id <= 232:
      image.src = "image/thunderstorm.png";
      break;
    case id >= 300 && id <= 321:
      image.src = "image/rain.png";
      break;
    case id >= 600 && id <= 622:
      image.src = "image/snow.png";
      break;
    case id >= 701 && id <= 781:
      image.src = "image/mist.png";
      break;
    case id == 800:
      image.src = "image/clear-sky.png";
      break;
    case id == 801:
      image.src = "image/few-clouds.png";
      break;
    case id == 802:
      image.src = "image/scattered-clouds.png";
      break;
    case id == 803:
    case id == 804:
      image.src = "image/broken-clouds.png";
      break;
    default: 
    image.src = "image/weather.png"
  }
};
export { updateWeatherUI };
