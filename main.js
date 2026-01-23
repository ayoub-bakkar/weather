import { API_KEY } from "./API.js";
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const water = document.getElementById("water");
const search = document.getElementById("search");
let inputValue;

search.addEventListener("click", () => {
  inputValue = document.getElementById("inputValue").value.toLowerCase();
  console.log(inputValue);
  getInfoCountry(inputValue);
});
document.addEventListener("keydown", function (e) {
  if ((e.key === "Enter")) {
    inputValue = document.getElementById("inputValue").value.toLowerCase();
    console.log(inputValue);
    getInfoCountry(inputValue);
  }
});
async function getInfoCountry(country) {
  // data
  try {
    let responsev = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric&lang=ar`
    );
    let date = await responsev.json();
    console.log(date);

    if(temperature.classList.contains("active")) {
      temperature.classList.remove("active")
    }
    temperature.textContent = date.main.temp + "°C";
    wind.textContent = date.wind.speed;
    water.textContent = date.main.humidity + "%";
    if (!responsev.ok) {
      throw new Error("date fleid");
    }
  } catch (error) {
    temperature.classList.add("active");
    temperature.textContent = "plase Enter country or city!"
    console.error(error);
  }
}
