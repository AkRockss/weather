const baseUrl = "https://temperaturerestget.azurewebsites.net/Sensor"

Vue.createApp({
    data() {
        return {
            temperatures: [],
            averageTemps: 0,
            averageHumid: 0,

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
                this.averageTemps = await (this.temperatures[0].temperature + this.temperatures[1].temperature + this.temperatures[2].temperature + this.temperatures[3].temperature + this.temperatures[4].temperature) / 5
                this.averageHumid = await (parseFloat(this.temperatures[0].humidity) + parseFloat(this.temperatures[1].humidity) + parseFloat(this.temperatures[2].humidity) + parseFloat(this.temperatures[3].humidity) + parseFloat(this.temperatures[4].humidity)) / 5
            } catch (ex) {
                alert(ex.message) 
            }
        },
    }

}).mount("#app")



