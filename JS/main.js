// Import the secure API key from an external configuration file
import { API_KEY } from "./API.js";

// Select DOM elements for manipulation
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
    image.src = "image/no-results.png";
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
      image.src = "image/no-results.png";
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
    // UI Updates: Remove error styles and display fetched data
    if (temperature.classList.contains("active")) {
      temperature.classList.remove("active");
    }
    if (temperature.classList.contains("activeEr")) {
      temperature.classList.remove("activeEr");
    }

    // Display formatted weather information (Rounded temperature)
    if (date.weather[0].id >= 200 && date.weather[0].id < 300) {
      image.src = "image/thunderstorm.png"; // thunderstorm
    } else if (date.weather[0].id >= 300 && date.weather[0].id < 400) {
      image.src = "image/drizzle.png"; // drizzle
    } else if (date.weather[0].id >= 500 && date.weather[0].id < 600) {
      image.src = "image/rainy.png"; // rainy
    } else if (date.weather[0].id >= 600 && date.weather[0].id < 700) {
      image.src = "image/snow.png"; // snow
    } else if (date.weather[0].id === 800) {
      image.src = "image/clear-sky.png"; // clear-skybyes
    } else if (date.weather[0].id === 804) {
      image.src = "image/overcast-clouds.png"; // overcast-clouds yes
    } else if (date.weather[0].id > 800 && date.weather[0].id < 804) {
      image.src = "image/cloud.png"; // clouds
    } else if (date.weather[0].id >= 700 && date.weather[0].id <= 799) {
      image.src = "image/atmosphere.png"; //atmosphere
    }

    temperature.textContent = Math.round(date.main.temp) + "°C";
    wind.textContent = date.wind.speed;
    water.textContent = date.main.humidity + "%";
  } catch (error) {
    // Handle network errors or server downtime
    image.src = "image/error.jpg";
    console.error(error);
    temperature.classList.add("active");
    temperature.textContent = "Please check your connection!";
  }
}
