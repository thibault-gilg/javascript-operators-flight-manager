"use strict"

function Util() {

    function calculateTotalDistributedPassengers(planePassengers) {
        let totalPassengers = 0;
        let key;
        
        for ( key in planePassengers) {
            totalPassengers += planePassengers[key];
        }
    }

    function calculateTotalNumberOfPassengers(passengerAmounts) {
        let totalPassengers = 0;
        passengerAmounts.forEach(amount => {
            totalPassengers += amount;
        })
        return totalPassengers;
    }

    function checkInput(input) {
        if (input.isEmpty() || input.isNaN()) {
            throw new Error("Incorrect values");
        }
    }

    function calculateTotalDistance(distances) {
        let totalDistance = 0;
        distances.forEach(distance => {
            totalDistance = totalDistance + (distance > 0 ? distance : 0);
        });
        return totalDistance;
    }

    function calculateBonusPoints(distancesBusiness, distancesEconomy, businessBonus, economyBonus) {
        let totalBonusPoints = calculateTotalDistance(distancesBusiness)*businessBonus/100 + calculateTotalDistance(distancesEconomy)*economyBonus/100;
        return totalBonusPoints;
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints };
}

module.exports = Util();