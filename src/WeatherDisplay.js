import WeatherData from "./WeatherData";

export default class weatherDisplay {

    static displayWeather(day, weatherData)
    {

        let output = document.getElementById(day);
        weatherDisplay.displayVariable(output, "temperature", weatherData.temperature);
        weatherDisplay.displayVariable(output, "humidity", weatherData.humidity);
        weatherDisplay.displayVariable(output, "clouds", weatherData.clouds);
        //weatherDisplay.displayVariable(output, "chance to rain",weatherData.rain);
        weatherDisplay.displayVariable(output, "wind", weatherData.wind);
    }

    static displayVariable (output, variableName, value) 
    {
        var textArea = document.createElement("textarea");
        textArea.style.border= '1px solid gray'
        textArea.style.width='20vw';
        textArea.style.height='10vh';
        textArea.style.resize = 'none';
        textArea.setAttribute ( 'disabled', true);
        textArea.innerText=variableName + ": " + value;
        output.appendChild(textArea);
    }
   

}