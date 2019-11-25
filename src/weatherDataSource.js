export default class WeatherDataSource {
    constructor() {
        this.apiKey = '84af29f03ef35bb4dd7f1e9b0ad575e2';
    }  
    getweather(city) { 
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apiKey)  
            .then(function(resp) { 
                return resp.json() })
            .then(function(data) {
                console.log(data);
                //showWeather(data);
                return data;
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
    weather.getweather(city);
});

//additional function, only for testing
// function showWeather(data) {
//     var celcius = Math.round(parseFloat(data.main.temp)-273.15);
//     var description = data.weather[0].description;
    
//     if( description.indexOf('rain') > 0 ) {
//         document.body.className = 'rainy';
//     } else if( description.indexOf('cloud') > 0 ) {
//         document.body.className = 'cloudy';
//     } else if( description.indexOf('sunny') > 0 ) {
//         document.body.className = 'sunny';
//     }
    
//     document.getElementById('description').innerHTML = description;
//     document.getElementById('temp').innerHTML = celcius + '&deg;';
// }