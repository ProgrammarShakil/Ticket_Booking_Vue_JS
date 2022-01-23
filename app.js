const app = Vue.createApp({
    
    data(){
        return{
            seatControls: {
                sold: {
                  text: "Sold",
                  color: "#ff0000"
                },
                booked: {
                  text: "Booked",
                  color: "yellow"
                },
                available: {
                    text: "Available",
                    color: "#fff"
                  },
                selected: {
                  text: "Selected",
                  color: "green"
                }
            }
        }
    }
})

app.mount('#app');
