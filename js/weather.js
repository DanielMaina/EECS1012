var weather = {
    apiKey: "168fa753cdff48763c1b822d94a8950c",
    fetchWeather: function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?&lat=43.651070&lon=-79.34701" +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { icon, description } = data.weather[0];
      const { temp } = data.main;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
      document.querySelector(".weather").classList.remove("loading");
    },
  };

weather.fetchWeather();  