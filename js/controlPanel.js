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

            // created() is called automatically when the page is loaded

            console.log("created method called")

            this.helperGetAndShow(baseUrl)
        },
    methods: {

         // GetAllTemperatures() initiates the rest api for use in this method 
        
        getAllTemperatures() {
            this.helperGetAndShow(baseUrl)

        },

         // Change() 
        change(Temperature) {
            this.Temp2 = this.Temperature

        },
        
        change1(Humidity) {
            this.Humidity2 = this.Humidity

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