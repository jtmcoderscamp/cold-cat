export default class WeatherDataSource {
    constructor() {
        this.apiKey = '84af29f03ef35bb4dd7f1e9b0ad575e2';
    }  
    getWeather(city) { 
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apiKey)  
            .then(function(resp) { 
                return resp.json() })
            .then(function(data) {
                console.log(data);
                return new WeatherData(data);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
}
const input = document.getElementById("submit");
var city = "";
var weather = new WeatherDataSource();
input.addEventListener('click', function(e) {
    e.preventDefault();
    city = document.querySelector("#city").value;
    weather.getWeather(city);
});
