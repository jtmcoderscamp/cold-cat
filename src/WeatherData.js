export default class WeatherData {
  constructor(data) {
    this.city = data.name;
    this.temp = Math.round(data.main.temp);
    this.sunrise =
      data.sys && data.sys.sunrise
        ? WeatherData.unixToDate(data.sys.sunrise)
        : null;
    this.sunset =
      data.sys && data.sys.sunset
        ? WeatherData.unixToDate(data.sys.sunset)
        : null;
    this.humidity = data.main.humidity;
    this.clouds = data.clouds.all;
    this.main = data.weather[0].main;
    this.description = data.weather[0].description;
    this.weatherIcon = data.weather[0].icon;
    this.dateWithTime =
      data.dt && WeatherData.formatDate(new Date(data.dt * 1000));
    this.time = data.dt && WeatherData.unixToDate(data.dt);
    this.wind = data.wind.speed;
  }

  //convert unix timestamp to correct date
  static unixToDate(unix) {
    let oldDate = new Date(unix * 1000); // converts s to ms and make a Date object
    let hours = oldDate.getHours(); //hours+1 to get correct timezone
    let minutes = oldDate.getMinutes();
    return this.fixTimeFormat(hours, minutes);
  }

  //fix data format
  static fixTimeFormat(hours, minutes) {
    hours = this.fixNumber(hours);
    minutes = this.fixNumber(minutes);
    let date = `${hours}:${minutes}`;
    return date;
  }

  //make 0X instead of X if number is <10
  static fixNumber(number) {
    if (number < 10) return "0" + number;
    return number;
  }

  //fix date to format YYYY-MM-DD, HH:MM
  static formatDate(date) {
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 101).toString().substring(1);
    let day = (date.getDate() + 100).toString().substring(1);
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    minutes = this.fixNumber(minutes);
    return `${year}-${month}-${day}, ${hours}:${minutes}`;
  }
}
