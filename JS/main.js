// Import the secure API key from an external configuration file
import { API_KEY } from "./API.js";
// Select DOM elements for manipulation
const lang = document.getElementById("lang");
const description = document.getElementById("description");
const image = document.querySelector(".image");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const water = document.getElementById("water");
const search = document.getElementById("search");
let inputValue;
let lastCountry = "";

// Toggle language between Arabic and English on click
lang.addEventListener("click", () => {
  lang.textContent = lang.textContent.trim() === "ar" ? "en" : "ar";
});

//Handle Search button click event
search.addEventListener("click", () => {
  // Get input value and convert to lowercase for consistent API calls"Please call the correct country or city name (numbers are not allowed)."
  inputValue = document.getElementById("inputValue").value.toLowerCase();
  let la = lang.textContent;

  //Make sure you don't apply for the same country/city twice.
  if (lastCountry === inputValue) {
    return;
  }
  if (lang.textContent.trim() === `ar`) {
    la = `en`;
  } else {
    la = `ar`;
  }

  // Input Validation: Check for empty strings or numeric characters
  if (inputValue.trim() === "" || /\d/.test(inputValue)) {
    image.src = "image/error-404.png";
    temperature.classList.add("activeEr");
    temperature.textContent =
      "Please enter a valid country or city name (numbers are not allowed).";
    wind.textContent = ""; // Clear old wind data
    water.textContent = ""; // Clear old humidity data
    description.textContent = "";
    return 2;
  }

  getInfoCountry(inputValue, la);
});
//Handle "Enter" key press for better User Experience (UX)
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    search.click();
  }
});

// Fetch weather data from the OpenWeatherMap API
async function getInfoCountry(country, lang) {
  // data
  try {
    // Send a request to the weather API with metric
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric&lang=${lang}`,
    );

    // Check if the respaonse is successful (e.g., handles 404 City Not Found)
    if (!response.ok) {
      image.src = "image/error-404.png";
      temperature.textContent = "Oops!! 404";
      wind.textContent = ""; // Clear old wind data
      water.textContent = ""; // Clear old humidity data
      description.textContent = ""; // Clear old description data
      return 404;
    }
    // Make sure you don't apply for the same country/city twice.
    lastCountry = country;
    // Parse the JSON response bodya
    let data = await response.json();
    console.log(data);
    renderWeatherDetails(data);
  } catch (error) {
    // Handle network errors or server downtime
    image.src = "image/error-404.png";
    console.error(error);
    temperature.classList.add("active");
    temperature.textContent = "Please check your connection!";
  }
}
// function Show temp & speed wing & humidity water
function renderWeatherDetails(data) {
  // Reset UI state to prevent style conflicts before showing new results
  temperature.classList.remove("activeEr");
  temperature.classList.remove("active");
  console.log(data);
  temperature.textContent = Math.round(data.main.temp) + "c" + "\u00B0";
  description.textContent = data.weather[0].description;
  water.textContent = Math.round(data.main.humidity) + "%";
  wind.textContent = data.wind.speed;
 image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
getInfoCountry("jordan", "ar");
