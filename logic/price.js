"use strict"

const { base } = require("mocha/lib/reporters");

function Prices() {

    function calculateFinalPrice(basePrice, variationPassenger, variationFlight) {
        let finalPrice = basePrice + (variationPassenger*basePrice/100);
        finalPrice *= (1 + variationFlight/100);
        return Math.round(100*finalPrice)/100;
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let variationPassenger = 0;
        let variationFlight = 0;
        if (passengerType.toUpperCase() === "REGULAR") {
            let variationPassenger = -5;
        }
        else {
            let variationPassenger = 5;
        }

        if (flightType.toUpperCase() === "ECONOMY") {
            let variationFlight = -3;
        }
        else {
            let variationFlight = 10; 
        }

        return calculateFinalPrice(basePrice, variationPassenger, variationFlight);
    }

    function calculateTotalFinalPrice(numberSeats, passengerType, flightType, basePrice) {
        return numberSeats*calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();