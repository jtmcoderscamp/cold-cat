export default class WeatherData {

    constructor(data)
    {
        
        let temp = Math.round((data.main.temp-273.15)*10)/10;
        let sunrise = WeatherData.unixToDate(data.sys.sunrise);
        let sunset = WeatherData.unixToDate(data.sys.sunset);
        let humidity = data.main.humidity;
    
    }

    //convert unix timestamp to correct date
    static unixToDate (unix) 
    {
        let oldDate = new Date(unix*1000); // converts s to ms and make a Date object
        let hours = oldDate.getHours()+1;     //hours+1 to get correct timezone
        let minutes = oldDate.getMinutes();
        let seconds = oldDate.getSeconds();
        return this.fixDateFormat(hours, minutes, seconds);
    }

    //fix data format
    static fixDateFormat (hours, minutes, seconds)
    {
        hours = this.fixNumber(hours);
        minutes = this.fixNumber(minutes);
        seconds = this.fixNumber(seconds);
        let date = `${hours}:${minutes}:${seconds}`;
        return date;
    }

    //make 0X instead of X if number is <10
    static fixNumber (number)
    {
        if(number<10)
            return '0'+number;
        return number;
    }
    

}