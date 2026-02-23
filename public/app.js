import { fetchWeatherData } from "./api.js";
import { updateWeatherUI } from "./renderUI.js";

const searchButtonEl = document.querySelector("#icon-search");
const cityInputEl = document.getElementById("cityName");

async function handleWeatherSearch() {
  const locationQuery = cityInputEl.value;
  const response = await fetchWeatherData(locationQuery);

  updateWeatherUI(response);
}

searchButtonEl.addEventListener("click", handleWeatherSearch);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleWeatherSearch();
});

handleWeatherSearch();
