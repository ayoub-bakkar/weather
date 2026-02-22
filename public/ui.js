const infoWeather = document.querySelectorAll("[data-key]");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const city = document.querySelector(".city")
const country = document.querySelector(".country")
const time = document.getElementById("time");
const units = {
  humidity: "%",
  speedWind: "km/h",
  feels_like: "°C",
  visibility: "km",
  clouds: "%",
};

const updateWeatherUI = (data) => {
  renderCountryCity (data);
  renderMainWeather(data);
  displayExtraInfo(data);
  renderTime(data)
  //renderWeatherImage (data)
}
const renderTime = (timeِAPI) => {
  const localTimeMs  = (timeِAPI.dt + timeِAPI.timezone) * 1000;
  const  date = new Date(localTimeMs)
  const timeString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC'
  });
  time.textContent = timeString;
}
   
const renderMainWeather = (main) => {
  if (main.temp !== undefined) {
    temp.innerHTML = `${main.temp}<sup class="unit">c</sup>`;
  }
  if (main.description !== undefined) {
    description.textContent = main.description;
  }
};
const renderCountryCity = (CountryCity) => {
  if(CountryCity.country !== undefined) {
    country.textContent = CountryCity.country;
  }
  if(CountryCity.country !== undefined) {
    city.textContent = CountryCity.city;
  }
}
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
export {updateWeatherUI};
