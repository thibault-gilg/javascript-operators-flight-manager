"use strict"

function Passengers() {

    function checkFlightCapacity(capacity, passengerNumbers){
        let passengers = 0;
        passengerNumbers.forEach(number => {
            passengers += number;
        });

        if (passengers < capacity) {
            return passengers;
        }
        else {
            throw new Error();
        }
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, flights, businessSeatsPerFlight, economySeatsPerFlight) {
        let planePassengers = {
            vipPassengersBusiness,
            vipPassengersEconomy,
            regularPassengersBusiness,
            regularPassengersEconomy
          };

          if (businessSeatsPerFlight > vipPassengers) {
            planePassengers.vipPassengersBusiness = vipPassengers;
            businessSeatsPerFlight -= vipPassengers;
            if (businessSeatsPerFlight > regularPassengers){
                planePassengers.regularPassengersBusiness = regularPassengers;
            }
            else {
                planePassengers.regularPassengersBusiness = businessSeatsPerFlight;
            }
          }
          else {
            planePassengers.vipPassengersBusiness = businessSeatsPerFlight;
            planePassengers.vipPassengersEconomy = vipPassengers - businessSeatsPerFlight;
          }
          return planePassengers;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers}; 
}

module.exports = Passengers();