function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-form-input");
  let city = document.querySelector(".weather-app-city");
  city.innerHTML = searchInputElement.value;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);
