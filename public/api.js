const inputvaule = document.getElementById("inputvaule");
const send = document.getElementById("send");


const sendWeatherData  = async (cityName) => {
    try{
        const url = "/api/v1/weather";
        const response = await fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: cityName,
            })
        })
        const result = await response.json();
        console.log(result)
    }catch(error) {
        console.log(error)
    }
}
send.addEventListener("click", () => {
    const cityName = inputvaule.value; // نأخذ القيمة اللحظية عند الضغط
    if (cityName.trim() !== "") {
        sendWeatherData(cityName);
    } else {
        alert("يرجى إدخال اسم مدينة");
    }
});