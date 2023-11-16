function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let city = document.querySelector(".weather-app-city");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind");
  let description = document.querySelector(".description");
  let icon = document.querySelector("#icon");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-emoji" />`;
  description.innerHTML = response.data.condition.description;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  city.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  console.log(response);
}

function searchCity(city) {
  let apiKey = "a43453b2f186ot5ff200b13dba063d7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-form-input");

  searchCity(searchInputElement.value);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector(".current-date");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);

searchCity("Paris");
