import "./styles.css";

export default class Details {
  constructor(container) {
    this.container = container;
  }

  render(currentWeather) {
    this.container.innerHTML = `
      <div>
        <div class="current">
          <div class="current-city">${currentWeather.city}</div>
          <div class="current-time">${currentWeather.dateWithTime}</div>
        </div>
        <div class="weather-data">
          <div class="column">
            <img src="http://openweathermap.org/img/wn/${currentWeather.weatherIcon}@2x.png" alt="weather icon" />
            <div class="main-temp">${currentWeather.temp} &#8451;</div>
          </div>
          <div>
            <div class="weather-data-row">${currentWeather.description}</div>
            <div class="weather-data-row">Wilgotność ${currentWeather.humidity}%</div>
            <div class="weather-data-row">Wiatr ${currentWeather.wind} km/h</div>
            <div class="weather-data-row">Wschód słońca ${currentWeather.sunrise}</div>
            <div class="weather-data-row">Zachód słońca: ${currentWeather.sunset}</div>
          </div>
        </div>
      </div>
    `;
  }
}
