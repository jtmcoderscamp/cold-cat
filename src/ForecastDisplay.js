import weatherDisplay from "./WeatherDisplay";
import WeatherData from './WeatherData';

//class used to display 4days forecast
//to use it first declare API 
//pass api reference and id of container in which you want to display forecast
//to display forecast call function display(city) and pass name of the city as a string

export default class ForecastDisplay{
    constructor(api, containerId){
        this.api=api;
        this.containerId=containerId;
        }
    

    mapData(data){
        let fore = new Array();
        fore = data.list.map(function(x) {
            let res = new WeatherData(x); 
            res.city = data.city.name;
            res.sunrise = data.city.sunrise;
            res.sunset = data.city.sunset; 
            return res;});
        return fore;
   
    }


    async display(city){
        let data = await this.api.getForecast(city);
        let wd = new weatherDisplay(this.containerId);
        let forecast = this.mapData(data);
        forecast.forEach(element => {
            wd.displayWeather(element);
        });
    }

}
