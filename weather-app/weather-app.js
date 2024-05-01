import { Data } from "./data.js";
import { WeatherApi } from "./weather-api.js";

class WeatherApp {

    init() {
        const searchBoxElement = document.querySelector(".search-box");
        searchBoxElement.addEventListener("keypress", this.handleEvent);
    }

    async handleEvent(event) {
        if (event.key == "Enter") {
            const providedLocation = event.target.value;

            // Fetch the data
            const weatherApiObj = new WeatherApi();
            weatherApiObj.constructUrl(providedLocation);
            try {
                const responseJson = await weatherApiObj.invokeUrl();

                const data = Data.construct(responseJson);

                // set data
                const cityElement = document.querySelector(".city");
                cityElement.innerText = `${data.cityName}, ${data.country}`;

                const dateElement = document.querySelector(".date");
                dateElement.innerText = data.date;

                const tempElement = document.querySelector(".temp");
                tempElement.innerHTML = `${data.temp}<span>°c</span>`;

                const weatherElement = document.querySelector(".weather");
                weatherElement.innerText = data.weather;

                const tempHiLowElement = document.querySelector(".hi-low");
                tempHiLowElement.innerHTML = `${data.temp_min}°c / ${data.temp_max}°c`;
            } catch (error) {
                console.log(error.message)
                console.log(responseJson)
            }
        }
    }
}

export { WeatherApp };