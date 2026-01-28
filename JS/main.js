// Import the secure API key from an external configuration file
import { API_KEY } from "./API.js";
// Select DOM elements for manipulation
const description = document.getElementById("description");
const image = document.querySelector(".imgW");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const water = document.getElementById("water");
const search = document.getElementById("search");
let inputValue;
let lastCountry = "";
//Handle Search button click event
search.addEventListener("click", () => {
  // Get input value and convert to lowercase for consistent API calls"Please call the correct country or city name (numbers are not allowed)."
  inputValue = document.getElementById("inputValue").value.toLowerCase();

  //Make sure you don't apply for the same country/city twice.
  if (lastCountry === inputValue) {
    return;
  }

  // Input Validation: Check for empty strings or numeric characters
  if (inputValue.trim() === "" || /\d/.test(inputValue)) {
    image.src = "image/error-404.png";
    temperature.classList.add("activeEr");
    temperature.textContent =
      "Please enter a valid country or city name (numbers are not allowed).";
    wind.textContent = ""; // Clear old wind data
    water.textContent = ""; // Clear old humidity data
    return 2;
  }

  getInfoCountry(inputValue);
});

//Handle "Enter" key press for better User Experience (UX)
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    search.click();
  }
});

// Fetch weather data from the OpenWeatherMap API
async function getInfoCountry(country) {
  // data
  try {
    // Send a request to the weather API with metric
    let responsev = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric&lang=en`,
    );
    // Check if the respaonse is successful (e.g., handles 404 City Not Found)
    if (!responsev.ok) {
      image.src = "image/error-404.png";
      temperature.textContent = "Oops!! 404";
      wind.textContent = ""; // Clear old wind data
      water.textContent = ""; // Clear old humidity data
      return 404;
    }
    // Make sure you don't apply for the same country/city twice.
    lastCountry = country;
    // Parse the JSON response bodya
    let date = await responsev.json();
    console.log(date);
    uiUpdates();
    showDate(date.main.temp, date.wind.speed, date.main.humidity);
    showImage(date.weather[0].icon, date.weather[0].description);
  } catch (error) {
    // Handle network errors or server downtime
    image.src = "image/error-404.png";
    console.error(error);
    temperature.classList.add("active");
    temperature.textContent = "Please check your connection!";
  }
}
function uiUpdates() {
  // UI Updates: Remove error styles and display fetched data
  if (temperature.classList.contains("active")) {
    temperature.classList.remove("active");
  }
  if (temperature.classList.contains("activeEr")) {
    temperature.classList.remove("activeEr");
  }
}
// function Show temp & speed wing & humidity water
function showDate(temp, speedWind, humidityWater) {
  temperature.textContent = Math.round(temp) + "°C";
  wind.textContent = speedWind;
  water.textContent = humidityWater + "%";
}

// function The image changes depending on the weather conditions.
function showImage(icon, des) {
  image.src = `image/${icon}.png`;
  description.textContent = des;
}
getInfoCountry("jordan");
