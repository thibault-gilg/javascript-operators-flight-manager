function Util() {

    function calculateTotalDistributedPassengers(planePassengers) {
        let totalPassengers = 0;
        for (const key in planePassengers) {
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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}; 
}

module.exports = Util();