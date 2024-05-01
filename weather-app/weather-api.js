// import fetch from 'node-fetch';

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "20515614e35b1c8c84a7ba59441d2abd"
const UNITS = "metric"

class WeatherApi {

    constructUrl(city) {
        this.baseUrl = new URL(WEATHER_API_BASE_URL);
        this.baseUrl.searchParams.append("q", city);
        this.baseUrl.searchParams.append("appid", API_KEY);
        this.baseUrl.searchParams.append("units", UNITS);
        return this.baseUrl.toString();
    }

    async invokeUrl() {
        try {
            let responsObj = await fetch(this.baseUrl.toString());
            let responseParseJson = await responsObj.json();
            return responseParseJson;

        } catch (error) {
            console.log(error);
        }
    }
}

export { WeatherApi };