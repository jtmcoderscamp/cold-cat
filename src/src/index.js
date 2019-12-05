import "./styles.css";
import Details from "./details";
import WeatherDataSource from "./weatherDataSource";
import ForecastDisplay from "./ForecastDisplay";
import CityInfo from "./CityInfo";

class WeatherApp {
  constructor(container) {
    this.container = container;
    this.city = "";
    this.weatherData = null;
    this.dataSource = new WeatherDataSource();
    this.fd = null;
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
        <div id="details"></div>
        <div id="forecast"></div>
        <div id="city-info"></div>
      </div>
    `;

    const loadNewWeatherData = async e => {
      e.preventDefault();
      this.weatherData = await this.dataSource.getWeather(this.city);
      this.details.render(this.weatherData);
      this.fd.display(this.city);
      this.cityInfo.render(this.city);
    };

    this.container
      .querySelector("#city")
      .addEventListener("change", e => (this.city = e.target.value));

    this.container
      .querySelector("#submit")
      .addEventListener("click", loadNewWeatherData);

    this.fd = new ForecastDisplay(
      this.dataSource,
      this.container.querySelector("#forecast")
    );
    this.details = new Details(this.container.querySelector("#details"));
    this.cityInfo = new CityInfo(this.container.querySelector("#city-info"));
  }
}

const app = new WeatherApp(document.querySelector("body"));
app.init();
