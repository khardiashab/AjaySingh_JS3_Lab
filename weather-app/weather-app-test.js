import { Data } from "./data.js";
import { WeatherApi } from "./weather-api.js";

function constructUrlTest() {
    let city = "delhi";
    const weatherApiObj = new WeatherApi();
    let url = weatherApiObj.constructUrl(city);
    console.log("this is Url -> ", url);

}

constructUrlTest();

async function invokeUrlTest() {
    let city = "delhi";
    const weatherApiObj = new WeatherApi();
    let url = weatherApiObj.constructUrl(city);
    let responseJson = await weatherApiObj.invokeUrl();
    console.log("Respons object -> ", responseJson);
}

// invokeUrlTest();

async function dataTest(){
    let city = "delhi";
    const weatherApiObj = new WeatherApi();
    let url = weatherApiObj.constructUrl(city);
    let responseJson = await weatherApiObj.invokeUrl();
    const data = Data.construct(responseJson);
    console.log("data for html -> ", data);
}

dataTest();