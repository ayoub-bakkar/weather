const infoWeather = document.querySelectorAll("[data-key]");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");

const units = {
  humidity: "%",
  speedWind: "km/h",
  feels_like: "°C",
  visibility: "km",
  clouds: "%",
};

const renderMainWeather = (main) => {
  if (main.temp !== undefined) {
    temp.innerHTML = `${main.temp}<sup class="unit">c</sup>`;
  }
  if (main.description !== undefined) {
    description.textContent = main.description;
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

const renderWeatherImage = (image) => {
    
}
export { displayExtraInfo, renderMainWeather, renderWeatherImage };
