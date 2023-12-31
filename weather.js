const
searchInput = document.querySelector("#searchInput")
searchButton = document.querySelector("#searchButton")
weatherIcon = document.querySelector("#weatherIcon")
windSpeed = document.querySelector("#windSpeed")
humidity = document.querySelector(".humidity")
weather = document.querySelector(".weather")
desc = document.querySelector(".desc")
API = "82005d27a116c2880c8f0fcb866998a0";
const setWeatherDetails = (data) => {
    desc.innerHTML = data.weather[0].description;
    weather.innerHTML = Math.round(data.main.temp - 273.15) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "km/h";
    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = "/starter template/icons/04d.png";
            break;
        case 'Clear':
            weatherIcon.src = "/starter template/icons/01d.png";
            break;
        case 'Rain':
            weatherIcon.src = "/starter template/icons/09d.png";
            break;
        case 'Mist':
            weatherIcon.src = "/starter template/icons/50d.png";
            break;
        case 'Snow':
            weatherIcon.src = "/starter template/icons/13d.png";
            break;
        case 'Haze':
            weatherIcon.src = "/starter template/icons/50d.png";
            break;
        case 'heavy rain':
            weatherIconicon.src= "/starter template/icons/11n.png";
            break;
    } 
}
const callAPI = (id) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${id}`)
        .then(response => {
            
            if (!response.ok) {
                alert("Check spelling of City and try again or Something Went Wrong!");
                throw new Error(`Request failed with status ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            setWeatherDetails(data);
        })
        .catch(error => console.log(error))
}
searchButton.addEventListener("click", (e) => {
    if (searchInput.value == "") {
        alert("Please Enter City Name.");
    } else {
        callAPI(API);
    }
})
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
    }
})
searchButton.click();
