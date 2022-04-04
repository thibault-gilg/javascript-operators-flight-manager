function Flights() {

    function calculateNumberOfFlights(passengers, capacity) {
        passengers = Number(passengers);
        capacity = Number(capacity);

        if (!(Number.isInteger(passengers) && passengers > 0)) {
            throw new Error("The number of passengers must be a positive integer value");
        }

        if (!(Number.isInteger(capacity) && capacity > 0)) {
            throw new Error("The capacity of the flight must be a positive integer value");
        }

        let flights = Number(passengers / capacity);
        if (!Number.isInteger(flights)) {
            flights = Math.ceil(flights);
        }
        return flights;
    }

    function checkAircraftRevision(distanceLimit, distances) {
        let totalDistance = 0;
        distances.forEach(distance => {
            totalDistance += distance;
        });

        if (totalDistance <= distanceLimit/2){
            return (`The revision needs to be done within the next 3 months`)
        }
        else if (totalDistance <= 0.75*distanceLimit) {
            return (`The revision needs to be done within the next 2 months`)
        }
        else if (totalDistance <= distanceLimit) {
            return (`The revision needs to be done within the next month`)
        }
        else {
            throw new Error();
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision}; 
}

module.exports = Flights();