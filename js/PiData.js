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
    }

}).mount("#app")



