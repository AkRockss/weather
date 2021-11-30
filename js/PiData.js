const baseUrl = "https://temperaturerestget.azurewebsites.net/Sensor"

Vue.createApp({
    data() {
        return {
            temperatures: [],


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

          
        async sortByTemperature() {
            const url = baseUrl + "?sort_by=Temperature"
            try {
                const response = await axios.get(url)
                this.temperatures.sort() = await response.data
            } catch (ex) {
                alert(ex.message)
            }
    
        },
    }

}).mount("#app")



