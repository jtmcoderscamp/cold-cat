import "./forecastStyle.css";

//this is a class used to display one weatherData element at a time
//its objects are supposed to be made and used in ForecastDisplay objects

export default class weatherDisplay {
  constructor(container) {
    this.container = container;
    this.container.className = "weatherContainer";
    this.counter = 0;
    this.today = new Date().toLocaleDateString().substr(0, 2);
  }

  displayWeather(weatherData) {
    let day = weatherData.dateWithTime.substring(8, 10);
    if (day != this.today && this.counter < 32) {
      this.counter++;
      if (weatherData.time == "01:00")
        this.appendTitle(weatherData.dateWithTime);
      this.displayElement(weatherData);
    }
  }

  displayElement(element) {
    const output = document.createElement("div");
    const imgSrc = `http://openweathermap.org/img/wn/${element.weatherIcon}@2x.png`;
    output.className = "currentWeather";
    const hour = element.dateWithTime.substring(12, 17);
    output.innerHTML = `<div class=time>${hour}</div>  
        <div class=icon><img src=${imgSrc} alt="weather icon"></div>
        <div class=temperature>${element.temp}C</div>`;

    this.container.appendChild(output);
  }

  appendTitle(dateWithTime) {
    const output = document.createElement("div");
    const day = dateWithTime.substr(0, 10);
    output.className = "rowName";
    output.innerHTML = `${day}`;
    this.container.appendChild(output);
  }
}
