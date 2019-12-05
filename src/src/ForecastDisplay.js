import weatherDisplay from "./WeatherDisplay";
import WeatherData from "./WeatherData";

//class used to display 4days forecast
//to use it first declare API
//pass api reference and id of container in which you want to display forecast
//to display forecast call function display(city) and pass name of the city as a string

export default class ForecastDisplay {
  constructor(api, containerId) {
    this.api = api;
    this.containerId = containerId;
  }

  async display(city) {
    let data = await this.api.getForecast(city);
    let wd = new weatherDisplay(this.containerId);
    data.forEach(element => {
      wd.displayWeather(element);
    });
  }
}
