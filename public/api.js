const sendWeatherData = async (cityName) => {
  try {
    const url = "/api/v1/weather";
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: cityName,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("API Error:",error);
    return null
  }
};
export {sendWeatherData}