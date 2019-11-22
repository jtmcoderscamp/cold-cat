export default class weatherDisplayer {

    static displayWeather(day)
    {
        let output = document.getElementById(day);
        weatherDisplayer.displayVariable(output, "temperature", "34");
        weatherDisplayer.displayVariable(output, "humidity", "20%");
        weatherDisplayer.displayVariable(output, "clouds", "[clouds pic here]");
        weatherDisplayer.displayVariable(output, "chance to rain","50%");
    }

    static displayVariable (output, variableName, temperature) 
    {
        var textArea = document.createElement("textarea");
        textArea.innerText=variableName + ": " + temperature;
        output.appendChild(textArea);
    }
   

}