import { sendWeatherData } from "./api.js";
import { updateWeatherUI } from "./ui.js";

const buttonSearche = document.querySelector("#icon-search");
const cityName = document.getElementById("cityName");

async function handleWeatherSearch() {
  const city = cityName.value;
  const response = await sendWeatherData(city);

  updateWeatherUI(response);
  console.log(response);
}

buttonSearche.addEventListener("click", handleWeatherSearch);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleWeatherSearch();
});

handleWeatherSearch();
