// Import the secure API key from an external configuration file
import { API_KEY } from "./API.js";

// Select DOM elements for manipulation
const image = document.querySelector(".imgW");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const water = document.getElementById("water");
const search = document.getElementById("search");
let inputValue;

//Handle Search button click event
search.addEventListener("click", () => {
  // Get input value and convert to lowercase for consistent API calls
  inputValue = document.getElementById("inputValue").value.toLowerCase();

  // Input Validation: Check for empty strings or numeric characters
  if (inputValue.trim() === "" || /\d/.test(inputValue)) {
    image.src = "image/notFind.png";
    return 2;
  }

  getInfoCountry(inputValue);
});

//Handle "Enter" key press for better User Experience (UX)
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    inputValue = document.getElementById("inputValue").value.toLowerCase();

    //Handle "Enter" key press for better User Experience (UX)
    if (inputValue.trim() === "" || /\d/.test(inputValue)) {
      image.src = "image/notFind.png";
      return 2;
    }

    getInfoCountry(inputValue);
  }
});

// Fetch weather data from the OpenWeatherMap API
async function getInfoCountry(country) {
  // data
  try {
    // Send a request to the weather API with metric
    let responsev = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric&lang=ar`,
    );
    // Check if the response is successful (e.g., handles 404 City Not Found)
    if (!responsev.ok) {
      image.src = "image/error.jpg";
      temperature.textContent = "Oops!! 404";
      wind.textContent = ""; // Clear old wind data
      water.textContent = ""; // Clear old humidity data
      return 404;
    }

    // Parse the JSON response bodya
    let date = await responsev.json();

     // UI Updates: Remove error styles and display fetched data
    if (temperature.classList.contains("active")) {
      temperature.classList.remove("active");
    }

    // Display formatted weather information (Rounded temperature)
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
