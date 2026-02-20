const detailsConfig = [
  {
    label: "Feels Like",
    icon: "thermometer.png",
    key: "feels_like",
    unit: "°C",
  },
  { label: "Humidity", icon: "fa-solid fa-eye", key: "humidity", unit: "%" },
  { label: "Visibility", icon: "fa-regular fa-eye", key: "visibility", unit: "km" },
  { label: "Wind Speed", icon: "fa-solid fa-wind", key: "speedWind", unit: "km/h" },
  { label: "Clouds", icon: "fa-solid fa-cloud", key: "clouds", unit: "%" },
];

//<i class="fa-solid fa-cloud"></i>
function renderDetails(res) {
  const container = document.getElementById("details-container");

  container.innerHTML = detailsConfig.map(
    (config) => `
    <div class="detail-card">
      <div class="info">
        <i class="${config.icon}"></i>
        <span>${config.label}</span>
        <h4>${res[config.key]}${config.unit}</h4>
      </div>
    </div>
    `,
  ).join('');
}
