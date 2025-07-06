const apiKey = "3ef704b63defcc83751c291108c04243";
function getWeather() {
    const city = document.getElementById("citySelect").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            const weatherInfo = `
                <h2>${data.name}</h2>
                <img src="${iconUrl}" alt="${data.weather[0].description}" />
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherDisplay").innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById("weatherDisplay").innerHTML = "Unable to fetch weather data.";
        });
}