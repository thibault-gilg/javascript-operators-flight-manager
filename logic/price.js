"use strict"

const { base } = require("mocha/lib/reporters");

function Prices() {

    function calculateFinalPrice(basePrice, variationPassenger, variationFlight) {
        let finalPrice = basePrice;
        finalPrice *= 1 + variationPassenger/100;
        finalPrice *= 1 + variationFlight/100;
        return finalPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let variationPassenger = 0;
        let variationFlight = 0;
        if (passengerType.toUpperCase() === "REGULAR") {
            variationPassenger = -5;
        }
        else {
            variationPassenger = 5;
        }

        if (flightType.toUpperCase() === "ECONOMY") {
            variationFlight = -3;
        }
        else {
            variationFlight = 10; 
        }

        return calculateFinalPrice(basePrice, variationPassenger, variationFlight);
    }

    function calculateTotalFinalPrice(numberSeats, passengerType, flightType, basePrice) {
        return numberSeats*calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();