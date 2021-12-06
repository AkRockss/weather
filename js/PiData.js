const baseUrl = "https://temperaturerestget.azurewebsites.net/Sensor"
const baseUrl2 = "https://temperaturerestget.azurewebsites.net/GetAverage"

Vue.createApp({
    data() {
        return {
            temperatures: [],
            temperaturesAverage: [],
            averageTemps: 0,
            averageHumid: 0,

        }
    },

    methods: {

        // getAllTemperatures() initiates the rest api for use in this method 
        getAllTemperatures() {
            this.helperGetAndShow(baseUrl)

        },

         // getAverage144() initiates the rest api for use in this method 
        getAverage144() {
            this.helperGetAndShowAvg(baseUrl2)

        },

        // helperGetAndShow() inititates the full json from api to be worked with
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.temperatures = await response.data

            } catch (ex) {
                alert(ex.message)
            }
        },

        // helperGetAndShowAvg() is the average algorithm for the program
        async helperGetAndShowAvg(url) {
            try {
                this.averageTemps = 0.0
                this.averageHumid = 0.0
                const response = await axios.get(url)
                this.temperaturesAverage = await response.data

                for await (temp of await this.temperaturesAverage) {
                    this.averageTemps += await temp.temperature
                    this.averageHumid += await parseFloat(temp.humidity)
                }
                this.averageTemps = await this.averageTemps / this.temperaturesAverage.length
                this.averageHumid = await this.averageHumid / this.temperaturesAverage.length

            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")



