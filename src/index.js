import "./styles.css";
import Details from "./details";
import WeatherDataSource from "./weatherDataSource";

class WeatherApp {
  constructor(container) {
    this.container = container;
    this.city = "";
    this.weatherData = null;
    this.dataSource = new WeatherDataSource();
  }
  init() {
    this.container.innerHTML = `
      <div id="search-city">
        <form>
          <label>Wybierz miasto</label>			
          <select id="city" name="city">
            <option value=""></option>	
            <option value="Gdansk">Gdańsk</option>
            <option value="Krakow">Kraków</option>
            <option value="Lublin">Lublin</option>
            <option value="Poznan">Poznań</option>
            <option value="Przemysl">Przemyśl</option>
            <option value="Sandomierz">Sandomierz</option>
            <option value="Szczecin">Szczecin</option>
            <option value="Torun">Toruń</option>
            <option value="Warsaw">Warszawa</option>
            <option value="Wroclaw">Wrocław</option>
          </select>
          <button id="submit">Sprawdź pogodę i atrakcje</button>
        </form>
        <div id="details" />
      </div>
    `;

    const loadNewWeatherData = async e => {
      e.preventDefault();
      this.weatherData = await this.dataSource.getWeather(this.city);
      this.forecastData = await this.dataSource.getForecast(this.city);
      this.details.render(this.weatherData, this.forecastData);
    };

    this.container
      .querySelector("#city")
      .addEventListener("change", e => (this.city = e.target.value));

    this.container
      .querySelector("#submit")
      .addEventListener("click", loadNewWeatherData);

    this.details = new Details(this.container.querySelector("#details"));
  }
}

const app = new WeatherApp(document.querySelector("body"));
app.init();
