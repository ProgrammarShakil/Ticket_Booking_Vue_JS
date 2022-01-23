const app = Vue.createApp({
    
    data(){
        return{
            seatControls: { // get seat control with object format
                sold: {
                  text: "Sold",
                  color: "#ff0000"
                },
                booked: {
                  text: "Booked",
                  color: "rgb(114, 109, 177)"
                },
                available: {
                    text: "Available",
                    color: "#fff"
                  },
                selected: {
                  text: "Selected",
                  color: "green"
                }
            },
            seats: [   // Get all seats - show view part with loop and class binding - then stying it - then write methods
                {
                  name: "A1",
                  type: "available",
                  price: 500
                },
                {
                  name: "A2",
                  type: "available",
                  price: 500
                },
                {
                  name: "A3",
                  type: "available",
                  price: 500
                },
                {
                  name: "A4",
                  type: "available",
                  price: 500
                },
                {
                  name: "B1",
                  type: "available",
                  price: 450
                },
                {
                  name: "B2",
                  type: "available",
                  price: 450
                },
                {
                  name: "B3",
                  type: "available",
                  price: 450
                },
                {
                  name: "B4",
                  type: "available",
                  price: 450
                },
                {
                  name: "C1",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C2",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C3",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C4",
                  type: "sold",
                  price: 500
                },
                {
                  name: "D1",
                  type: "available",
                  price: 400
                },
                {
                  name: "D2",
                  type: "available",
                  price: 400
                },
                {
                  name: "D3",
                  type: "available",
                  price: 400
                },
                {
                  name: "D4",
                  type: "available",
                  price: 400
                },
                {
                  name: "E1",
                  type: "available",
                  price: 300
                },
                {
                  name: "E2",
                  type: "available",
                  price: 300
                },
                {
                  name: "E3",
                  type: "booked",
                  price: 300
                },
                {
                  name: "E4",
                  type: "booked",
                  price: 300
                },
                {
                  name: "F1",
                  type: "available",
                  price: 300
                },
                {
                  name: "F2",
                  type: "available",
                  price: 300
                },
                {
                  name: "F3",
                  type: "available",
                  price: 300
                },
                {
                  name: "F4",
                  type: "sold",
                  price: 300
                }
              ],
        }
    },
    methods: {
        handleClick(i){
            const clickedSeat = this.seats[i];       // get clicked seat
            if (clickedSeat.type === "sold" || clickedSeat.type === "booked") {   //if seat solded it will not select
                alert('Seat is Solded'); 
                return;       // retun typed otherwise under code will be executed
            }
            clickedSeat.type =  clickedSeat.type === "selected" ? "available" : "selected";  // select / deselect

            console.log(clickedSeat);
        }
    },
})

app.mount('#app');
