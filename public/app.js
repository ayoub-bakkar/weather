import { sendWeatherData } from "./api.js";
import { displayExtraInfo, renderMainWeather } from "./ui.js";

const buttonSearche = document.querySelector("#icon-search")

const cityName = document.getElementById("cityName");

buttonSearche.addEventListener("click", async (e) => {
    const city = cityName.value;
    const response = await sendWeatherData(city);
    displayExtraInfo(response)
    renderMainWeather(response)
    console.log(response)
})