const baseUrl = "https://temperaturerestget.azurewebsites.net/Sensor"
Vue.createApp({
    data() {
        return {
            actualTemp: [],
            Temperature: 22,
            Temp2: 22,
            Humidity2: 45,
            Humidity: 45
        }
    },
        async created() {

            // created() is a life cycle method, not an ordinary method

            // created() is called automatically when the page is loaded

            console.log("created method called")

            this.helperGetAndShow(baseUrl)
        },
    methods: {
        
        getAllTemperatures() {
            this.helperGetAndShow(baseUrl)

        },
        change(Temperature) {
            this.Temp2 = this.Temperature

            this.message = "Temperature is changed to " + Temperature
        },
        
        change1(Humidity) {
            this.Humidity2 = this.Humidity

            this.message1 = "Humidity is changed to " + Humidity
        },
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.actualTemp = await response.data

            } catch (ex) {
                alert(ex.message)
            }
        },
    }
}).mount("#controlpanel")