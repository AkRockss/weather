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

        getAllTemperatures() {
            this.helperGetAndShow(baseUrl)

        },

        getAverage144() {
            this.helperGetAndShowAvg(baseUrl2)

        },

        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.temperatures = await response.data

            } catch (ex) {
                alert(ex.message)
            }
        },

        async helperGetAndShowAvg(url) {
            try {
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



