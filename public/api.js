const fetchWeatherData = async (locationQuery) => {
  try {
    const url = "/api/v1/weather";
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationQuery
      }),
    });
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    
    return await response.json();
  } catch (err) {
    console.log("fetchWeatherData Error:",err);
    return null
  }
};
export {fetchWeatherData}