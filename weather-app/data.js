class Data {
    static formatDate() {

        const currentDate = new Date();

        return currentDate.toLocaleDateString("en-US", {
            "year": "numeric",
            "month": "long",
            "weekday": "long",
            "day": "numeric"
        })

    }
    static construct(pasreJsonData) {
        let data ={};
        data.weather = pasreJsonData.weather[0].main;
        data.temp = pasreJsonData.main.temp;
        data.temp_min = pasreJsonData.main.temp_min;
        data.temp_max = pasreJsonData.main.temp_max;
        data.country = pasreJsonData.sys.country;
        data.cityName = pasreJsonData.name;
        data.date = Data.formatDate();
        return data;
    }

}

export { Data };