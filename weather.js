const API_KEY = "30ccac4351c9964310cd3cce7aceb7d3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoErr() {
  alert("지역 정보를 찾지 못했습니다");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
