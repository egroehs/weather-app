function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".enter-city");
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formatDays = days[day];
  return `${formatDays} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDay = document.querySelector(".current-date");
let currentDate = new Date();
currentDay.innerHTML = formatDate(currentDate);
