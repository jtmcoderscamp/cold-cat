import weatherDisplay from "./WeatherDisplay";

//class used to display 4days forecast
//to use it first declare API
//pass api reference and id of container in which you want to display forecast
//to display forecast call function display(city) and pass name of the city as a string

export default class ForecastDisplay {
  constructor(api, container) {
    this.api = api;
    this.container = container;
  }

  async display(city) {
    const forecast = await this.api.getForecast(city);
    const wd = new weatherDisplay(this.container);
    forecast.forEach(element => {
      wd.displayWeather(element);
    });
  }
}
