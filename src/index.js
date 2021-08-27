import "./style.css";

const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const body = document.querySelector("body");
const resultsDiv = document.getElementById("results");

searchBtn.onclick = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=dd4ab54125520d0ab97086917ac5f4a4`,
    {
      mode: "cors",
    }
  );

  const weatherData = await response.json();

  if (weatherData.cod == 200) {
    resultsDiv.innerHTML = "";

    // Nodes
    const location = document.createElement("p");
    const mainWeather = document.createElement("h1");
    const weatherIcon = document.createElement("img");
    const feelsLikePara = document.createElement("p");
    const feelsLike = document.createElement("h1");
    const minTemp = document.createElement("h1");
    const maxTemp = document.createElement("h1");
    const humidityPara = document.createElement("p");
    const humidity = document.createElement("h1");
    const pressurePara = document.createElement("p");
    const pressure = document.createElement("h1");

    const mainWeatherDiv = document.createElement("div");
    const feelsLikeDiv = document.createElement("div");
    const extremesDiv = document.createElement("div");
    const humidityDiv = document.createElement("div");
    const pressureDiv = document.createElement("div");
    const additionalContainer = document.createElement("div");

    // Nodes' classnames
    location.className = "location";
    mainWeather.className = "main-weather";
    weatherIcon.className = "weather-icon";
    feelsLikePara.className = "feels-like-p";
    feelsLike.className = "feels-like";
    minTemp.className = "min-temp";
    maxTemp.className = "max-temp";
    humidityPara.className = "humidity-p";
    humidity.className = "humidity";
    pressurePara.className = "pressure-p";
    pressure.className = "pressure";

    mainWeatherDiv.className = "main-weather-div";
    feelsLikeDiv.className = "feels-like-div";
    extremesDiv.className = "extremes-div";
    humidityDiv.className = "humidity-div";
    pressureDiv.className = "pressure-div";
    additionalContainer.className = "additional-container";

    // Nodes' content
    location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    mainWeather.textContent = `${weatherData.weather[0].main}`;
    weatherIcon.src = `../src/img/${weatherData.weather[0].main.toLowerCase()}.png`;
    feelsLikePara.textContent = "Feels like";
    feelsLike.textContent = `${weatherData.main.feels_like}`;
    minTemp.textContent = `${weatherData.main.temp_min}`;
    maxTemp.textContent = `${weatherData.main.temp_max}`;
    humidityPara.textContent = `Humidity`;
    humidity.textContent = `${weatherData.main.humidity}`;
    pressurePara.textContent = `Pressure`;
    pressure.textContent = `${weatherData.main.pressure}`;

    switch (weatherData.weather[0].main) {
      case "Clear":
        body.className = "sunny";
        break;
      case "Clouds":
        body.className = "cloudy";
        break;
      case "Rain":
        body.className = "cloudy";
        break;
      case "Snow":
        body.className = "snow";
        break;
      case "Thunderstorm":
        body.className = "storm";
        break;
      default:
        body.className = "standard";
        break;
    }

    resultsDiv.appendChild(location);

    mainWeatherDiv.appendChild(mainWeather);
    mainWeatherDiv.appendChild(weatherIcon);
    resultsDiv.appendChild(mainWeatherDiv);

    feelsLikeDiv.appendChild(feelsLikePara);
    feelsLikeDiv.appendChild(feelsLike);
    resultsDiv.appendChild(feelsLikeDiv);

    extremesDiv.appendChild(minTemp);
    extremesDiv.appendChild(maxTemp);
    resultsDiv.appendChild(extremesDiv);

    humidityDiv.appendChild(humidityPara);
    humidityDiv.appendChild(humidity);
    pressureDiv.appendChild(pressurePara);
    pressureDiv.appendChild(pressure);
    additionalContainer.appendChild(humidityDiv);
    additionalContainer.appendChild(pressureDiv);
    resultsDiv.appendChild(additionalContainer);

    console.log(weatherData);
  } else {
    resultsDiv.innerHTML = "";
    body.className = "standard";
    resultsDiv.style.justifyContent = "center";
    const errorHeader = document.createElement("p");
    const errorIcon = document.createElement("img");

    errorIcon.src = "../src/img/error-icon.png";
    errorHeader.textContent = "Something went wrong";
    errorHeader.style.alignSelf = "center";

    resultsDiv.appendChild(errorIcon);
    resultsDiv.appendChild(errorHeader);
  }
};
