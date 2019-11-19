/**
 * This file initializes the application
 * Code written here will be executed when application launches
 */

console.log("...");

function getweather(cityName) {
    var apiKey = '84af29f03ef35bb4dd7f1e9b0ad575e2';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&lang=pl&appid=' + apiKey)  
    .then(function(resp) { 
        return resp.json() })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    });
  }
  
getweather('Wroclaw');