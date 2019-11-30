import weatherDisplay from "./WeatherDisplay";
import WeatherData from './WeatherData';

export default class ForecastDisplay{
    constructor(data){
        this.forecast=ForecastDisplay.mapData(data);
        };
    

    static mapData(data){
        let fore = new Array();
        fore = data.list.map(function(x) {
            let res = new WeatherData(x); 
            res.city = data.city.name;
            res.sunrise = data.city.sunrise;
            res.sunset = data.city.sunset; 
            return res;});
        return fore;
   
    }


    display(){
        let wd = new weatherDisplay();
        this.forecast.forEach(element => {
            wd.displayWeather(element);
        });
    }

}

 /*dziala w indexie xD
 w();
 async function w () {
    let wf;
    wf = await api.getForecast('Wrocław');
    
    let fd =  new ForecastDisplay(wf);
    
    fd.display();    
}
 */