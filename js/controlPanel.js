Vue.createApp({
    data() {
        return {
            Temperature: 22,
            Humidity: 45
        }
    },
    methods: {
        change(Temperature) {
            if (Temperature)
                this.message = "Temperature are changed to " + Temperature
            else
                this.message = "Hello No Name"
        },
        
        change1(Humidity) {
            if (Humidity)
                this.message1 = "Humidity are changed to " + Humidity
            else
                this.message1 = "Hello No Name"
        }
    }
}).mount("#controlpanel")