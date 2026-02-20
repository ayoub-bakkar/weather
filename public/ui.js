const detailsConfig = [
  {
    label: "Feels Like",
    icon: "thermometer.png",
    key: "feels_like",
    unit: "°C",
  },
  { label: "Humidity", icon: "fa-solid fa-eye", key: "humidity", unit: "%" },
  { label: "Visibility", icon: "eye.png", key: "visibility", unit: "km" },
  { label: "Wind Speed", icon: "wind.png", key: "speedWind", unit: "km/h" },
  { label: "Clouds", icon: "clouds.png", key: "clouds", unit: "%" },
];
function renderDetails(res) {
  const container = document.getElementById("details-container");

  container.innerHTML = detailsConfig.map(
    (config) => `
    <div class="detail-card">
    <div class="info">
        <span>${config.label}</span>
        <h4>${res[config.key]}${config.unit}</h4>
    </div>
    </div>
    `,
  ).join();
}
