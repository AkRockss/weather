const baseUrl = "https://temperaturerestget.azurewebsites.net/Sensor"

const WeatherUrl = "https://www.7timer.info/bin/civillight.php?lon=12.1&lat=55.6&ac=0&unit=metric&output=json&tzshift=0"


Vue.createApp({
    data() {
        return {
            temperatures: [],
            dataseries: [],

            

        }
    },

    methods: {

        getAllTemperatures() {
            this.helperGetAndShow(baseUrl)
        },
    
        async helperGetAndShow(url) { 
            try {
                const response = await axios.get(url)
                this.temperatures = await response.data
            } catch (ex) {
                alert(ex.message) 
            }
        },

        async helperGetAndShowWeather(WeatherUrl) { 
            try {
                const response = await axios.get(WeatherUrl)
                this.dataseries = await response.data
            } catch (ex) {
                alert(ex.message) 
            }
        },

        getAllWeathers() {
            this.helperGetAndShow(WeatherUrl)
        },
    
        async sortTemperature() {
            const url = baseUrl + "?sort_by=temperature"
            try {
                const response = await axios.get(url)
                this.temperatures = await response.data
            } catch (ex) {
                alert(ex.message)
            }
    
        },
    }

}).mount("#app")



